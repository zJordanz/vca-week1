//first NodeJS application

constexpress=require('express')
constapp=express()
constport=3000

app.get('/',(req,res)=>{
    res.send('Hello VirtualMachine!')
    })

app.listen(port,()=>{
    console.log(`Express Application  listening at port 3000`)
})