const auth = require("../portal/auth");

async function fetchTransformersFromPortal() {
  let allTransformers = [];
  let page = 1;

  const token = auth.getToken();

  while (true) {
    const res = await fetch(`${process.env.BASE_URL}/portal/dts?page=${page}`, {
      headers: { Cookie: token },
    });
    const pageItems = await res.json();
    if (pageItems.error != null) {
      return new Error(pageItems.error);
    }
    if (pageItems.length === 0) break;
    allTransformers.push(...pageItems);
    page++;
  }

  return allTransformers;
}

async function fetchMetersDataFromPortal() {
  let allMeters = [];
  let page = 1;

  const token = auth.getToken();

  while (true) {
    const res = await fetch(
      `${process.env.BASE_URL}/portal/meters/search?q=&page=1`,
      {
        headers: { Cookie: token },
      },
    );
    const pageItems = await res.json();
    if (pageItems.error != null) {
      return new Error(pageItems.error);
    }
    if (pageItems.length === 0) break;
    page++;
  }

  return allMeters;
}

module.exports = { fetchTransformersFromPortal, fetchMetersDataFromPortal };
