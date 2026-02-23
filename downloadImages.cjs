const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    { id: 'p1', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Boza_glass.jpg/640px-Boza_glass.jpg', folder: 'products' }, // Fermented drink
    { id: 'p2', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/640px-Aloe_vera_flower_inset.png', folder: 'products' }, // Aloe
    { id: 'p5', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Charcoal_briquettes.jpg/640px-Charcoal_briquettes.jpg', folder: 'products' }, // Briquettes
    { id: 'h1', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Musa_acuminata_in_india01.jpg/640px-Musa_acuminata_in_india01.jpg', folder: 'products' },
    { id: 'h2', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Dikenli_%C4%B0ncir_%28Opuntia_ficus-indica%29_Gaziantep_Turkey.IMG_1104.jpg/640px-Dikenli_%C4%B0ncir_%28Opuntia_ficus-indica%29_Gaziantep_Turkey.IMG_1104.jpg', folder: 'products' },
    { id: 'h3', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Carica_papaya_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-028.jpg/600px-Carica_papaya_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-028.jpg', folder: 'products' },
    { id: 'h4', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Vernonia_amygdalina_06.jpg/640px-Vernonia_amygdalina_06.jpg', folder: 'products' },
    { id: 'h5', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Psidium_guajava_fruit.jpg/640px-Psidium_guajava_fruit.jpg', folder: 'products' },
    { id: 'h6', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bidens_pilosa-Silent_Valley-2016-08-13-001.jpg/640px-Bidens_pilosa-Silent_Valley-2016-08-13-001.jpg', folder: 'products' },
    { id: 'h7', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Phyllanthus_niruri.jpg/640px-Phyllanthus_niruri.jpg', folder: 'products' },
    { id: 'h8', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bryophyllum_pinnatum_leaf.jpg/640px-Bryophyllum_pinnatum_leaf.jpg', folder: 'products' },
    { id: 'h9', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Tithonia_diversifolia_%2811273026673%29.jpg/640px-Tithonia_diversifolia_%2811273026673%29.jpg', folder: 'products' },
    { id: 'h10', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sweet_potato_leaves.jpg/640px-Sweet_potato_leaves.jpg', folder: 'products' },
    { id: 'h11', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tradescantia_spathacea_%28_Moses-in-the-cradle_%29.jpg/640px-Tradescantia_spathacea_%28_Moses-in-the-cradle_%29.jpg', folder: 'products' },
    { id: 'h12', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Conyza_canadensis_%28Canadian_Horseweed%29_-_Flickr_-_Jay_Sturner.jpg/640px-Conyza_canadensis_%28Canadian_Horseweed%29_-_Flickr_-_Jay_Sturner.jpg', folder: 'products' },

    // Category covers
    { id: 'c_eco', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Briquettes.jpg/640px-Briquettes.jpg', folder: 'categories' }, // Briquettes for home
    { id: 'c_foods', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Matooke_meal.jpg/640px-Matooke_meal.jpg', folder: 'categories' }, // Authentic Ugandan matooke
    { id: 'c_healing', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Herbal_Medicine_Market_-_Kumasi_-_Ghana_-_01_%282431671954%29.jpg/640px-Herbal_Medicine_Market_-_Kumasi_-_Ghana_-_01_%282431671954%29.jpg', folder: 'categories' } // African herbal medicine
];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const downloadImage = (url, dest, retries = 3) => {
    return new Promise((resolve, reject) => {
        // Add realistic User-Agent to prevent Wikipedia 429
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
                'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
            }
        };

        https.get(url, options, async (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
            }
            if (response.statusCode === 429 && retries > 0) {
                console.log(`429 Too Many Requests downlaoding ${url}. Retrying in 2 seconds...`);
                await sleep(2000);
                return downloadImage(url, dest, retries - 1).then(resolve).catch(reject);
            }
            if (response.statusCode !== 200) {
                return reject(new Error('Failed to download ' + url + ' - Status code: ' + response.statusCode));
            }
            const file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

(async () => {
    const publicDir = path.join(__dirname, 'public', 'images');
    fs.mkdirSync(path.join(publicDir, 'products'), { recursive: true });
    fs.mkdirSync(path.join(publicDir, 'categories'), { recursive: true });

    for (const img of images) {
        const ext = img.url.split('.').pop().split('?')[0] || 'jpg';
        const filename = `${img.id}.${ext}`;
        const destPath = path.join(publicDir, img.folder, filename);

        // Skip if already exists
        if (fs.existsSync(destPath)) {
            console.log(`Skipped ${img.id}, already downloaded.`);
            continue;
        }

        try {
            await downloadImage(img.url, destPath);
            console.log(`Downloaded ${img.id}`);
            // Delay sequential downloads
            await sleep(1000);
        } catch (e) {
            console.error(`Failed ${img.id}: ${e.message}`);
        }
    }
})();
