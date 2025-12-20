import store from "./store.js";

export async function handler(e){
  const d = JSON.parse(e.body);
  if(d.password!=="Subject_666") return {statusCode:401, body:"no"};
  delete store[d.keyword];
  return {statusCode:200, body:"ok"};
}
