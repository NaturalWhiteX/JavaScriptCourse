var express = require('express');
var app = express();
var fileSystem = require("fs");

app.get('/cardListTBA', function (req, res) {
    fileSystem.readFile(__dirname + "/" + "cardListTBA.json", 'utf8', function (err, data) {
        res.end(data);
    });
})

app.get('/cardListDSC', function (req, res) {
    fileSystem.readFile(__dirname + "/" + "cardListDSC.json", 'utf8', function (err, data) {
        res.end(data);
    });
})

// 用户数据
app.get('/userList', function (req, res) {
    fileSystem.readFile(__dirname + "/" + "userList.json", 'utf8', function (err, data) {
        res.end(data);
    });
})

// 注册
app.get('/registered', function(req, res){
    console.log(req.query);
    var newUser = JSON.parse(req.query.data);
    fileSystem.readFile(__dirname + "/" + "userList.json", 'utf8', function (err, data) {
        data = JSON.parse(data); //string->object
        data.userList.push(newUser);
        // console.log(data);
        data = JSON.stringify(data); //object->string
        //写入文件
        fileSystem.writeFile(__dirname + "/" + "userList.json",data, function(err){
            if (err) {
                return console.error(err);
            }
        })
        res.end(data);
    });
})

// 登录
app.get('/login', function(req, res){

})

// 提问
app.get('/addCardTBA', function (req, res) {
    console.log(req.query);
    // console.log(typeof(req.query));
    var newCardTBA = JSON.parse(req.query.data);
    fileSystem.readFile(__dirname + "/" + "cardListTBA.json", 'utf8', function (err, data) {
        data = JSON.parse(data); //string->object
        data.cardListTBA.push(newCardTBA);
        // console.log(data);
        data = JSON.stringify(data); //object->string
        //写入文件
        fileSystem.writeFile(__dirname + "/" + "cardListTBA.json",data, function(err){
            if (err) {
                return console.error(err);
            }
        })
        res.end(data);
    });
    
})

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://47.99.123.58:8081");
})