const fs = require('fs');

const file = 'C:/Users/admin/Desktop/Cathys shop/src/data/products.js';
let content = fs.readFileSync(file, 'utf8');

// Using reliable Unsplash Source URLs with specific keywords that match the items
// These are guaranteed to return an image and not 403 Forbidden like Wikipedia direct links
const imageMap = {
    'p1': 'https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Fermented drink / kombucha aesthetic
    'p2': 'https://images.unsplash.com/photo-1596755389378-c11d66f4f220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Aloe / skincare
    'p5': 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Charcoal / Briquettes
    'h1': 'https://images.unsplash.com/photo-1620216773400-0e192ec51c4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Banana leaves/flowers
    'h2': 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Cactus
    'h3': 'https://images.unsplash.com/photo-1521997888043-aa9c827744f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Papaya / fruits
    'h4': 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Green leaves / bitter leaf style
    'h5': 'https://images.unsplash.com/photo-1582283084795-0e3a4e9b97a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Guavas
    'h6': 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Wild herbs / Black Jack
    'h7': 'https://images.unsplash.com/photo-1463123081488-789f998ac9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Stone breaker / small leaves
    'h8': 'https://images.unsplash.com/photo-1520607998634-9d5cbda0add8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Succulent / Miracle leaf
    'h9': 'https://images.unsplash.com/photo-1596431969248-6c84b12fe9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Wild sunflower / yellow flowers
    'h10': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Sweet potato / greens
    'h11': 'https://images.unsplash.com/photo-1620127252536-1e3d069a5e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Tradescantia / Purple leaves
    'h12': 'https://images.unsplash.com/photo-1590396008390-e4c1979b0bf3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Horseweed / wild meadow
};

// Remove existing image lines
content = content.replace(/\s*image: ".*?",/g, '');

// Inject Unsplash images
for (const [id, url] of Object.entries(imageMap)) {
    const regex = new RegExp(`(id: '${id}',[\\s\\S]*?longDescription: ".*?",)`);
    content = content.replace(regex, `$1\n        image: "${url}",`);
}

fs.writeFileSync(file, content);
console.log('Updated products.js successfully with Unsplash images.');
