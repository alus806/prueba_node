const express=require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    
    res.render('index',{
       titulo:'Index desde views',
       descripcion:"esta es la descripción del index"
    })
  
})

router.get('/servicios',(req,res)=>{
   res.render('servicios',{
       titulo:'Servicios desde views',
       descripcion:'esta es la descripción de servicios',
       data:[
        {
            "nombre":"Servicio Uno",
            "comentario":"Este es el comentario del servicio uno"
        },
        {
            "nombre":"Servicio Dos",
            "comentario":"Este es el comentario del servicio dos"
        },
        {
            "nombre":"Servicio Tres",
            "comentario":"Este es el comentario del servicio tres"
        }
       ]
   })
})

module.exports=router