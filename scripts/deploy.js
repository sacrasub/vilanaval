#!/usr/bin/env node

/**
 * Script de Deploy para Hostinger via FTP
 * Uso: npm run deploy
 */

const ftp = require('basic-ftp');
const path = require('path');
const fs = require('fs');

// Carrega variáveis de ambiente
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const { FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_REMOTE_PATH } = process.env;

// O diretório de build que definimos em build.js
const buildFolder = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(buildFolder)) {
    console.error('❌ Nenhuma pasta dist encontrada. Crie o build antes.');
    process.exit(1);
}

async function deploy() {
    // Valida credenciais
    if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) {
        console.error('❌ Credenciais FTP não configuradas!');
        console.error('   Configure as variáveis no arquivo .env:');
        console.error('   - FTP_HOST');
        console.error('   - FTP_USER');
        console.error('   - FTP_PASSWORD');
        process.exit(1);
    }

    const remotePath = FTP_REMOTE_PATH || '/';

    console.log('🚀 Iniciando deploy para Hostinger...');
    console.log(`   Host: ${FTP_HOST}`);
    console.log(`   Usuário: ${FTP_USER}`);
    console.log(`   Pasta local: dest`);
    console.log(`   Pasta remota: ${remotePath}`);
    console.log('');

    const client = new ftp.Client();
    client.ftp.verbose = false;

    try {
        console.log('🔌 Conectando ao servidor FTP...');
        await client.access({
            host: FTP_HOST,
            user: FTP_USER,
            password: FTP_PASSWORD,
            secure: false
        });
        console.log('✅ Conectado!');

        console.log(`📁 Navegando para ${remotePath}...`);
        await client.ensureDir(remotePath);

        console.log('📤 Enviando arquivos...');
        await client.uploadFromDir(buildFolder);

        console.log('');
        console.log('🎉 Deploy concluído com sucesso!');

    } catch (err) {
        console.error('');
        console.error('❌ Erro durante o deploy:');
        console.error(`   ${err.message}`);

        if (err.message.includes('Login incorrect')) {
            console.error('');
            console.error('💡 Dica: Verifique suas credenciais FTP no painel da Hostinger');
        }

        process.exit(1);
    } finally {
        client.close();
    }
}

deploy();
