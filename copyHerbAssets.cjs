const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/admin/.gemini/antigravity/brain/e54d1b0c-d0c4-4d04-b256-ef4ec9e63af3';
const destDir = 'C:/Users/admin/Desktop/Cathys shop/public/images/products';

const mapping = {
    'banana_flowers_kigogo_uganda_1771840576553.png': 'h1.png',
    'cactus_nopal_uganda_retry_1771840614489.png': 'h2.png',
    'pawpaw_uganda_fruits_leaves_1771840640877.png': 'h3.png',
    'bitter_leaf_uganda_fresh_leaves_1771840669971.png': 'h4.png',
    'guava_leaves_uganda_medicinal_herb_1771840690808.png': 'h5.png',
    'black_jack_uganda_herb_retry_1771840736126.png': 'h6.png',
    'stone_breaker_phyllanthus_niruri_uganda_1771840762764.png': 'h7.png',
    'leaf_of_life_uganda_medicinal_herb_1771840784122.png': 'h8.png',
    'wild_sunflower_tithonia_uganda_1771840816506.png': 'h9.png',
    'sweet_potato_leaves_uganda_retry_final_1771840865212.png': 'h10.png',
    'moses_in_the_cradle_uganda_retry_v2_1771840904875.png': 'h11.png',
    'horseweed_uganda_medicinal_herb_final_1771840930500.png': 'h12.png'
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
