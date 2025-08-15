// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        image: "https://placedog.net/150?random=3",
        date: "12/10/2023 12:00:00"
    }
];


// const pessoa = {
//     nome: "Guilherme",
//     idade: 27,
//     Tags: [],
//     "Jogos Zerados": ["Fall Guys", "The Witcher"],
//     isAdmin: true
// }

// console.log(pessoa.nome)
// console.log(pessoa["Jogos Zerados"])

window.onload = function(){
    mostrarPosts();

    document.querySelector("#postForm").addEventListener("submit", addPost)
}


//CRUD

// C.reate
function addPost(infosDoEvento){
    infosDoEvento.preventDefault();

    const textoInput = document.querySelector("#postText").value;
    const categoryInput = document.querySelector("#postCategory").value
    const imgInput = document.querySelector("#postImage").value

    const novoPost = {
        text: textoInput,
        category: categoryInput,
        image: imgInput,
        date: new Date().toLocaleString()
    }

    posts.unshift(novoPost)

    document.querySelector("#postForm").reset()

    mostrarPosts()
}
// R.ead
function mostrarPosts(){
    //Pegando o elemento do HTML onde os tweets serão inseridos
    const listaPosts = document.querySelector("#postList");
    listaPosts.innerHTML = "";
    
    //Passando pela lista criando um elemento
    posts.forEach( pegaItem => {
        const cardPost = document.createElement("div");
        cardPost.classList.add("card");

        cardPost.innerHTML = `
            <h2>${pegaItem.text}</h2>
            <img src="${pegaItem.image}"/>
            <p>Categoria: ${pegaItem.category}</p>
            <p>Data e Hora: ${pegaItem.date}</p>

            <button>Editar</button>
            <button>Apagar</button>
        `
        listaPosts.append(cardPost);
    })
}
// U.padte
function editarPosts(){}
// D.elete
function deletarPosts(){}