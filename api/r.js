// lnks.alxprst.co — stateless 302 bounce into Messages / the dialer.
// /m/+15551234567 -> imessage://+15551234567
// /c/+15551234567 -> tel:+15551234567
// E.164-only allowlist: this can never redirect anywhere else.
const RE = /^\/(m|c|msg|call)\/(\+\d{7,15})$/;

module.exports = (req, res) => {
  let path;
  try {
    path = decodeURIComponent(new URL(req.url, "https://lnks.alxprst.co").pathname);
  } catch {
    res.statusCode = 400;
    return res.end("bad request");
  }
  const m = RE.exec(path);
  if (!m) {
    res.statusCode = 404;
    return res.end("not found");
  }
  const scheme = m[1] === "m" || m[1] === "msg" ? "imessage://" : "tel:";
  res.statusCode = 302;
  res.setHeader("Location", scheme + m[2]);
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.end();
};
