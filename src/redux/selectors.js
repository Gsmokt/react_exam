export const getProductByUniqueSelector = (store, name, category, onlyProduct) => {
    let filterProducts = store.products.filter(product => product.nazwa.includes(name.toLowerCase()))
    filterProducts = category ? filterProducts.filter(product => product.kategoria === category) : filterProducts;                  
    filterProducts = onlyProduct ? filterProducts.filter(product => product.produktSpozywczy === true) : filterProducts;
  return filterProducts;
}