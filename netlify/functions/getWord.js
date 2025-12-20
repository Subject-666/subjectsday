let store = global.store || {};
global.store = store;

export async function handler(event) {
  const key = event.queryStringParameters.key;

  if (!store[key]) {
    return { statusCode: 404, body: "Not found" };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(store[key])
  };
}
