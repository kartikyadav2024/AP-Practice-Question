function checkFileAccess(req, res, next) {
  const user = req.params.user;
  if (user.includes("READ_WRITE")) {
    next();
  } else {
    res.status(403).json({ message: "Access Denied" });
  }
}

module.exports = checkFileAccess;
