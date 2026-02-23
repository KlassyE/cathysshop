const fs = require('fs');

const file = 'C:/Users/admin/Desktop/Cathys shop/src/data/products.js';
let content = fs.readFileSync(file, 'utf8');

// Update to the newly generated PNG files
const images = [
    { id: 'p1', filename: 'p1.png' }, // Bushera Drink
    { id: 'p2', filename: 'p2.png' }, // Cleanser
    { id: 'p5', filename: 'p5.png' }, // Briquettes
    { id: 'h1', filename: 'h1.png' }, // Herbal Basket (default for all herbs)
    { id: 'h2', filename: 'h1.png' },
    { id: 'h3', filename: 'h1.png' },
    { id: 'h4', filename: 'h1.png' },
    { id: 'h5', filename: 'h1.png' },
    { id: 'h6', filename: 'h1.png' },
    { id: 'h7', filename: 'h1.png' },
    { id: 'h8', filename: 'h1.png' },
    { id: 'h9', filename: 'h1.png' },
    { id: 'h10', filename: 'h1.png' },
    { id: 'h11', filename: 'h1.png' },
    { id: 'h12', filename: 'h1.png' }
];

// Remove existing image lines
content = content.replace(/\s*image: ".*?",/g, '');

// Inject new PNG image paths
for (const img of images) {
    const regex = new RegExp(`(id: '${img.id}',[\\s\\S]*?longDescription: ".*?",)`);
    content = content.replace(regex, `$1\n        image: "/images/products/${img.filename}",`);
}

fs.writeFileSync(file, content);
console.log('Updated products.js with high-quality PNGs successfully.');
