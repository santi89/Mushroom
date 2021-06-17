var db = require("../controllers/dbconnection");

module.exports = {
  select: () => {
    return new Promise(async (resolve, reject) => {
      let connect;
      try {
        connect = await db.getConnection();
        let users = await connect.query("select * from users");
        resolve(users);
      } catch (error) {
        connect.end();
        reject(error);
      } finally {
        if (connect) connect.end();
      }
    });
  },
};
