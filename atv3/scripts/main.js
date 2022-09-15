var button = document.querySelector('#b');

button.addEventListener('click',() =>{
    var l1 = document.querySelector('#l1');
    var l2 = document.querySelector('#l2');
    var l3 = document.querySelector('#l3');
    var nome = document.querySelector('#nome');
    var idade = document.querySelector('#idade');
    var listitem = document.createElement('li');

    listitem.textContent = `${nome.value}, ${idade.value}`
    
    if(nome.value != "" && idade.value != ""){
        if(idade.value <= 18){
            l1.appendChild(listitem);
        }else if((idade.value <= 40) && (idade.value > 18)){
            l2.appendChild(listitem);
        }else{
            l3.appendChild(listitem);
        }
    }
    nome.value= "";
    idade.value= "";
    nome.focus();
})
