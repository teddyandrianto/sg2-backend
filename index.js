const express = require('express')
let app = express()
const bodyParser = require('body-parser')
let mhs = require('./controller/mahasiswa')
app.use(bodyParser.urlencoded({extended : true}))

// let data = [
//     {
//         nim : "1234567891",
//         nama : "dadang",
//         kelas : "IF-41-07"
//     },
//     {
//         nim : "2436152653",
//         nama : "maman hendrawan",
//         kelas : "IF-41-09"
//     }
// ]

// app.get('/',(req,res)=>{
//     res.send('halaman root')
// })

app.post('/mahasiswa',(req,res,next)=>{
    if(req.body.nim){
        next()
    }else{
        res.send('maaf nim tidak ada')
    }
})
app.get('/mahasiswa', mhs.getmhs)
.get('/mahasiswa/:index',mhs.getmhs1)
.post('/mahasiswa', mhs.stroremhs)
.put('/mahasiswa/:index',mhs.updatemhs)
.delete('/mahasiswa/:index', mhs.deletemhs)

// app.get('/mahasiswa/', (req,res)=>{
//     res.send(data)
// })

// app.get('/mahasiswa/:index', function(req,res){
//     res.send(data[req.params.index])
// })

// app.post('/mahasiswa',(req,res)=>{
//     let mahasiswa = {
//         nim : req.body.nim,
//         nama : req.body.nama,
//         kelas : req.body.kelas
//     }
// data.push(data.length, 0, mahasiswa);
// res.send(data)
// console.log("insert user berhasil")
// })

// app.put('/mahasiswa/:index',(req,res)=>{
//     let update_mhs = {
//         nim : req.body.nim,
//         nama : req.body.nama,
//         kelas : req.body.kelas
//     }
//     data[req.params.index] = update_mhs
//     res.send(data)
// })
// app.delete('/mahasiswa/:index',(req,res)=>{
//     data.splice(req.params.index,1)
//     res.send(data)
// })





app.listen(3000)
