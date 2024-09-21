#!/bin/bash
# bisaya.sh

const fs = require('fs');
const path = require('path');

const languagesDir = path.join(__dirname, 'languages');

let languageData = {};

function loadLanguages() {
    const files = fs.readdirSync(languagesDir);
    files.forEach(file => {
        const lang = file.split('.')[0]; // Get language code
        const filePath = path.join(languagesDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        languageData[lang] = JSON.parse(content);
    });
}

function getTranslation(lang, key) {
    if (languageData[lang] && languageData[lang][key]) {
        return languageData[lang][key];
    }
    return null; // or a default message
}

// Load languages when the module is required
loadLanguages();

// Example usage
console.log(getTranslation('en', 'greeting')); // Output: Hello
console.log(getTranslation('es', 'farewell')); // Output: Adiós
