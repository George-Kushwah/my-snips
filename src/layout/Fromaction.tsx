"use server";

const wait = (delay: any) => {
  return new Promise((res) => setTimeout(res, delay));
};

export const Fromaction: any = async (prevSate: any, fromData: any) => {
  const sname = fromData.get("sname");
  await wait(800);
  if (sname) {
    return { mess: "my name is " + sname };
  } else return { mess: "my name is wrong" };
};

export const sendData = (ev: any) => {
  let d = new Promise((res) => {
    setTimeout(() => {
      res(ev);
    }, 2000);
  });
  return d;
};

export const Fromactiontest: any = async (prevSate: unknown, formData: any) => {
  const sname: any = Object.fromEntries(formData);
  if (sname?.fname === "" && sname?.city === "" && sname?.mob === "") {
    return {
      error: {
        fname: "Name feilds are Require",
        city: "City feilds are Require",
        mob: "Mobile feilds are Require",
      },
    };
  }
  if (sname?.city === "") {
    return { error: { city: "City feilds are Require" } };
  }
  if (sname?.mob === "") {
    return {
      error: { mob: "Mobile feilds are Require" },
    };
  } else {
    //let dc = await sendData(sname);
    return { sname };
  }
};
