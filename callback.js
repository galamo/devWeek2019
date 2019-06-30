function getList() {
  return [{ Name: "p1", price: 123 }, { Name: "p2", price: 234 }];
}

// const firstItem = getList()[0];
function getProductsAsync(cbFunc) {
  setTimeout(() => {
    console.log("products arrived");
    cbFunc(getList());
  }, 1000);
}
getProductsAsync(listOfProdcuts => {
  console.log(listOfProdcuts[0]);
});
