import store from "./store.js";

export async function handler(e){
  const d = JSON.parse(e.body);
  if(d.password!=="Subject_666") return {statusCode:401, body:"no"};
  if(!store[d.keyword]) return {statusCode:404, body:"no"};

  store[d.keyword].expected = d.expected.toLowerCase();
  return {statusCode:200, body:"ok"};
}
