const fs = require('fs');

const file = 'C:/Users/admin/Desktop/Cathys shop/src/data/products.js';
let content = fs.readFileSync(file, 'utf8');

const images = [
    { id: 'p1', filename: 'p1.jpg' },
    { id: 'p2', filename: 'p2.png' },
    { id: 'p5', filename: 'p5.jpg' },
    { id: 'h1', filename: 'h1.jpg' },
    { id: 'h2', filename: 'h2.jpg' },
    { id: 'h3', filename: 'h3.jpg' },
    { id: 'h4', filename: 'h4.jpg' },
    { id: 'h5', filename: 'h5.jpg' },
    { id: 'h6', filename: 'h6.jpg' },
    { id: 'h7', filename: 'h7.jpg' },
    { id: 'h8', filename: 'h8.jpg' },
    { id: 'h9', filename: 'h9.jpg' },
    { id: 'h10', filename: 'h10.jpg' },
    { id: 'h11', filename: 'h11.jpg' },
    { id: 'h12', filename: 'h12.jpg' }
];

// Remove existing image lines
content = content.replace(/\s*image: ".*?",/g, '');

// Inject local image paths
for (const img of images) {
    const regex = new RegExp(`(id: '${img.id}',[\\s\\S]*?longDescription: ".*?",)`);
    content = content.replace(regex, `$1\n        image: "/images/products/${img.filename}",`);
}

fs.writeFileSync(file, content);
console.log('Updated products.js to use local images successfully.');
