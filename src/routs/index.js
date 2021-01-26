const { Router } = require('express');
const router = Router();

// API routes
router.get('/test', (req, res) => {
    const data = {
        "name": "Nelson",
        "Website": "nelsonweb.com"
    };
    res.json(data);
    //res.json({"Title": "Hello World"});//devuelve un objeto json
});

module.exports = router;