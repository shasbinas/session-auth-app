export const showLogin = (req, res) => {
  if (req.session.username) return res.redirect("/products");
  res.render("login");
};

export const login = (req, res) => {
  const { username } = req.body;
  if (username) {
    req.session.username = username;
    req.session.products = [];
    res.redirect("/products");
  } else {
    res.redirect("/login");
  }
};

export const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
