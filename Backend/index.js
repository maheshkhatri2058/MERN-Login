const express=require('express');
const cors=require('cors');
require('./config');
const user=require('./users')
const app=express();
app.use(cors());
app.use(express.json())
app.post('/login',async(req,res)=>{
  let data=new user(req.body)
  let result=await data.save();
  console.log(result);
 console.log(req.body);
  res.send('Done');

})

 app.listen(5005);
