fetch("https://fakestoreapi.com/products")
  .then((data) => {
    // console.log(data);
    return data.json();
  })
  .then((completedata) => {
    // console.log(completedata[2].title);
    // document.getElementById('root').innerHTML=completedata[2].title;
    let data1 = "";
    completedata.map((values) => {
      data1 += `<div class="card">
        
      <h1 class="title">${values.title}</h1><br/>
        <img src=${values.image} alt="img" class="images"><br/><br/>
        <b>Description:</b>
        <p>${values.description}</p><br/>
        <p class="category">Category: ${values.category}</p>
        <p class="price">Price: $${values.price}</p>
        
        <form method="get" action="/addtocart.html">
        <button class="btn" type="submit" id="cart">Add to Cart</button> 
        </form>
        
        <form method="get" action="/editproduct.html">
        <button class="btn" type="submit" id="editproduct">Edit Product</button>
        </form>

    </div>`;
    });

    document.getElementById("cards").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });

// For Add Product
fetch("https://fakestoreapi.com/products", {
  method: "POST",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// For Update Product
fetch("https://fakestoreapi.com/products/6", {
  method: "PUT",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// For Delete Product
fetch("https://fakestoreapi.com/products/6", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// Get all categories
fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => console.log(json));





  
// For checking only
// fetch('https://fakestoreapi.com/products/categories').then((data) => {
//     return data.category.json();
// }).then((category)=>{
//     let data2='';
//     category.map((values) => {
//         data2+=`<div class="card">
//         <><h1 class="title">${values.title}</h1>
//                 <img src= ${values.image} alt="img" class="images">
//                 <b>Description:</b>
//                 <p>${values.description}</p>
//                 <p class="category">Category:   ${values.category}</p>
//                 <p class="price">Price: ₹${values.price}</p>
//                 <button class="btn">Add to Cart</button>
//             </>
//             </div>`;
//     });
//     document.getElementById("cards").innerHTML=data2;

// }).catch((err) => {
//     console.log(err);
// });
