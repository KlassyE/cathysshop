const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/admin/.gemini/antigravity/brain/e54d1b0c-d0c4-4d04-b256-ef4ec9e63af3';
const destDir = 'C:/Users/admin/Desktop/Cathys shop/public/images/products';

const mapping = {
    'bushera_drink_uganda_1771839013034.png': 'p1.png',
    'aloe_shea_cleanser_uganda_1771839172958.png': 'p2.png',
    'banana_briquettes_uganda_final_1771839144461.png': 'p5.png',
    'medinal_herbs_uganda_basket_1771839111736.png': 'h_generic.png'
};

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

for (const [srcName, destName] of Object.entries(mapping)) {
    const srcPath = path.join(srcDir, srcName);
    const destPath = path.join(destDir, destName);

    try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${srcName} to ${destName}`);
    } catch (err) {
        console.error(`Error copying ${srcName}:`, err);
    }
}
