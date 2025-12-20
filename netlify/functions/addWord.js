let store = global.store || {};
global.store = store;

export async function handler(event) {
  const d = JSON.parse(event.body);

  if (d.password !== "Subject_666") {
    return { statusCode: 401, body: "Unauthorized" };
  }

  store[d.keyword] = {
    keyword: d.keyword,
    image: d.image,
    audio: d.audio,
    expected: d.expected.toLowerCase(),
    success: 0
  };

  return { statusCode: 200, body: "OK" };
}
