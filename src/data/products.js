export const PRODUCTS = [
    // --- Original Products ---
    {
        id: 'p1',
        name: "Bushera - Fermented Millet Elixir",
        category: "Nutritious Foods",
        price: 8000,
        description: "Probiotic millet drink that soothes digestion.",
        longDescription: "From Ankole's ancient grains, this probiotic powerhouse soothes digestion and boosts gut health. Like Mama's hug in a jar.",
        image: "/images/products/p1.png",
        isBestseller: true,
        variants: [
            { id: '1l', label: '1 Litre Jar', price: 8000 },
            { id: '2l', label: '2 Litre Family Jug', price: 15000 }
        ]
    },
    {
        id: 'p2',
        name: "Herbal Glow Cleanser",
        category: "Healing Essentials",
        price: 12000,
        description: "Aloe, neem, and shea cleanser for radiant skin.",
        longDescription: "Wild aloe, neem, and shea from Buganda forests gently purify and heal. Pure Mama's remedy for radiant skin.",
        image: "/images/products/p2.png",
        isBestseller: true,
        variants: [
            { id: '100ml', label: '100ml Bottle', price: 12000 },
            { id: '250ml', label: '250ml Refill', price: 25000 }
        ]
    },
    {
        id: 'p5',
        name: "Banana Waste Briquettes",
        category: "Eco Home",
        price: 18000,
        description: "Clean burning briquettes from recycled banana waste.",
        longDescription: "Smokeless, long-burning briquettes made from recycled banana peels. Clean, sustainable energy for your kitchen.",
        image: "/images/products/p5.png",
        isBestseller: false,
        variants: [
            { id: '5kg', label: '5 kg Sack', price: 18000 },
            { id: '10kg', label: '10 kg Sack', price: 34000 },
            { id: '20kg', label: '20 kg Sack', price: 65000 }
        ]
    },

    // --- New Medicinal Herbs ---
    {
        id: 'h1',
        name: "Banana Flowers (Kigogo)",
        scientificName: "Musa acuminata / Musa balbisiana",
        category: "Medicinal Herbs",
        price: 6000,
        description: "Excellent for nursing mothers and regulating blood sugar.",
        longDescription: "Highly nutritious and rich in iron and calcium. Banana flowers are known in traditional medicine to support lactating mothers, reduce menstrual bleeding, and help regulate blood sugar levels. They can be cooked into a delicious, healing stew.",
        image: "/images/products/h1.png",
        isBestseller: false,
        variants: [
            { id: 'small', label: 'Small Bunch', price: 6000 },
            { id: 'medium', label: 'Medium Bunch', price: 10000 },
            { id: 'large', label: 'Large Family Bunch', price: 18000 }
        ]
    },
    {
        id: 'h2',
        name: "Cactus (Nopal)",
        scientificName: "Opuntia ficus-indica",
        category: "Medicinal Herbs",
        price: 8000,
        description: "Hydrating remedy to lower cholesterol and boost immunity.",
        longDescription: "A resilient desert plant rich in antioxidants, vitamins, and minerals. Cactus pads (nopales) are fantastic for managing blood sugar, lowering cholesterol, and treating stomach ulcers. A true hydrating powerhouse.",
        image: "/images/products/h2.png",
        isBestseller: false,
        variants: [
            { id: 'small', label: 'Small Pouch', price: 8000 },
            { id: 'medium', label: 'Medium Pouch', price: 14000 },
            { id: 'large', label: 'Large Pouch', price: 25000 }
        ]
    },
    {
        id: 'h3',
        name: "Paw Paw Fruits & Leaves",
        scientificName: "Carica papaya",
        category: "Medicinal Herbs",
        price: 5000,
        description: "Papaya extracts rich in enzymes for digestion and malaria relief.",
        longDescription: "Both the fruit and leaves of the paw paw tree are medicinal gold. The leaves are traditionally brewed to boost platelet counts during malaria and dengue, while the fruit is rich in papain, aiding digestion and skin renewal.",
        image: "/images/products/h3.png",
        isBestseller: true,
        variants: [
            { id: 'small', label: 'Small Bundle', price: 5000 },
            { id: 'medium', label: 'Medium Bundle', price: 9000 },
            { id: 'large', label: 'Large Bundle', price: 15000 }
        ]
    },
    {
        id: 'h4',
        name: "Bitter Leaf",
        scientificName: "Vernonia amygdalina",
        category: "Medicinal Herbs",
        price: 4000,
        description: "A potent cleanser for the liver and digestive system.",
        longDescription: "True to its name, Bitter Leaf is renowned across Africa. It detoxifies the liver, cleanses the blood, lowers high blood pressure, and provides soothing relief from stomach aches. A staple for overall vitality.",
        image: "/images/products/h4.png",
        isBestseller: true,
        variants: [
            { id: 'small', label: 'Small Pack', price: 4000 },
            { id: 'medium', label: 'Medium Pack', price: 7000 },
            { id: 'large', label: 'Large Pack', price: 12000 }
        ]
    },
    {
        id: 'h5',
        name: "Guava Leaves",
        scientificName: "Psidium guajava",
        category: "Medicinal Herbs",
        price: 5000,
        description: "Brewed for anti-diarrheal properties and oral health.",
        longDescription: "Guava leaves are a staple natural anti-inflammatory and antibacterial agent. Boiling them into a tea soothes gastrointestinal issues, relieves toothaches, and has been proven to help lower cholesterol and blood sugar.",
        image: "/images/products/h5.png",
        isBestseller: false,
        variants: [
            { id: 'small', label: 'Small Pack', price: 5000 },
            { id: 'medium', label: 'Medium Pack', price: 8000 },
            { id: 'large', label: 'Large Pack', price: 14000 }
        ]
    },
    {
        id: 'h6',
        name: "Black Jack",
        scientificName: "Bidens pilosa",
        category: "Medicinal Herbs",
        price: 4000,
        description: "Antibacterial weed excellent for wound healing and fevers.",
        longDescription: "Often considered a stubborn weed, Black Jack is incredibly medicinal. Its sap and leaves possess strong antibacterial and anti-inflammatory properties. Used as a tea for respiratory infections, or as a poultice to heal deep cuts and ulcers.",
        image: "/images/products/h6.png",
        isBestseller: false,
        variants: [
            { id: 'small', label: 'Small Pack', price: 4000 },
            { id: 'medium', label: 'Medium Pack', price: 7000 },
            { id: 'large', label: 'Large Pack', price: 12000 }
        ]
    },
    {
        id: 'h7',
        name: "Stone Breaker",
        scientificName: "Phyllanthus niruri",
        category: "Medicinal Herbs",
        price: 9000,
        description: "Powerful herb known to dissolve kidney and gallbladder stones.",
        longDescription: "Affectionately named 'Stone Breaker', this small herb protects the liver and is primarily famous for shattering kidney stones and gallstones. It helps balance uric acid and promotes a healthy urinary tract.",
        image: "/images/products/h7.png",
        isBestseller: true,
        variants: [
            { id: 'small', label: 'Small Pack', price: 9000 },
            { id: 'medium', label: 'Medium Pack', price: 16000 },
            { id: 'large', label: 'Large Pack', price: 28000 }
        ]
    },
    {
        id: 'h8',
        name: "Miracle Leaf / Leaf of Life",
        scientificName: "Bryophyllum pinnatum",
        category: "Medicinal Herbs",
        price: 8000,
        description: "Heals wounds rapidly and suppresses severe coughs.",
        longDescription: "The Miracle Leaf is a succulent known for its rapid wound-healing properties. When warmed and applied, it draws out infections. When juiced or brewed, it is a magnificent remedy for asthma, severe coughs, and hypertension.",
        image: "/images/products/h8.png",
        isBestseller: false,
        variants: [
            { id: 'small', label: 'Small Pack', price: 8000 },
            { id: 'medium', label: 'Medium Pack', price: 15000 },
            { id: 'large', label: 'Large Pack', price: 26000 }
        ]
    },
    {
        id: 'h9',
        name: "Wild Sunflower",
        scientificName: "Tithonia diversifolia",
        category: "Medicinal Herbs",
        price: 7000,
        description: "Robust anti-inflammatory used for skin conditions and pain.",
        longDescription: "The leaves of the Wild Sunflower are commonly used in herbal medicine to treat malaria, menstrual cramps, and severe skin diseases. It is a powerful natural anti-inflammatory.",
        image: "/images/products/h9.png",
        isBestseller: false,
        variants: [
            { id: 'small', label: 'Small Pack', price: 7000 },
            { id: 'medium', label: 'Medium Pack', price: 12000 },
            { id: 'large', label: 'Large Pack', price: 22000 }
        ]
    },
    {
        id: 'h10',
        name: "Sweet Potato Leaves",
        scientificName: "Ipomoea batatas",
        category: "Medicinal Herbs",
        price: 4000,
        description: "High in antioxidants, supports heart health and vision.",
        longDescription: "Often discarded, sweet potato leaves are actually more nutritious than the tuber! They lower blood sugar, support bone health, and are packed with vitamins A, C, and K.",
        image: "/images/products/h10.png",
        isBestseller: false,
        variants: [
            { id: 'small', label: 'Small Bundle', price: 4000 },
            { id: 'medium', label: 'Medium Bundle', price: 7000 },
            { id: 'large', label: 'Large Bundle', price: 12000 }
        ]
    },
    {
        id: 'h11',
        name: "Moses in the Cradle",
        scientificName: "Tradescantia spathacea",
        category: "Medicinal Herbs",
        price: 8000,
        description: "Purple-backed leaves traditionally used for colds and fever.",
        longDescription: "A beautiful plant with deep purple underleaves, it is often boiled in traditional medicine to clear mucus, ease severe coughs, and break fevers.",
        image: "/images/products/h11.png",
        isBestseller: false,
        variants: [
            { id: 'small', label: 'Small Pack', price: 8000 },
            { id: 'medium', label: 'Medium Pack', price: 14000 },
            { id: 'large', label: 'Large Pack', price: 25000 }
        ]
    },
    {
        id: 'h12',
        name: "Horseweed",
        scientificName: "Conyza canadensis",
        category: "Medicinal Herbs",
        price: 6000,
        description: "Astringent herb excellent for stopping bleeding and diarrhea.",
        longDescription: "Horseweed is traditionally used as an astringent. It's excellent at coagulating blood on wounds, soothing the gastrointestinal tract, and stopping severe diarrhea or dysentery.",
        image: "/images/products/h12.png",
        isBestseller: false,
        variants: [
            { id: 'small', label: 'Small Pack', price: 6000 },
            { id: 'medium', label: 'Medium Pack', price: 10000 },
            { id: 'large', label: 'Large Pack', price: 18000 }
        ]
    }
];
