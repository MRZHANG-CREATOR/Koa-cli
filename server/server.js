const Koa=require('koa')
const app=new Koa()

app.listen(8088,'0.0.0.0',()=>{
    console.log('http://localhost:8088')
})