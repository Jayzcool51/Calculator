var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var cors=require('cors');
app.set('view engine','ejs');

app.use(cors({origin:'http://localhost:3000',credentials:true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });
app.post('/Calc',function(req,res){
  console.log("calculation");
  console.log(req.body);
  var operator=parseFloat(req.body.operator);
  console.log(operator);
  var op=req.body.oper;
  console.log(op);
  var operand=parseFloat(req.body.operand);
  console.log(operand);
  var result;
  switch(op){
    case '+':
             result= operator+operand;
             console.log(result);
             break;
    case '-':
            result=operator-operand;
            console.log(result);
            break;
    case '*':
            result=operator*operand;
            console.log(result);
            break;
    case '/':
            result=operator/operand;  
            console.log(result);
            break;
  }
  res.writeHead(200,{
    'Content-Type' : 'application/json'
})
  res.end(JSON.stringify(result));
});
app.listen(3001);
console.log("Server Listening on port 3001");
