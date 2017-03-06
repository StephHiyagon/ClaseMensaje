var mensajes = document.getElementsByClassName('mensaje');
var numMs = mensajes.length;
console.log(numMs);

if( numMs >= 4){
  alert("son muchos!!!");
}
else if (numMs >=2 ) {
  alert("No esta mal!!!");
}
else{
  alert("Es muy poco!!!");
}

var escrito=0;
for (var i=0; i< numMs;i++){
  if(mensajes[i].innerHTML == ""){
    escrito += 0;
  } else{
    escrito += 1;
  }
}

console.log(escrito);
