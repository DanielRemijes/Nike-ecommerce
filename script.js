const wrapper= document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuitem")

const products = [
    {
        id: 1,
        title:"Air Force 1",
        price: 119,
        colors: [
            {
                code: "black",
                img: "img/air.png",
            },
            {
                code: "darkblue",
                img: "img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan 1'High",
        price: 149,
        colors: [
          {
            code: "lightgray",
            img: "img/jordan.png",
          },
          {
            code: "green",
            img: "img/jordan2.png",
          },
        ],
      },
      {
        id: 3,
        title: "Blazer Mid'77",
        price: 109,
        colors: [
          {
            code: "lightgray",
            img: "img/blazer.png",
          },
          {
            code: "green",
            img: "img/blazer2.png",
          },
        ],
      },
      {
        id: 4,
        title: "Crater Impact Trainers",
        price: 129,
        colors: [
          {
            code: "black",
            img: "img/crater.png",
          },
          {
            code: "lightgray",
            img: "img/crater2.png",
          },
        ],
      },
      {
        id: 5,
        title: "Hippie 01 Casual Sneakers",
        price: 99,
        colors: [
          {
            code: "gray",
            img: "img/hippie.png",
          },
          {
            code: "black",
            img: "img/hippie2.png",
          },
        ],
      },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct=products[index]

        //change texts of currentproject
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$"+choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assigning new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,_index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});

close.addEventListener("click",()=>{
    payment.style.display="none"
});

const searchInput = document.getElementById('searchInput');
const productItems = document.querySelectorAll('.sliderItem');

searchInput.addEventListener('input', function(event) {
    const searchQuery = event.target.value.toLowerCase();

    productItems.forEach(item => {
        const productTitle = item.querySelector('.sliderTitle').textContent.toLowerCase();

        if (productTitle.includes(searchQuery)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

var inputFld = document.getElementById("funInput")
console.log(inputFld)
var button=document.getElementById("funButton")


button.addEventListener("click",function(){
    alert("Thank You for Joining!")
    inputFld.value = " "
});