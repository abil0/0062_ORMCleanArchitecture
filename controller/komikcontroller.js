const db = require('../models');
async function getAllKomik(req, res) {
    try {
        const komik = await db.Komik.findAll();
        res.json(komik);
    } catch (error) {
        console.error('Error fetching komik:', error.message);
        res.status(500).json({ error: 'Failed to fetch komik' });

    }
}

async function getKomikById(req, res) {
    const { id } = req.params;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik not found' });
        }
        res.status(200).json(komik);
    } catch (error) {
        console.error('Error fetching komik by ID:', error.message);
        res.status(500).json({ error: 'Failed to fetch komik by ID' });
    }
}

async function updateKomik(req, res) {
    const{id} = req.params;
    const { title, author, genre } = req.body;
    try{
        const komik= await db.komik.findByPk(id);
        if(!komik){
            return res.status(404).json({error: 'Komik not found'});
        }
        komik.title= title;
        komik.description= description;
        komik.author= author;
        await komik.save();
        res.status(200).json(komik);
    } 




async function deleteKomik(req, res) {
    const { id } = req.params;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik not found' });
        }
        await komik.destroy();
        res.status(200).json({ message: 'Komik deleted successfully' });
    } catch (error) {
        console.error('Error deleting komik:', error.message);
        res.status(500).json({ error: 'Failed to delete komik' });
    }
}

module.exports = {
    getAllKomik,
    getKomikById,
    createKomik,
    updateKomik,
    deleteKomik
};