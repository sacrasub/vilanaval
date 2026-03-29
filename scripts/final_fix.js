const fs = require('fs');

function fix(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We target the literal characters that are appearing in the View tool
    const pairs = [
        ['â\u0161\u00A0ï¸\u008F', '⚠️'],
        ['ð\u0178\u201C\u00A4', '📤'],
        ['â\u0153\u2013', '✓'],
        ['Cà´njuge', 'Cônjuge']
    ];

    let newContent = content;
    for (const [old, replacement] of pairs) {
        newContent = newContent.split(old).join(replacement);
    }

    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Fixed: ${filePath}`);
    } else {
        console.log(`Nothing to fix in: ${filePath}`);
    }
}

fix('dashboard.html');
fix('index.html');
