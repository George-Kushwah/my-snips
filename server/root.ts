const root = {
  users() {
    return [{ id: 1, name: "ssdsd" }];
  },
  async minal() {
    return new Promise((res, rej) => {
      con.query("select * from myinput", (err: any, val: any) => {
        if (err) rej(err);
        res(Object.values(JSON.parse(JSON.stringify(val))));
      });
    });
  },
};
module.exports = root;
