let store = global.store || {};
global.store = store;

export async function handler(event) {
  const d = JSON.parse(event.body);

  if (d.password !== "Subject_666") {
    return { statusCode: 401, body: "Unauthorized" };
  }

  if (!store[d.keyword]) {
    return { statusCode: 404, body: "Not found" };
  }

  store[d.keyword].expected = d.expected.toLowerCase();
  return { statusCode: 200, body: "OK" };
}
