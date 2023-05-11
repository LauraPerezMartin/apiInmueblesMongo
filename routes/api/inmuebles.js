const router = require('express').Router();

const Inmueble = require('../../models/inmueble.model');

router.get('/', async (req, res) => {
    try {
        const inmuebles = await Inmueble.find();
        res.json(inmuebles);
    } catch (error) {
        res.status(503).json({ Error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const inmueble = await Inmueble.create(req.body);
        res.json(inmueble);
    } catch (error) {
        res.status(503).json({ Error: error.message });
    }
});

router.put('/:inmuebleId', async (req, res) => {
    const { inmuebleId } = req.params;
    try {
        const inmueble = await Inmueble.findByIdAndUpdate(inmuebleId, req.body, { new: true });
        res.json(inmueble);
    } catch (error) {
        res.status(503).json({ Error: error.message });
    }
});

router.delete('/:inmuebleId', async (req, res) => {
    const { inmuebleId } = req.params;
    try {
        const result = await Inmueble.findByIdAndDelete(inmuebleId);
        if (!result) {
            return res.json('Error: No existe la Id solicitada');
        }
        res.json(result);
    } catch (error) {
        res.status(503).json({ Error: error.message });
    }
})

module.exports = router;