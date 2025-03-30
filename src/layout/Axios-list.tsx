import axios from "axios";

const CustomAxios = (url: any) => {
  const Instance = axios.create({
    baseURL: url,
    timeout: 3000,
  });
  Instance.interceptors.request.use(
    (request) => {
      let ids = document.getElementById("loading");
      if (ids) {
        ids.classList.remove("shows");
        document.body.classList.add("body-blur");
      }
      //request.headers.channel="My channel"
      return request;
    },
    (error) => {
      let ids = document.getElementById("loading");
      if (ids) {
        ids.classList.add("shows");
        document.body.classList.remove("body-blur");
      }
      return Promise.reject(error);
    }
  );
  Instance.interceptors.response.use(
    async (response) => {
      let ids = document.getElementById("loading");
      if (ids) {
        ids.classList.add("shows");
        document.body.classList.remove("body-blur");
      }
      //Object.assign(response, { data: { list: { data: response.data } } })
      //  console.log(response)
      await wait(100);
      return response;
    },
    (error) => {
      let ids = document.getElementById("loading");
      if (ids) {
        ids.classList.add("shows");
        document.body.classList.remove("body-blur");
      }
      return Promise.reject(error);
    }
  );
  return Instance;
};
function wait(delay: any) {
  return new Promise((res) => setTimeout(res, delay));
}
export default CustomAxios;
