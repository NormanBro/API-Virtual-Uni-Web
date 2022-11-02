const { Router }=require('express');
const { POSTUsuario }=require('../Controllers/POST.Contrillers')

const router=Router();

router.post('POST/:Name',POSTUsuario);


module.exports=router;