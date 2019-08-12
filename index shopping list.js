var lista=[];
var idxEditare = -1;

function draw(){
  var str="";
  for(var i=0;i<lista.length;i++){
    str+=`
     <tr class="table-row">
     <td id="listItems" class="${lista[i].mark?"strike":""}">${lista[i].itemInput}</td>         
     
    <td>
      <button onclick="strikeLine(${i});" class="mark">Marked as buyed</button>
  </td>

 </tr>
    `; 
   // adaug clasa strike pe td si apeland functia strike adaug cva pe tr
  }
  document.querySelector("#lista-cuparaturi tbody").innerHTML=str;


}


function adauga(form, event){
  
  event.preventDefault();
if(document.querySelector(".add-item").value === ''){
  document.querySelector(".add-item").placeholder = "Adauga aliment..";
}else{
  var obj = {
    };

    obj.itemInput = document.querySelector(".add-item").value; 
    if(idxEditare===-1){
    
    lista.push(obj);
    
    }else{
    
    lista[idxEditare] = obj;
    
    idxEditare = -1;
    }
    
  }
  draw();
  document.querySelector("#lista-cuparaturi").classList.remove("hidden");
  document.querySelector("#formular").reset();
//add reset form
}

function sortAsc(){
  lista.sort(function(a,b){
      if(a.itemInput>b.itemInput){
        return 1;
      } else if(a.itemInput<b.itemInput){
        return -1;
      } else{
        return 0;
      }
    });
    draw();
}

function sortDesc(){
  lista.sort(function(a,b){
      if(a.itemInput<b.itemInput){
        return 1;
      } else if(a.itemInput>b.itemInput){
        return -1;
      } else{
        return 0;
      }
    });
    draw();
}

/*function createTHead(text, event) {

 event.preventDefault();
 
 var table = document.querySelector('.lista-cuparaturi');
 var row = table.insertRow(0);

 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1);

 cell1.innerHTML = "<b>Item Description</b>";
 cell2.innerHTML = "<b>Action</b>";
 draw();
}*/

function strikeLine(idxEditare){
  lista[idxEditare].mark=true;
draw();
}


 

 //item = document.querySelectorAll('#item-aliment');

 //item.classList = 'strike';

// modific elementul din lista de pe pozitia i


