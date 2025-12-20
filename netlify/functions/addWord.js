let store = global.store || {};
global.store = store;

export async function handler(event) {
  const data = JSON.parse(event.body);

  if (data.password !== "Subject_666") {
    return { statusCode: 401, body: "Unauthorized" };
  }

  store[data.keyword] = {
    keyword: data.keyword,
    image: data.image,
    audio: data.audio,
    expected: data.expected.toLowerCase(),
    success: 0
  };

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
}
