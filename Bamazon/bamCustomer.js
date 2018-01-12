var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({host: "localhost", port: 3306, user: "root", password: "", database: "bamazon_DB"});

connection.connect(function (err) {
    if (err) 
        throw err;
    start();
});

// show initial products on start
function start() {
    connection
        .query("SELECT * FROM products", function (err, results) {
            if (err) 
                throw err;
            console.table(results);
            // prompt user to purchase item
            inquirer.prompt([
                {
                    name: "product",
                    type: "input",
                    message: "Which item would you like to purchase?"
                }, {
                        name: "quantity",
                        type: "input",
                        message: "How many would you like to buy?"
                    }
                ])
                .then(function (response) {
                    connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", 
                    [response.quantity, response.product], function (err, res) {
                        // Let the user know the purchase was successful, re-run loadProducts
                        console.log("\nSuccess!");
                        start();
                    });
                });
        })
}