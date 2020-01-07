const express = require('express');
const app = express();
const bodyParser = require('body-parser');

 
const urlencodedParser = bodyParser.urlencoded({extended:false})


app.use(express.static('public'));
app.get('/',function(req,res){
  res.sendFile(__dirname +"/"+"tugas.html");
})
 
app.post('/process_post', urlencodedParser, function (req, res) {
        let arr = [];
        let response = String(req.body.fav_food);
        input = {
            id_name : req.body.id_name,
            fav_food: req.body.fav_food
        };
        arr = response.split(',');
   console.log(response + " dijadikan array menjadi " + arr[0]);
   console.log("type data : " + typeof(arr))
   res.end ("mengambil data input menjadi json : \n" + 
    JSON.stringify(input) + "\n" + 
    "makanan favorite diubah menjadi type " + typeof(arr) +" dan hasilnya : " + arr)
})
 
app.listen(8080);
console.log("udah jalan bos. silahkan buka http://localhost:8080")