import mysql from "mysql2";
const connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'system',
    database : 'emp_management'
}).promise();

export default connection;