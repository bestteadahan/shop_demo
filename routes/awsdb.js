const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 5,
    host: '[HOST]',
    user: '[USERNAME]',
    password: '[PASSWORD]',
    database: 'serviceProviders',
    timezone: 'utc',
    multipleStatements: true
})

exports.getAllProviders = (category) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT providerId, name, mark FROM providers WHERE category = '${category}'`, (err, rows) => {
            if (err) reject(err)
            else resolve(rows)
        })
    })
}

exports.getProviderInfo = (providerId) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM providers WHERE providerId = '${providerId}'`, (err, rows) => {
            if (err) reject(err)
            else resolve(rows[0])
        })
    })
}

exports.getAllProducts = (providerId) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM products WHERE providerId = '${providerId}'`, (err, rows) => {
            if (err) reject(err)
            else resolve(rows)
        })
    })
}

exports.getProductInfo = (productId) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT productId,price,name FROM products WHERE productId = '${productId}'`, (err, rows) => {
            if (err) reject(err)
            else resolve(rows[0])
        })
    })
}

exports.insertNewOrder = (order) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO orders SET ?', order, (err, rows) => {
            if (err) reject(err)
            else {
                if (rows.affectedRows = 1) {
                    resolve('Insert new order success')
                } else {
                    reject('Insert failed')
                }
            }
        })
    })
}

exports.insertOrderdetail = (orderdetail) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO orderdetails SET ?', orderdetail, (err, rows) => {
            if (err) reject(err)
            else {
                if (rows.affectedRows = 1) {
                    resolve('Insert new order detail success')
                } else {
                    reject('Insert failed')
                }
            }
        })
    })
}

exports.getOrders = (customerId) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM orders WHERE customerId='${customerId}' ORDER BY updated DESC`, (err, rows) => {
            if (err) reject(err)
            else resolve(rows)
        })
    })
}

exports.getOrderdetail = (orderId) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT O.qty, O.subtotal, P.productId, P.pictures, P.name FROM orderdetails AS O JOIN products AS P ON O.productId = P.productId WHERE orderId='${orderId}' ; SELECT * FROM orders WHERE orderId = '${orderId}'`, (err, rows) => {
            if (err) reject(err)
            else resolve(rows)
        })
    })
}