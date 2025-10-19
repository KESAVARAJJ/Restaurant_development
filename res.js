let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
});


function call(){
    fetch("http://localhost:8081/restaurant")
    .then((rs)=>rs.json())
    .then((out)=>console.log(out))
}


// btn=document.getElementById("btn")
// btn.addEventListener('click',()=>{
//     call()
// })


    //   fetch('./index.json')
    //     .then(res =>  res.json())
    //     .then(data => {
    //       console.log(data);
    //     });

  document.addEventListener("DOMContentLoaded", () => {
    fetch('./index.json')
      .then(res => res.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const user = data[randomIndex];
 
        const formattedOrder = user["Product Ordered"].join('\n');

        // document.getElementById('name').value = user.name;
        // document.getElementById('email').value = user.email;
        // document.getElementById('order').value = formattedOrder;
        // document.getElementById('tamt').value = user["total amount"];
        document.getElementById('bid').value = user["bill Id"];
       // document.getElementById('tid').value = user["transaction Id"];
      })
      .catch(err => console.error("Error loading data:", err));


         // === My checkbox calculation code goes here ===

let items = document.querySelectorAll(".item");

items.forEach(function(item) {
  item.addEventListener("change", calculateBill);
});

function calculateBill() {
  let total = 0;
  let orderList = [];

  items.forEach(function(item) {
    if (item.checked) {
      let name = item.value;
      let price = parseInt(item.dataset.price); // get numeric price from data-price
      total += price;
      orderList.push(`${name}-rs.${price}`); // format for DB
    }
  });
  
      document.getElementById("tamt").value = "rs." + total;
    }


    //document.querySelector("form").addEventListener("submit", function (e) {
     // e.preventDefault(); 
//alert("Your product will be delivered soon");
    // location.reload(); 
   // });


  });


