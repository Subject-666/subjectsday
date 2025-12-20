let store = global.store || {};
global.store = store;

export async function handler(event) {
  const { key } = JSON.parse(event.body);

  if (!store[key]) {
    return { statusCode: 404, body: "Not found" };
  }

  store[key].success++;

  return {
    statusCode: 200,
    body: JSON.stringify({ success: store[key].success })
  };
}
