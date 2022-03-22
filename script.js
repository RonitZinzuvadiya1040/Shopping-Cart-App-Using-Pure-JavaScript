

fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata)=> {
    // console.log(completedata[2].title);
    // document.getElementById('root').innerHTML=completedata[2].title;
    let data1='';
    completedata.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">${values.title}</h1><br/>
        <img src=${values.image} alt="img" class="images"><br/><br/>
        <b>Description:</b>
        <p>${values.description}</p><br/>
        <p class="category">Category:   ${values.category}</p>
        <p class="price">Price: ₹${values.price}</p>
        <button class="btn">Add to Cart</button> 
        <button class="btn">Edit</button> 
    </div>`;
    
    });

    document.getElementById("cards").innerHTML=data1;


}).catch((err) => {
    console.log(err);
});

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