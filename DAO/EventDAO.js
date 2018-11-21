const mysql = require('mysql');
const Joi = require('joi');

const schema = {
    name: Joi.string().required(),
    club_id: Joi.string(),
    moi:,
    information:,
    eventdate:,
    club_name:,
}
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mypassword',
    database: 'clubfinity'
});

conn.connect((err)=>{
    if (err) throw err;
    console.log('Connected!');
});


exports.createEvent = (name, club_id, location, major_of_interest, description, date, club_name)=>{

}