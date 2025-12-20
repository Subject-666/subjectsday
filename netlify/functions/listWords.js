let store = global.store || {};
global.store = store;

export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify(Object.values(store))
  };
}
