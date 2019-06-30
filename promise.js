function getList() {
  return [{ Name: "p1", price: 123 }, { Name: "p2", price: 234 }];
}

function getProductAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getList());
    }, 1000);
  });
}

getProductAsync()
  .then(response => {
    console.log("products arrived");
    return response;
  })
  .then(products => {
    console.log("extract products");
    console.log(products[0]);
  });
