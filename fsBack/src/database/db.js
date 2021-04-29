// -------------------------------------------------------------------------------
// CONEXIÓN DB
// -------------------------------------------------------------------------------
const jwt = require("jsonwebtoken");
const { MongoClient } = require("mongodb");
const randomstring = require("randomstring");
const URL = process.env.MONGODB;
const optionsMongo = { useNewUrlParser: true, useUnifiedTopology: true };

// -------------------------------------------------------------------------------
// LOGICA
// -------------------------------------------------------------------------------

const registerNewUser = (USER) => {
  return new Promise((res, rej) => {
    MongoClient.connect(URL, optionsMongo, (err, db) => {
      try {
        db.db("niutu")
          .collection("usuarios")
          .insertOne(USER, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              const result = {
                status: 200,
                data: "Nuevo usuario creado",
                ok: true,
              };
              res(result);
              db.close();
            }
          });
      } catch {
        rej(err);
      }
    });
  });
};

const checkUser = (user) => {
  return new Promise((res, rej) => {
    MongoClient.connect(URL, optionsMongo, (err, db) => {
      try {
        db.db("niutu")
          .collection("usuarios")
          .findOne(user, (err, result) => {
            if (err) throw err;
            if (result === null) {
              res({
                status: 401,
                data: "Email o contraseña incorrect@s",
                ok: false,
              });
            } else {
              let token = jwt.sign(
                { email: result.email, id: result.id },
                result.secret,
                {
                  expiresIn: 60 * 60,
                }
              );
              res({
                status: 200,
                token: token,
                data: "Usuario logado correctamente",
                ok: true,
              });
              db.close();
            }
          });
      } catch {
        rej({
          status: 500,
          data: "Error con la base de datos",
          ok: false,
        });
      }
    });
  });
};

const deleteSecret = (token) => {
  const secret = randomstring.generate();
  const decode = jwt.decode(token);
  return new Promise((res, rej) => {
    MongoClient.connect(URL, optionsMongo, (err, db) => {
      try {
        db.db("niutu")
          .collection("usuarios")
          .updateOne(
            { id: decode.id },
            {
              $set: { secret: secret}
            },
            (err, result) => {
              if (err) throw err;
              if (result === null) {
                res({
                  status: 401,
                  data: "Ha habido un error",
                  ok: false,
                });
              } else if (result.result.n === 1){
                res({
                  status: 200,
                  data: "Logout correctamente",
                  result,
                  ok: true,
                });
                db.close();
              }
              else {
                res({
                  status: 406,
                  data: "Algo salió mal...",
                  result,
                  ok: false,
                });
                db.close();
              }
            }
          );
      } catch {
        rej({
          status: 500,
          data: "Error con la base de datos",
          ok: false,
        });
      }
    });
  });
     
};

const newCardDB = (card) => {
  return new Promise((res, rej) => {
    MongoClient.connect(URL, optionsMongo, (err, db) => {
      try {
        db.db("niutu")
          .collection("usuarios")
          .updateOne(
            { id: card.id },
            { $push: { tarjetas: card } },
            (err, result) => {
              if (err) throw err;
              if (result === null) {
                res({
                  status: 401,
                  data: "Ha habido un error",
                  ok: false,
                });
              } else {
                res({
                  status: 200,
                  data: "Tarjeta añadida correctamente",
                  ok: true,
                });
                db.close();
              }
            }
          );
      } catch {
        rej({
          status: 500,
          data: "Error con la base de datos",
          ok: false,
        });
      }
    });
  });
};

const editUserDB = (user) => {
  return new Promise((res, rej) => {
    MongoClient.connect(URL, optionsMongo, (err, db) => {
      try {
        db.db("niutu")
          .collection("usuarios")
          .updateOne(
            { id: user.id },
            {
              $set: {
                name: user.name,
                surname: user.surname,
                email: user.email,
                movil: user.movil,
              },
            },
            (err, result) => {
              if (err) throw err;
              if (result === null) {
                res({
                  status: 401,
                  data: "Ha habido un error",
                  ok: false,
                });
              } else {
                res({
                  status: 200,
                  data: "Usuario editado correctamente",
                  ok: true,
                });
                db.close();
              }
            }
          );
      } catch {
        rej({
          status: 500,
          data: "Error con la base de datos",
          ok: false,
        });
      }
    });
  });
};

const newCarDB = (coches) => {
  return new Promise((res, rej) => {
    console.log(coches);
    MongoClient.connect(URL, optionsMongo, (err, db) => {
      try {
        db.db("niutu")
          .collection("usuarios")
          .updateOne(
            { id: coches.id },
            { $push: { coches: coches } },
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                const result = {
                  status: 200,
                  data: "Nuevo coche creado",
                  ok: true,
                };
                res(result);
                db.close();
              }
            }
          );
      } catch {
        rej(err);
      }
    });
  });
};

const editCarDB =(coche) => {
  return new Promise((res, rej) => {
    MongoClient.connect(URL, optionsMongo, (err, db) => {
      try {
        db.db("niutu")
          .collection("usuarios")
          .updateOne(
            { id: coche.id, "coches.matricula": coche.matricula },
            {
              $set: { 'coches.$': coche}
            },
            (err, result) => {
              if (err) throw err;
              if (result === null) {
                res({
                  status: 401,
                  data: "Ha habido un error",
                  ok: false,
                });
              } else if (result.result.n === 1){
                res({
                  status: 200,
                  data: "Coche editado correctamente",
                  result,
                  ok: true,
                });
                db.close();
              }
              else {
                res({
                  status: 406,
                  data: "No se ha encontrado el coche",
                  result,
                  ok: false,
                });
                db.close();
              }
            }
          );
      } catch {
        rej({
          status: 500,
          data: "Error con la base de datos",
          ok: false,
        });
      }
    });
  });
}

const newInvoiceDB = invoice => {
  return new Promise((res, rej) => {
    MongoClient.connect(URL, optionsMongo, (err, db) => {
      try {
        db.db("niutu")
          .collection("usuarios")
          .updateOne(
            { id: invoice.id },
            { $push: { facturas: invoice } },
            (err, result) => {
              if (err) throw err;
              if (result === null) {
                res({
                  status: 401,
                  data: "Ha habido un error",
                  ok: false,
                });
              } else {
                res({
                  status: 200,
                  data: "Factura añadida correctamente",
                  ok: true,
                });
                db.close();
              }
            }
          );
      } catch {
        rej({
          status: 500,
          data: "Error con la base de datos",
          ok: false,
        });
      }
    });
  });
}

const registerNewUserGoogle = (USER) => {
  return new Promise((res, rej) => {
    const secret = randomstring.generate();
    connection.query(
      `INSERT INTO usuarios (email, pass, secret) VALUES ("${USER.email}","${USER.pass}", "${secret}")`,
      function (error, results, fields) {
        if (error) {
          const result = {
            status: 405,
            data: "Usuario ya existe",
            ok: false,
          };
          res(result);
        } else {
          connection.query(
            `SELECT secret, id FROM usuarios WHERE email = '${USER.email}'`,
            function (err, results, fields) {
              if (err) {
                console.log(err);
                res(false);
              } else if (results[0]?.secret) {
                let token = jwt.sign(
                  { email: USER.email, id: results[0].id },
                  results[0].secret,
                  { expiresIn: 60 * 60 }
                );
                const result = {
                  status: 200,
                  data: "Usuario creado correctamente",
                  token,
                  ok: true,
                };
                res(result);
              } else if (results[0] == undefined) {
                const result = {
                  status: 400,
                  data: "Email o contraseña incorrect@s",
                  ok: false,
                };
                res(result);
              }
            }
          );
        }
      }
    );
  });
};

// -------------------------------------------------------------------------------
// Export modules
// -------------------------------------------------------------------------------

module.exports = {
  registerNewUser,
  checkUser,
  newCardDB,
  editUserDB,
  newCarDB,
  editCarDB,
  newInvoiceDB,
  deleteSecret,
  registerNewUserGoogle,
};
