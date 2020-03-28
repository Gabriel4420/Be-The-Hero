const conn = require('../database/con');

module.exports ={
    async create(req,res){
        const { id } = req.body;

        const ong = await conn('ongs').where('id', id).select('name').first();

        if ( !ong )
            return res.status(400).json({error:'no NGO was found with this id'})
        
    
      return res.json(ong);
    }
}