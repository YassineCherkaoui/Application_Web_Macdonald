var urlString = window.location.search;
var urlParam = new URLSearchParams(urlString);
const id = urlParam.get('id');
let productContinner = document.getElementById('productContinner');

console.log(id)


axios.get(`http://localhost:8080/product/${id}`)
.then(function (response) {


    response.data.forEach(element => {
        productContinner.innerHTML += `
        <div id="${element.type}" class="container tab-pane active">
        <div class="row">
            <div class="col-lg-7 col-md-12">
      <div class="menu-item">
      <div class="menu-img">
          <img src="img/${element.img}" alt="Image">
      </div>
      <div class="menu-text">
          <h3><span>${element.name}</span> <strong>${element.price} DH</strong></h3>
<p>${element.disc}</p>
<div class="shoose-butt">
<button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModal"> Checkout</button>
<button type="button" class="btn btn-outline-warning" > Add to panier</button>
</div>											
</div>
  </div>
      `  
    });



    
}).catch(function (err) {
    console.log(err);
});