import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static files from the Vite build directory
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// In-memory array to store MVP orders until a database is wired up
const orders = [];

// Basic Security Middleware for Cathy's Admin Routes
const authenticateAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // In a real production app, use a strong secret and environment variables
    if (authHeader === 'mama123') {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized Mama!' });
    }
};

// GET /api/orders - Fetch all orders (For Cathy's Admin Dashboard)
app.get('/api/orders', authenticateAdmin, (req, res) => {
    res.json(orders);
});

// POST /api/orders - Create a new order (From the Cart)
app.post('/api/orders', (req, res) => {
    const { customer, items, total } = req.body;

    if (!customer || !items || !total) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const newOrder = {
        id: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        customer,
        items,
        total,
        status: 'pending',
        date: new Date().toISOString()
    };

    orders.unshift(newOrder); // Add to beginning
    res.status(201).json(newOrder);
});

// Optionally, mark order as complete
app.patch('/api/orders/:id/status', authenticateAdmin, (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const orderIndex = orders.findIndex(o => o.id === id);
    if (orderIndex === -1) {
        return res.status(404).json({ error: 'Order not found' });
    }

    orders[orderIndex].status = status;
    res.json(orders[orderIndex]);
});

// All other GET requests not handled will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
