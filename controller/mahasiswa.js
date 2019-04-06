let data = [
    {
        nim : "1234567891",
        nama : "dadang",
        kelas : "IF-41-07"
    },
    {
        nim : "2436152653",
        nama : "maman hendrawan",
        kelas : "IF-41-09"
    }
]

exports.getmhs = (req,res)=>{
    res.send(data)
}
exports.getmhs1 = (req,res)=>{
    res.send(data[req.params.index])
}

exports.stroremhs = (req,res)=>{
    let mahasiswa = {
        nim : req.body.nim,
        nama : req.body.nama,
        kelas : req.body.kelas
    }
    data.push(data.length, 0, mahasiswa);
    res.send(data)
    console.log("insert user berhasil")
}
exports.updatemhs= (req,res)=>{
    let mahasiswa = {
        nim : req.body.nim,
        nama : req.body.nama,
        kelas : req.body.kelas
    }
    data.splice(req.params.index, 1, mahasiswa);
    res.send(data)
} 

exports.deletemhs = (req,res)=>{
    data.splice(req.params.index,1)
    res.send(data)
}

