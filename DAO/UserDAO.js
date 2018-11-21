const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "localhost",
  user: "nodeuser",
  password: "password",
  database: "clubfinity"
});

conn.connect((err) =>{
  if(err) throw (new Error(err));
  console.log('Connected!');
});

exports.createUser = (firstname_,lastname_,dob_,email_,username_,password_,callback)=>{
  let query = `INSERT INTO users(fname,lname,dateOfBirth,email,username,password) VALUES(\'${firstname_}\',
  \'${lastname_}\',\'${dob_}\',\'${email_}\',\'${username_}\',\'${password_}\')`;
  conn.query(query,(err,result)=>{
    if (err) callback(new Error('Syntax error in query'));
    console.log(`Successfully added ${username_} to the database`);
    callback(null, result);
  });
},
exports.getAllUsers = (callback)=>{
  let query = 'SELECT * FROM users';
  conn.query(query,(err, result)=>{
    if(err) callback(new Error('Syntax error in query'),null);
    callback(null,result);
  });
},
exports.getUser = (username_,callback)=>{
  let query = `SELECT * FROM users WHERE username = \'${username_}\'`;
  conn.query(query, (err,result)=>{
    if (err) callback(new Error('Syntax error in query'),null,null);
    if(result.length != 0){
      console.log(`Successfully retrieved ${username_} from the database`);
      callback(null, result);
    }
    else{
      console.log(`Failed to retrieve ${username_} from database; User does not exist`)
      callback();
    }
  });
},
exports.updateUser = (username_, column, value,callback) =>{
  let query = `UPDATE users SET ${column} = \'${value}\' WHERE username = \'${username_}\'`;
  conn.query(query, (err,results)=>{
    if (err) callback(new Error('Syntax error in query'));
    console.log(`Successfully updated column \'${column}\' of user \'${username_}\' with value \'${value}\'`);
  });
},
exports.deleteUser = (username_,callback) =>{
  let query = `DELETE FROM users WHERE username = \'${username_}\'`;
  conn.query(query,(err,results) => {
    if (err) callback(new Error('Syntax error in query'));
    console.log(`\'${username_} successfully deleted from the database`);
  });
}
