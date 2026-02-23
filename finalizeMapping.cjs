const fs = require('fs');

const file = 'C:/Users/admin/Desktop/Cathys shop/src/data/products.js';
let content = fs.readFileSync(file, 'utf8');

// Mapping all products to the 4 confirmed high-quality PNGs
// Generic herbs get h_generic.png
const images = [
    { id: 'p1', filename: 'p1.png' }, // Bushera
    { id: 'p2', filename: 'p2.png' }, // Cleanser
    { id: 'p5', filename: 'p5.png' }  // Briquettes
];

// Herbs h1 to h12
for (let i = 1; i <= 12; i++) {
    images.push({ id: `h${i}`, filename: 'h_generic.png' });
}

// Remove any existing image lines (matches image: "...",)
content = content.replace(/\s*image: ".*?",/g, '');

// Inject new PNG image paths
for (const img of images) {
    const regex = new RegExp(`(id: '${img.id}',[\\s\\S]*?longDescription: ".*?",)`);
    content = content.replace(regex, `$1\n        image: "/images/products/${img.filename}",`);
}

fs.writeFileSync(file, content);
console.log('Final product mapping update complete.');
