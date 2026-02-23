const https = require('https');

const terms = [
    { id: 'p1', q: 'Millet' },
    { id: 'p2', q: 'Aloe vera' },
    { id: 'p5', q: 'Charcoal briquette' },
    { id: 'h1', q: 'Musa acuminata' }, // Banana flowers
    { id: 'h2', q: 'Opuntia ficus-indica' }, // Cactus
    { id: 'h3', q: 'Carica papaya' }, // Paw paw
    { id: 'h4', q: 'Vernonia amygdalina' }, // Bitter Leaf
    { id: 'h5', q: 'Psidium guajava' }, // Guava
    { id: 'h6', q: 'Bidens pilosa' }, // Black Jack
    { id: 'h7', q: 'Phyllanthus niruri' }, // Stone breaker
    { id: 'h8', q: 'Bryophyllum pinnatum' }, // Leaf of Life
    { id: 'h9', q: 'Tithonia diversifolia' }, // Wild Sunflower
    { id: 'h10', q: 'Ipomoea batatas' }, // Sweet Potato
    { id: 'h11', q: 'Tradescantia spathacea' }, // Moses in the Cradle
    { id: 'h12', q: 'Conyza canadensis' } // Horseweed
];

function fetchImage(term) {
    return new Promise((resolve) => {
        const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(term)}&prop=pageimages&format=json&pithumbsize=800`;
        https.get(url, { headers: { 'User-Agent': 'CathysShopBot/1.0 (test@example.com)' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    const pages = parsed.query?.pages;
                    if (pages) {
                        const pageId = Object.keys(pages)[0];
                        if (pageId !== "-1" && pages[pageId].thumbnail) {
                            return resolve(pages[pageId].thumbnail.source);
                        }
                    }
                } catch (e) { }
                resolve(null);
            });
        }).on('error', () => resolve(null));
    });
}

(async () => {
    const results = {};
    for (const item of terms) {
        const url = await fetchImage(item.q);
        results[item.id] = url;
    }
    console.log(JSON.stringify(results, null, 2));
})();
