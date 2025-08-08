function executarPush() {
  const array = ['🍎', '🍌'];
  array.push("🍇"); // add no final do array
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop(); // remove o ultimo elemento da lista
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift(); // remove o primeiro elemento da lista
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift('🍓'); // add um elemento ao inicio da lista
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes('🥝'); // retorna true or false se o item requisitado esta dentro do array
  document.getElementById('resultado-includes').textContent = resultado;
}

function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  array.reverse(); // inverte a ordem do array
  const resultado = array;
  document.getElementById('resultado-reverse').textContent = resultado;
}

function executarSort() {
  const array = [3, 1, 4, 2, 11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  const resultado = array.sort((a,b) => a - b); // função que compara cada elemento e os ordena baseado no resultado
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort().reverse();
  document.getElementById('resultado-sort2').textContent = resultado2;
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array;
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.forEach(Item => console.log(Item));
  document.getElementById('resultado-foreach').textContent = resultado;
}

function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map(Item => `✅${Item}`);
  document.getElementById('resultado-map').textContent = resultado;
}

 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map((Item, index) => {
      return `<h1> Item ${index + 1} em Promoção!</h1>
      <p> ${Item} </p>`
    });
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter(Item => Item != '🍎'); // retorna 
  document.getElementById('resultado-filter').textContent = resultado;
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find(Item => Item === '🍇');
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = 'Resultado da operação findIndex';
  document.getElementById('resultado-findIndex').textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((total, valor) => total + valor , 0); // soma um elemento ao proximo da lista e entao soma o resultado ao elemento seguinte e assim por diante
  document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = jogos.includes('e').sort();
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}



// // Declarar um array
// let dados = ["Guilherme", 27, "SP"];
// console.log(dados[2])
// // Atualizar o valor de um item do array
// dados[2] = "São Paulo"
// //como saber o length de um array
// dados.length


// const ordernar = (a,b) => a - b;

// mesma coisa
// // const mini = a => a - 2;

// // function mini(a){
// //   return a -2
// // }