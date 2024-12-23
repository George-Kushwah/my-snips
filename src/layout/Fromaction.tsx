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
