let left = document.querySelector('#l');
let right = document.querySelector('#r');
let boat = document.querySelector('#bi');
let btn = document.querySelector('#bt');
let river = document.querySelector('#river');
let resbtn = document.querySelector('#restart-button');
let win = document.querySelector('#w');
let loss = document.querySelector('#loss');

let sheep = document.createElement('img');
let wlf = document.createElement('img');
let farmer = document.createElement('img');
let lett = document.createElement('img');

let verificaFarmer = 0;
let verificabarco = 0;

boat.style.display = "none";

sheep.id = "sheep";
sheep.className = "items";
sheep.src = "./images/ovelha.png";

wlf.id = "wolf";
wlf.className = "items";
wlf.src = "./images/lobo.png";

farmer.id = "farmer";
farmer.className = "items";
farmer.src = "./images/arthur.png";

lett.id = "lettuce";
lett.className = "items";
lett.src = "./images/alface.png";

function printItems (){
    left.appendChild(sheep);
    left.appendChild(wlf);
    left.appendChild(farmer);
    left.appendChild(lett);
    boat.style.display = "";

}

btn.addEventListener('click', ()=>{
    let screen = document.querySelector('#start');
    screen.style.display = "none";
    printItems();
})

boat.addEventListener('click', () =>{
    if(verificaFarmer == 1){   
        if(river.style.justifyContent == "flex-start"){
            river.style.justifyContent = "flex-end";
        }else{
            river.style.justifyContent = "flex-start";
        }
    }else{
        window.alert("O fazendeiro precisa entrar no barco para remar!");
    }
})

function movement (item, id){
   
    if(river.style.justifyContent == 'flex-start'){
        if(left.querySelector(`#${id}`) != null && verificabarco == 0){
            left.removeChild(item);
            river.appendChild(item);
            if(item.id == farmer.id){
                verificaFarmer++;
            }
            if(item.id != farmer.id){
                verificabarco++;
            }
        }else if(river.querySelector(`#${id}`) != null){
            river.removeChild(item);
            left.appendChild(item);
            if(item.id == farmer.id){
                verificaFarmer--;
            }
            if(item.id != farmer.id){
                verificabarco--;
            }
        }else{
            window.alert("O barco está cheio.");
        }   
    }else{
        if(right.querySelector(`#${id}`) != null && verificabarco == 0){
            right.removeChild(item);
            river.appendChild(item);
            if(item.id == farmer.id){
                verificaFarmer++;
            }
            if(item.id != farmer.id){
                verificabarco++;
            }
        }else if(river.querySelector(`#${id}`) != null){
            river.removeChild(item);
            right.appendChild(item);
            if(item.id == farmer.id){
                verificaFarmer--;
            }
            if(item.id != farmer.id){
                verificabarco--;
            }
        }else{
            window.alert("O barco está cheio.");
        }   
    }
}

farmer.addEventListener('click', ()=>{
    movement(farmer, farmer.id);
    console.log(verificaFarmer);
})

wlf.addEventListener('click', ()=>{
    if(verificaFarmer == 1){
        movement(wlf, wlf.id);
    } else{
       window.alert("O Fazendeiro precisa estar no barco")
    }
})

sheep.addEventListener('click', ()=>{
    if(verificaFarmer == 1){
        movement(sheep, sheep.id);
    }else{
        window.alert("O Fazendeiro precisa estar no barco");
    }
})

lett.addEventListener('click', ()=>{
    if(verificaFarmer == 1){
        movement(lett, lett.id);
    }else{
        window.alert("O Fazendeiro precisa estar no barco");
    }
})

document.body.addEventListener('click', ()=>{
    if(boat.style.display == "flex-start"){
        if(right.querySelector('#wolf') != null && right.querySelector('#sheep') != null && right.querySelector('#lettuce') == null){
            loss.display.style = "block";
        }else if(right.querySelector("#sheep") !=null && right.querySelector("#lettuce") !=null && right.querySelector("#wolf") == null){
            loss.display.style = "block";
        }
    }else {
        if(left.querySelector("#wolf") != null && left.querySelector("#sheep") != null && left.querySelector("#lettuce") == null){
            loss.display.style = "block";
        }else if(left.querySelector("#sheep") != null && left.querySelector("#lettuce") != null && left.querySelector("#wolf") == null){
            loss.display.style = "block";
        }
    }
})

document.body.addEventListener('click', ()=>{
    if(right.querySelector("#sheep") != null && right.querySelector("#lettuce") != null && right.querySelector("#wolf") != null){
        boat.style.display = 'none'
        win.style.display="block";
    }
})

resbtn.addEventListener('click', ()=>{
    location.reload();
})