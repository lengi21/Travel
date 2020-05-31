function price(){
    let e1 = document.getElementById("from").value;
    let e2= document.getElementById("where").value;
    let price = document.getElementById("price");
    if(e1==e2) {
        price.innerText = "You chose same cities"
        // console.log(price.innerText);
    }
    if(e1 == 'tbilisi' && e2==`kutaisi`){
        price.innerText = "14 Gel"
    }
    if(e1 == 'tbilisi' && e2==`batumi`){
        price.innerText = "24 Gel"
    }
    if(e1 == 'kutaisi' && e2==`tbilisi`){
        price.innerText = "14 Gel"
    }
    if(e1 == 'kutaisi' && e2==`batumi`){
        price.innerText = "10 Gel"
    }
    if(e1 == 'batumi' && e2==`kutaisi`){
        price.innerText = "10 Gel"
    }
    if(e1 == 'batumi' && e2==`tbilisi`){
        price.innerText = "24 Gel"
    }

    
}

