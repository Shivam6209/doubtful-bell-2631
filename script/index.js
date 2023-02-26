let container = document.getElementById("product-container");

async function fetchData() {
    try {
      let data = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products");
      data = await data.json();
      displayData(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()

function displayData(data) {
  container.innerHTML = null
  for(let i=0;i<4;i++){
    let card = document.createElement("div");
    let img = document.createElement("img");
    let brand = document.createElement("h2")
    let category = document.createElement("h4")
    let price = document.createElement("h3")
    let detail = document.createElement("p")
    let addToCart = document.createElement("button");

    img.src = data[i].img;
    brand.textContent = data[i].brand;
    category.textContent = data[i].category;
    price.textContent = `$${data[i].price}`; 
    detail.textContent = data[i].details;
    addToCart.textContent = "Add To Cart";
    addToCart.style.backgroundColor = "#03A9F4"
    addToCart.style.border = "2px solid white"
    addToCart.style.borderRadius = "5px";

    addToCart.addEventListener("click",()=>{
        cart.push({...Product,quantity:1});
        localStorage.setItem("cart",JSON.stringify(cart));
        alert("Product Added To Cart")

    })

    card.append(img, brand, price, detail, category, addToCart);
    container.append(card)

  };
}