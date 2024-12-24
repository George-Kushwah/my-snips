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

export const Fromactiontest: any = async (prevSate: unknown, formData: any) => {
  const sname: any = Object.fromEntries(formData);
  if (sname?.fname === "" && sname?.city === "" && sname?.mob === "") {
    return { error: "All feilds are Require" };
  }
  if (sname?.fname === "") {
    return { error: "Name feilds are Require", sname };
  }
  if (sname?.city === "") {
    return { error: "City feilds are Require", sname };
  }
  if (sname?.mob === "") {
    return { error: "Mobile feilds are Require", sname };
  } else {
    return { sname };
  }
  // if (sname) {
  //   return { mess: "my name is " + sname };
  // } else return { mess: "my name is wrong" };
};
