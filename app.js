alert("Boas Vindas ao jogo do mundo secreto");
let numeroSecreto = 15;
console.log(`O numero secreto é ${numeroSecreto}`);
let chute = prompt("Escolha um número entre 1 a 30");
console.log(`O chute do usuario foi ${chute}`);

// fazer a comparação das variaveis
if (numeroSecreto == chute) {
    alert(`Parabéns você descobriu o número secreto ${numeroSecreto}`);
    console.log('Parabéns você descobriu o número secreto');
}
 else {
    alert('Você Errou o numero secreto era '+ numeroSecreto);
    console.log('Você Errou o numero secreto');
}