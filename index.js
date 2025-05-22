console.log("hola mundo!");

fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((res) => console.log(res));
