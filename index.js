const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('../menu');
const orderRoutes = require('./orders');
const setupCronJobs = require('../cron');
const app = express();
const PORT = 3000;
app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);
setupCronJobs();
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
