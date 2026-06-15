//todo
async function apiFetch(url, options) {
  let res = await fetch(url, options);

  if (res.status === 401) {
    // 1. call refresh
    const refreshed = await refreshToken();

    // 2. save new access token
    setTokens(refreshed.data);

    // 3. retry original request
    res = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${refreshed.data.accessToken}`,
      },
    });
  }

  return res;
}