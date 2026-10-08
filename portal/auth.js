let currentToken = null;

async function login(_, res) {
  const url = `${process.env.BASE_URL}/login`;
  const body = new URLSearchParams({
    email: process.env.PORTAL_EMAIL,
    password: process.env.PORTAL_PASSWORD,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "x-sveltekit-action": "true",
      origin: process.env.BASE_URL,
      referer: `${process.env.BASE_URL}/login`,
    },
    body: body.toString(),
  });

  currentToken = response.headers.getSetCookie();

  // console.log("status:", response.status);
  // console.log("redirected:", response.redirected);
  // console.log("cookies:", response.headers.getSetCookie());
  // console.log("body:", await response.clone().json());
}

function getToken() {
  const token =
    // "ext_name=ojplmecpdpgccookcobabopnaifgidhf;" +
    currentToken[0].split(";")[0];

  return token;
  // console.log(token);
}

module.exports = { login, getToken };
