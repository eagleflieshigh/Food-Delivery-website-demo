
function showbtn() {
    let btns = document.querySelectorAll(".opt1");
    btns.forEach(btn => {

    if (btn.style.display === "flex" ) {
        btn.style.display ="none";
    } else {
        btn.style.display = "flex";
    }
    });
}


let total = 0;

function addItem(name, price) {
    let cart = document.getElementById("cartbox");

    let existingItem = document.getElementById(name);

    if (existingItem) {
        // increase quantity
        let qty = existingItem.querySelector(".qty");
        qty.innerText = parseInt(qty.innerText) + 1;
    } else {
        let p = document.createElement("p");   // ✅ moved inside else
        p.classList.add("Cart-Item");
        p.id = name;

        p.innerHTML = `
            <div class="item-name">${name}</div>
            <div class="item-price">₹${price} | Qty: <span class="qty">1</span></div>
        `;

        cart.appendChild(p);   // ✅ moved inside else
    }

    total = total + price;
    document.getElementById("total").innerText = "Total ₹: " + total;
}