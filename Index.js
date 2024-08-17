const Lutador1={
    nome: "Goku",
    altura: 1.75,
    LutouNoTorneioDoPoder: true,
    MelhoresTransformações:["Saiyajin Blue","Instinto Superior"]
    };
    
    const Lutador2 ={
    nome: "Vegeta",
    altura: 1.64,
    LutouNoTorneioDoPoder: true,
    MelhoresTransformações:["Deus Saiyajin"," Blue Evolution"]
    };
    
    const Lutador3={
    nome: "Freeza",
    altura: 1.58,
    LutouNoTorneioDoPoder: true,
    MelhoresTransformações:["Black Freeza","Freeza Dourado"]
    };

    const Lutador4={
    nome: "Gogeta",
    altura: 1.75,
    LutouNoTorneioDoPoder: false,
    MelhoresTransformações:["Deus Saiyajin","Saiyajin Blue"]
    };
     
    const Lutador5={
    nome: "Jiren",
    altura: 1.90,
    LutouNoTorneioDoPoder: true,
    MelhoresTransformações:["Forma Insuperável"]
    };
  
    
    const MediaAltura=(Lutador1.altura+Lutador2.altura+Lutador3.altura)/3; 
    console.log(`A altura média dos Lutadores são ${MediaAltura}`);
    
    
    console.log(`Todos os Lutadores da lista participaram do torneio do poder? ${Lutador1.LutouNoTorneioDoPoder&&Lutador2.LutouNoTorneioDoPoder&&Lutador3.LutouNoTorneioDoPoder&&Lutador4.LutouNoTorneioDoPoder&&Lutador5.LutouNoTorneioDoPoder}`);


    const TodosOsLutadores = []

if(Lutador1.LutouNoTorneioDoPoder){
     TodosOsLutadores.push(Lutador1)
 }else {(console.log(`O Participante ${Lutador1.nome} não Participou do torneio do poder!`))
     TodosOsLutadores.push(Lutador1)
 };

if (Lutador2.LutouNoTorneioDoPoder){
     TodosOsLutadores.push(Lutador2)
 }else {(console.log(`O Participante ${Lutador2.nome} não Participou do torneio do poder!`))
     TodosOsLutadores.push(Lutador2)
 };

if(Lutador3.LutouNoTorneioDoPoder){
     TodosOsLutadores.push(Lutador3)
 }else {(console.log(`O Participante ${Lutador3.nome} não Participou do torneio do poder!`))
     TodosOsLutadores.push(Lutador3)
};

if(Lutador4.LutouNoTorneioDoPoder){
    TodosOsLutadores.push(Lutador4)
}else {(console.log(`O Participante ${Lutador4.nome} não Participou do torneio do poder!`))
    TodosOsLutadores.push(Lutador4)
};

if(Lutador5.LutouNoTorneioDoPoder){
    TodosOsLutadores.push(Lutador5)
}else {(console.log(`O Participante ${Lutador5.nome} não Participou do torneio do poder!`))
    TodosOsLutadores.push(Lutador5)
};
 
console.log(TodosOsLutadores);



let button=document.querySelector("#button")
let input=document.querySelector("#input")
let card1=document.querySelector("#card1")
let card2=document.querySelector("#card2")
let card3=document.querySelector("#card3")
let card4=document.querySelector("#card4")
let card5=document.querySelector("#card5")
let refresh=document.querySelector("#refresh")

        button.addEventListener("click", function(){
            const valorDigitado=input.value;
            if(valorDigitado === "goku" || valorDigitado === "GOKU"){
                card2.style.display="none"
                card3.style.display="none"
                card4.style.display="none"
                card5.style.display="none"
                card1.style.display="block"
            }else if(valorDigitado === "vegeta" || valorDigitado === "Vegeta"){
                card1.style.display="none"
                card3.style.display="none"
                card4.style.display="none"
                card5.style.display="none"
                card2.style.display="block"
            }else if(valorDigitado === "freeza" || valorDigitado === "FREEZA"){
                card2.style.display="none"
                card1.style.display="none"
                card4.style.display="none"
                card5.style.display="none"
                card3.style.display="block"
            }else if(valorDigitado === "gogeta" || valorDigitado === "GOGETA"){
                card2.style.display="none"
                card3.style.display="none"
                card1.style.display="none"
                card5.style.display="none"
                card4.style.display="block"
            }else if(valorDigitado === "jiren" || valorDigitado === "JIREN"){
                card2.style.display="none"
                card3.style.display="none"
                card4.style.display="none"
                card1.style.display="none"
                card5.style.display="block"
        } else{alert("Personagem não encontrado")}
        })

        refresh.addEventListener("click", function(){
            card1.style.display="block"
            card2.style.display="block"
            card3.style.display="block"
            card4.style.display="block"
            card5.style.display="block"

    })












