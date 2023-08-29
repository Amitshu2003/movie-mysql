const mysql = require('mysql');

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_Password
});


db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server');

    // Create the database if it doesn't exist
    db.query('CREATE DATABASE IF NOT EXISTS movieDB', (err) => {
        if (err) throw err;
        console.log('Database created or already exists');

    });

    // using the database
    db.query('USE movieDB', (err) => {
        if (err) throw err;
        console.log('used movieDb');
    })

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS movies(
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          year VARCHAR(255) NOT NULL,
          type VARCHAR(255) NOT NULL,
          image TEXT(20000) NOT NULL
        )
      `;
    // creating the table
    db.query(createTableQuery, (err) => {
        if (err) throw err;
        console.log('Table created or already exists');
    });

});

module.exports = db
