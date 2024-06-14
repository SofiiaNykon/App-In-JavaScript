
async function userFetch(){
  const result  = await fetch('https://fakestoreapi.com/products/?_limit=12');

    return result.json();
}                 //creating element
              async function createContainer(){
                const products = await userFetch();
                const list = document.querySelector(".products-container");
                for(const product of products){
                const productItem = document.createElement("div");
                const img = document.createElement("img");
                const productTitle = document.createElement("h1");
                const productDescribe = document.createElement("p");
                const productItemPrice = document.createElement("div");
                const price = document.createElement("span");
                const button = document.createElement("button");
                //adding classes
                productItem.classList.add(".product-item");
                productTitle.classList.add(".product-item h1");
                productDescribe.classList.add(".product-item p");
                productItemPrice.classList.add(".product-item-price");
                price.classList.add(".product-item-price span");
                button.classList.add(".product-price-button");
                
              
                img.innerHTML = product.image;
                productTitle.innerHTML = product.title;
                productDescribe.innerHTML = product.description;
                price.innerHTML = product.price;
                button.innerText = "Add";
              
                productItem.append(img, productTitle, productDescribe);
                productItemPrice.append(price, button);
                list.append(productItem, productItemPrice);
              }
}
createContainer()

// button.onclick (){
// const counter = 0;

// }