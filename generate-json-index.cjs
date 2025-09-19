// scripts/generate-json-index.js
const fs = require('fs');
const path = require('path');

// Folder to scan inside public
const folderPath = path.join(__dirname, '.', 'public', 'data', 'json');

// Output index file
const outputPath = path.join(folderPath, 'index.json');

function generateIndex() {
    const files = fs.readdirSync(folderPath)
        .filter(file => file.endsWith('.json') && file !== 'index.json'); // exclude index.json itself

    fs.writeFileSync(outputPath, JSON.stringify(files, null, 2));

    console.log(`Generated index.json with ${files.length} files.`);
}

generateIndex();
