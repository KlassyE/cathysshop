const fs = require('fs');

const file = 'C:/Users/admin/Desktop/Cathys shop/src/data/products.js';
let content = fs.readFileSync(file, 'utf8');

// Specific mapping for all products
const images = [
    { id: 'p1', filename: 'p1.png' }, // Bushera
    { id: 'p2', filename: 'p2.png' }, // Cleanser
    { id: 'p5', filename: 'p5.png' }, // Briquettes
    { id: 'h1', filename: 'h1.png' }, // Banana Flowers
    { id: 'h2', filename: 'h2.png' }, // Cactus
    { id: 'h3', filename: 'h3.png' }, // Paw Paw
    { id: 'h4', filename: 'h4.png' }, // Bitter Leaf
    { id: 'h5', filename: 'h5.png' }, // Guava Leaves
    { id: 'h6', filename: 'h6.png' }, // Black Jack
    { id: 'h7', filename: 'h7.png' }, // Stone Breaker
    { id: 'h8', filename: 'h8.png' }, // Miracle Leaf
    { id: 'h9', filename: 'h9.png' }, // Wild Sunflower
    { id: 'h10', filename: 'h10.png' }, // Sweet Potato Leaves
    { id: 'h11', filename: 'h11.png' }, // Moses in the Cradle
    { id: 'h12', filename: 'h12.png' }  // Horseweed
];

// Remove any existing image lines (matches image: "...",)
content = content.replace(/\s*image: ".*?",/g, '');

// Inject new PNG image paths
for (const img of images) {
    const regex = new RegExp(`(id: '${img.id}',[\\s\\S]*?longDescription: ".*?",)`);
    content = content.replace(regex, `$1\n        image: "/images/products/${img.filename}",`);
}

fs.writeFileSync(file, content);
console.log('Final specific product mapping update complete.');
