
const mysql = require('mysql')
const mailer = require('../utils/mailer');

const pool = mysql.createConnection('mysql://mysql://b30d494a43372e:266f00b8@us-cdbr-east-03.cleardb.com/heroku_e3dd8db752fc177?reconnect=true');
pool.query = util.promisify(pool.query);

const reporteFalla = async(req, res, next) => {
    
    try {
        
        const email = 'marianlange01@gmail.com' //Debería ir el email de mantenimiento@trenesargentinos.gob.ar
        const { falla } = req.body;
        const emailToSend = { email, falla };
        
        const info = await mailer.failures(emailToSend);
        
        if(info) {
 
            pool.getConnection((err, connection) =>{
            if(err) throw err;
            console.log('Connected as ID' + connection.threadId)

            var sql = "INSERT INTO fallas (falla) VALUES ?";

            var values = [
              [falla],
            ];
            pool.query(sql, [values], function (err, result) {
              if (err) throw err;
              console.log("Number of records inserted: " + result.affectedRows);
            });
              });
                        
            res.render('user', { enviado: 'Reporte de Falla enviado satisfactóriamente.' });

        }

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}


const getUser = async (req, res) => {
  pool.getConnection((err, connection) => {
          if (err) throw err; // not connected!
          console.log('Connected as ID ' + connection.threadId);
          // User the connection
          pool.query('SELECT * FROM fallas WHERE status = 1', [req.params.id], (err, rows) => {
            // When done with the connection, release it
            connection.release();
            if (!err) {
              res.render('user', { rows });
            } else {
              console.log(err);
            }
          });
        });
      }



const deleteF = async (req, res) => {

  pool.getConnection((err, connection) => {
    if (err) throw err;
    pool.query('UPDATE fallas SET status = ? WHERE id_falla = ?', ['0', req.params.id_falla], (err, rows) => {
      connection.release() // return the connection to pool
      if (!err) {
        res.redirect('/user');
      } else {
        console.log(err);
      }
      console.log('The data from beer table are: \n', rows);
    });
  });
      
      }
      


module.exports = {
    getUser,
    reporteFalla,
    deleteF,
}