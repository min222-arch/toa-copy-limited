let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, qty){

qty = Number(qty);

let item = {
name:name,
price:price,
qty:qty,
total:price*qty
};

cart.push(item);

localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " added to cart");

}

function displayCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cartItems");

let total = 0;

container.innerHTML="";

cart.forEach(item=>{

container.innerHTML +=
`
<div class="cart-row">

<span>${item.name}</span>
<span>${item.qty}</span>
<span>KES ${item.total}</span>

</div>
`;

total += item.total;

});

document.getElementById("total").innerText = total;

}

function clearCart(){

localStorage.removeItem("cart");

}