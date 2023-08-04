const http = require("http");

const option = {
  hostname: "fakestoreapi.com",
  path: "/price/1",
  method: "get",
};

const apiReq = http.request(option, (apiRes) => {
  apiRes.on("data", (data) => {
    console.log(data.toString());
  });
});
apiReq.on("error", (e) => {
  console.log(e);
});
apiReq.end();
