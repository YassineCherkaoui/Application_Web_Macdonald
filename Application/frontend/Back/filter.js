
let category_menu = document.getElementById('menu-accordeon');

let sctgContinner = document.getElementById('sctgContinner');

// get category from db 

axios.get('http://localhost:8080/category')
.then(function (response) {
  
    response.data.forEach(element => {
        category_menu.innerHTML += `<div id="${element.type}" class="container tab-pane active">
        <div class="row">
            <div class="col-lg-7 col-md-12">
      <div class="menu-item">
      <div class="menu-img">
          <img src="img/${element.img}" alt="Image">
      </div>
      <div class="menu-text">
          <h3><span>${element.nom}</span> <strong>${element.prix} DH</strong></h3>
<p>${element.disc}</p>
<div class="shoose-butt">
<button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModal"> Checkout</button>
<button type="button" class="btn btn-outline-warning" > Add to panier</button>
</div>											
</div>
  </div> `
        
    });
    
}).catch(function (err) {
    console.log(err);
});

// --------------------get all sous category --------------------


axios.get('http://localhost:8080/sousCategory')
.then(function (response) {

    for (let i = 0; i < 8; i++) {
        sctgContinner.innerHTML += `<div id="${element.type}" class="container tab-pane active">
        <div class="row">
            <div class="col-lg-7 col-md-12">
      <div class="menu-item">
      <div class="menu-img">
          <img src="img/${element.img}" alt="Image">
      </div>
      <div class="menu-text">
          <h3><span>${element.nom}</span> <strong>${element.prix} DH</strong></h3>
<p>${element.disc}</p>
<div class="shoose-butt">
<button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModal"> Checkout</button>
<button type="button" class="btn btn-outline-warning" > Add to panier</button>
</div>											
</div>
  </div> ` 
        


      
    }

   


    

    
  
   
    
}).catch(function (err) {
    console.log(err);
});












