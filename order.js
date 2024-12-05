const express = require('express');
const router = express.Router();
let menu = require('./menu').menu;
let orders = [];
let nextOrderId = 1;
router.post('/', (req, res) => {
    const { items } = req.body;
    if (!items || !items.every(itemId => menu.some(menuItem => menuItem.id === itemId))) {
        return res.status(400).send({ error: 'Invalid order items' });
    }
    const newOrder = {
        id: nextOrderId++,
        items,
        status: 'Preparing'
    };
    orders.push(newOrder);
    res.send(newOrder);
});
router.get('/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send({ error: 'Order not found' });
    res.send(order);
});
module.exports = router;
