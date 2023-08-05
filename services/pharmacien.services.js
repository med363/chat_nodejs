const PharmacienModel = require('../model/pharmacien')
class PharamacienService{
       static async registerPharmacien(name,phone,email,password,passwordconf,profession){
        try{
            const createPharmacien = new PharmacienModel({name,phone,email,password,passwordconf,profession});
              return await createPharmacien.save();

        }catch(error){
            throw error;
        }

    }
}
module.exports = PharamacienService;