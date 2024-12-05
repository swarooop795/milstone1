const cron = require('node-cron');
let orders = require('./orders').orders;
function setupCronJobs() {
    cron.schedule('*/10 * * * * *', () => { 
        orders.forEach(order => {
            if (order.status === 'Preparing') order.status = 'Out for Delivery';
            else if (order.status === 'Out for Delivery') order.status = 'Delivered';
        });
        console.log('Updated order statuses:', orders);
    });
}
module.exports = setupCronJobs;
