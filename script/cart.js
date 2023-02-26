let cartData = JSON.parse(localStorage.getItem("cart-data"))||[];
let container=document.getElementById("container");

let sum = 0;
for (let i = 0; i < cartData.length; i++) {
  sum += Number(cartData[i].price) * Number(cartData[i].quantity)
}
console.log(sum)
document.getElementById("cart-total").innerText = `$`+sum;


displayData(cartData);
function displayData(data) {
  container.innerHTML = null
  data.forEach((Product) => {
    let card=document.createElement("div");
   let img=document.createElement("img");
   let title=document.createElement("p");
   let price=document.createElement("h3");
   let remove= document.createElement("button");

    img.src = Product.image;
    price.textContent = `$`+Product.price; //""
    title.textContent = Product.title;
    remove.textContent = "Delete";

    remove.addEventListener("click",()=>{
        cartData= cartData.filter((ele) => {
            return ele.title != Product.title
          })
          localStorage.setItem("cart-data", JSON.stringify(cartData));
          displayData(cartData)
    })

   

    card.append(img,title,price, remove);
    container.append(card)

  });
}


