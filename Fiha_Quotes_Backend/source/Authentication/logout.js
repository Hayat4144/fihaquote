
exports.Logout = (req, res) => {
  const token = req.cookies["token"];
  if (!token) {
    res.status(400).send({ error: "Invalid token" });
  }
  res.clearCookie('token')
  res.end()
};
