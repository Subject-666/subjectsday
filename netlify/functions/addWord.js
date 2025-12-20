import store from "./store.js";

export async function handler(e){
  const d = JSON.parse(e.body);
  if(d.password !== "Subject_666") return {statusCode:401, body:"no"};

  store[d.keyword] = {
    keyword:d.keyword,
    image:d.image,
    audio:d.audio,
    expected:d.expected.toLowerCase(),
    success:0
  };

  return {statusCode:200, body:"ok"};
}
