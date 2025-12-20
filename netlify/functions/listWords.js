import store from "./store.js";

export async function handler(){
  return {statusCode:200, body:JSON.stringify(Object.values(store))};
}
