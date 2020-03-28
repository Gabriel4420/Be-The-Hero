const cry = require('crypto');
const connect = require('../database/con');

module.exports = {

    async index (req, res) {
        const ongs = await connect('ongs').select('*');
    
        return res.json(ongs);
    },




    async create(req, res){
        const {name, email, wtsapp, city, uf} = req.body;

        const id = cry.randomBytes(4).toString('HEX');
    
        await connect('ongs').insert({
            id,
            name, 
            email,
            wtsapp,
            city,
            uf,
        })
    
         return res.json({ id });

    }
}