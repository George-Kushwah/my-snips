export const Pagination = (
  pazesize: any = 10,
  data: any,
  setpagetotal: any,
  page: any,
  setdata: any
) => {
  if (data && data.length > 0) {
    setpagetotal(Math.ceil(data.length / pazesize));
    const finaldata = data.slice(page * pazesize, (page + 1) * pazesize);
    setdata(finaldata);
  }
};
