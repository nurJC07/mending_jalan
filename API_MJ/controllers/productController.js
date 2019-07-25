const conn = require('../database');
var fs = require('fs');


module.exports = {
    
    getproduct: (req,res) => {
        var sql = `SELECT * FROM product;`;
        conn.query(sql, (err, result) => {
            if(err) throw err;
            // console.log(result)
            res.send(result);
        })
    },
    getproductdetail : (req,res) => {
        var sql = `SELECT * FROM product WHERE productId='${req.params.productId}';`;
        conn.query(sql, (err, result) => {
            if(err) throw err;
            // console.log(result)
            res.send(result);
        })
    },
    getarticle: (req,res) => {
        var sql = `SELECT * FROM article;`;
        conn.query(sql, (err, result) => {
            if(err) throw err;
            console.log("dapata")
            res.send(result);
        })
    },
    getarticledetail : (req,res) => {
        var sql = `SELECT * FROM article WHERE articleId='${req.params.articleId}';`;
        conn.query(sql, (err, result) => {
            if(err) throw err;
            console.log("a")
            res.send(result);
        })
    },
    articlerecent: (req,res) => {
        var sql = `select * from article order by postdate desc limit 1`;
        conn.query(sql, (err, result) => {
            if(err) throw err;
            res.send(result);
        })
    },

}
   