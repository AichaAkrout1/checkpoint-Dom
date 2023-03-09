var likes = document.getElementsByClassName("like");
var minus = document.getElementsByClassName('minus-btn');
var plus = document.getElementsByClassName('plus-btn');
var quantity = document.getElementsByClassName('Quant');
var price = document.getElementsByClassName('price');
var total = document.getElementById('finalPrice');
var del = document.querySelectorAll('.delete');


//********button-like*********//

console.log(likes);
for(let i= 0; i< likes.length; i++){
    let like = likes[i];
    like.addEventListener("click" ,function(){
        if (like.firstElementChild.style.color == "red"){
            like.firstElementChild.style.color = "black";
        } else {
            like.firstElementChild.style.color = "red";
        }

    });
}

//********incrementation*********//

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function(){
  
   if(quantity[i].value>0){
    quantity[i].value--;
    calcul();
    firstsomme ()
    secondsomme ()
    thirdsomme ()

   }
    
  
  })

  }

//********decrementation*********//

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function(){
   
     quantity[i].value ++;
     calcul();
     firstsomme ()
     secondsomme ()
     thirdsomme ()
    
     
  })
  
  }

//********total price*********//

function calcul() {
    var result = 0; 
     for (let i = 0; i < price.length; i++) {
        result = result + ((price[i].innerHTML) * (quantity[i].value))
}

document.getElementById('finalPrice').value = result
}

//**********delete************//

for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", function () {
      del[i].parentElement.remove()
      calcul()
      firstsomme ()
      secondsomme ()
      thirdsomme ()
  })
}
function firstsomme (){
    let q1 = document.getElementById("q1");
    let p1 = document.getElementById("p1");
    return p1.innerText = q1.value*1379;
}

function secondsomme (){
    let q2 = document.getElementById("q2");
    let p2 = document.getElementById("p2");
    return p2.innerText = q2.value*176.00;
}

function thirdsomme (){
    let q3 = document.getElementById("q3");
    let p3 = document.getElementById("p3")
    return p3.innerText = q3.value*249.00;
}

