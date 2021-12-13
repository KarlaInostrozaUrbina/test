const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Observatorio Satelital de Nieves' });
});

router.get('/landsatmensual', (req, res) => {
    res.render('landsatmensual.html', { title: 'landsat_mensual' });
});

module.exports = router;