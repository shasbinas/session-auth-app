export const showProducts = (req, res) => {
  res.render("products", {
    username: req.session.username,
    products: req.session.products || []
  });
};

export const addProduct = (req, res) => {
  const { name, price } = req.body;
  if (!req.session.products) req.session.products = [];
  req.session.products.push({ name, price });
  console.log( req.session.products);
  res.redirect("/products");
};
