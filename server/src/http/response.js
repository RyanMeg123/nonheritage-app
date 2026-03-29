export function json(data, statusCode = 200) {
  return {
    statusCode,
    body: data,
  };
}

export function writeResponse(res, response) {
  res.statusCode = response.statusCode;
  res.end(JSON.stringify(response.body, null, 2));
}
