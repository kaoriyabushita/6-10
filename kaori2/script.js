

/*let temperatura = 30
let resultado = ""

if(temperatura < 0) {
    resultado = "Alaska"
} else if (temperatura < 10) {
    resultado = "Rio Grande do Sul"
}



console.log('A temperatura é &{temperatura} e o resulatdo é y')*/


//2° codigo
/*
let pontos = prompt("Quantos pontos?")
let anosDeCliente = prompt("quantos anos de clinte?")
let resultado

if(pontos >=0 && pontos <= 99){
   resultado= "bronze"
}else if (pontos >=99 && pontos <= 499){
resultado= "prata"
}else if (pontos >=500 && pontos <=999){
   resultado="ouro"
}else if (pontos >=1000 && anosDeCliente > 1){
   resultado= "diamante"
}
alert (resultado)
*/

// for (let contador=0; contador<10; contador++) {
//     console.log("Seja bem-vindo Fulano" , contador)
// }

// let contagem=0
// while (contagem<100) {
//     console.log("Kaori")
//     contagem++
// }

// for (let i=1; i<=10; i++) {
//     console.log(i) 
// }

// //contagem decrescente e tabuada
 for (let i=5; i>=1; i--) {
    console.log(i)
 }

for (let j = 1; j <= 10; j++) {
    console.log("-=-=-=-=-=-=-=-=-=-")
    for (let i = 1; i <= 10; i++) {
        console.log(`${j} X  ${i} = ${j * i}`)

    }
}

//  //filtrando com continue
  for (let i=1; i<=30; i++) {
      if (i % 3 !==0 ) continue;
      console.log (i);
  }

//tabuada completa+desafio extra
for (let i=1; i<=100; i++) {
    if (i % 3 !==0) continue;
    console.log (i);
}