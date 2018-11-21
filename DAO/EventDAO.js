const mysql = require('mysql');

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


exports.createEvent = (name_, club_id_, location_, major_of_interest_, description_, date_, club_name_,callback)=>{
    let query = `INSERT INTO events(name,club_id,location,moi,information,eventdate,clubname) VALUES(\'${name_}\',\'${club_id_}\',\'${location_}\',\'${major_of_interest_}\',\'${description_}\',\'${date_}\',\'${club_name_}\',)`;
    conn.query(query,(err,result)=>{
        if(err) callback(Error('Syntax error in query'));
        console.log(`Successfully added ${name} to the database`);
        callback(null,result);
    });
}

exports.getEvent = (name_,club_id_,callback)=>{
    let query = `SELECT FROM events WHERE name = ${name_} AND club_id = ${club_id_}`;
    conn.query(query,(err,result)=>{
        if(err) callback(new Error('Syntax error in query'));
        if(result.length != 0){
            callback(null,result);
        }
        else{
            console.log(`Failed to retrieve event ${name_} from club ${club_id_}`);
        }
    });
}