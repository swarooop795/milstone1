const express = require('express');
const router = express.Router();
let menu = [];
router.post('/', (req, res) => {
    const { id, name, price, category } = req.body;

    if (!id || !name || price <= 0 || !['Starter', 'Main', 'Dessert'].includes(category)) {
        return res.status(400).send({ error: 'Invalid menu item data' });
    }
    const existingItemIndex = menu.findIndex(item => item.id === id);
    if (existingItemIndex !== -1) {
        menu[existingItemIndex] = { id, name, price, category };
    } else {
        menu.push({ id, name, price, category });
    }
    res.send({ message: 'Menu item added/updated successfully' });
});
router.get('/', (req, res) => {
    res.send(menu);
});
module.exports = router;
