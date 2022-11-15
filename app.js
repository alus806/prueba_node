const express=require('express');

/* CONFIGURAR EXPRESS */
const app=express();
const port=process.env.PORT || 3000;

/* CONFIGURAR CARPETA ESTATICA */
app.use(express.static(__dirname+'/public'))

/* CONFIGURAR TEMPLATE ENGINES */
/* https://expressjs.com/en/resources/template-engines.html
https://ejs.co/ */

app.set('view engine' ,'ejs')
app.set('views',__dirname+'/views')

app.use('/',require('./routers/router'))


app.listen(port,()=>{
    console.log(`servidor  a la escucha del puerto ${port} `)
})