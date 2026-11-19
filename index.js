const http = require("http");
http.createServer(async (req, res) => {
  const urls = {
    spot: "https://api.binance.com/api/v3/ping",
    futuros: "https://fapi.binance.com/fapi/v1/ping"
  };
  const out = {};
  for (const [k, u] of Object.entries(urls)) {
    try { out[k] = (await fetch(u)).status } catch (e) { out[k] = "error " + e.message }
  }
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(out));
}).listen(process.env.PORT || 3000);
