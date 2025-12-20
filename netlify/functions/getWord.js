import store from "./store.js";

export async function handler(e){
  const k = e.queryStringParameters.key;
  if(!store[k]) return {statusCode:404, body:"no"};
  return {statusCode:200, body:JSON.stringify(store[k])};
}
