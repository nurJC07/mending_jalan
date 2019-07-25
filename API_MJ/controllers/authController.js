var Crypto = require('crypto');
const conn = require('../database');

module.exports = {
    register: (req,res) => {
        
        var { username, password, email, phone } = req.body;
        var sql = `SELECT username FROM users WHERE username='${username}'`;
        conn.query(sql, (err, result) =>{
            if(err) {
                throw err;
            }
            if(result.length > 0){
                res.send({status: "error", message: "Username has been taken!"})
            } else {
                const hashPassword = Crypto.createHmac('sha256', "abcd123")
                            .update(password).digest('hex');
                var dataUser = { 
                    username,
                    password: hashPassword,
                    email,
                    phone
                  
                }
                sql = `insert into users set ?`;
                conn.query(sql, dataUser, (err1, res1) => {
                    if(err1) 
                        throw err1
                       
                })
            res.send({
            username
                    })
               
                }})
        
    },
    signin: (req,res) => {
            var { username, password } = req.body;
            const hashPassword = Crypto.createHmac('sha256', "abcd123")
            .update(`${password}`).digest('hex');

            var sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${hashPassword}';`;
            conn.query(sql, (err, result) => {
                if(err) throw err;
                console.log(req.body)
                console.log(result);
                res.send(result);
            })
        },
        keeplogin: (req,res) => {

        var { username } = req.body;

        var sql = `SELECT * FROM users WHERE username = '${username}';`;
        conn.query(sql, (err, result) => {
            if(err) throw err;
            console.log(req.body)
            console.log(result);
            res.send(result);
        })
    }     
}