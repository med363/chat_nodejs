const bcrypt = require('bcrypt');




const PharmacienService = require('../services/pharmacien.services')



//  exports.registerLoad = async(req, res)=>{
//     try{
//         res.render('register');
//     }catch(error){
//         console.log(error.message);
//     }
// }

exports.register = async (req, res, next) => {
    try {
        const { name, phone, email, password, passwordconf, profession } = req.body;
        const successRes1 = await PharmacienService.registerPharmacien(
            name,
            phone,
            email,
            password,
            passwordconf,
            profession,
            { image: 'images/' + req.file.filename } // Adding the image property
        );
        res.json({ status: true, success: "Pharmacien Register successfully" });
    } catch (error) {
        throw error;
    }
}

    // try{
    //     const passwordHash = await bcrypt.hash(req.body.password, 10);
    //     const user = new User({
    //      name: req.body.name,
    //      phone: req.body.phone,
    //      password: passwordHash,
    //      passwordconf: passwordHash,
    //      profession: req.body.profession,
    //      image: 'images/'+req.file.filename,
 
    //     });
 
    //  await user.save()
 
    //  res.render('register',
    //  { message: 'your Registration has been Completed!'})
    //  }catch(error){
    //      console.log(error.message);
    //  }
    // }