// Milestone 1 -
// Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: - id del post, numero progressivo da 1 a n - nome autore, - foto autore, - data in formato americano (mm-gg-yyyy), - testo del post, - immagine (non tutti i post devono avere una immagine), - numero di likes. Non è necessario creare date casualiPer le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// [Qui come abbiam visto in realtà vi arriva gratis, ma dategli un occhio per capirlo e vedete se tutto combacia e torna :innocente:]

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=28"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        liked: true, 
        "created": "2021-03-05"
    }
];

console.log(posts);

// Andiamo a collegare il "container".

const container = document.getElementById("container");

console.log(container);

// Milestone 2 -
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.


// Andiamo a creare il nostro ciclo "foreach" per richiamare ogni singolo elemento.

posts.forEach((element, index) => {

    let nuovaCarta = [
    
    `
    <div id= index${index} class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.author.image}" alt="image ${index}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${element.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src="${element.media}" alt="image ${index}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="${index + 1}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${index + 1}" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
    ]

    // Stampo la "nuovaCarta" nel "div.elements-container".
    container.innerHTML += nuovaCarta;
}); 

// Milestone 3 -
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// Vado a dichiarare la variabile "liked" che ho nell'oggeetto del post.

let liked = true;

// Vado a creare l'array per il "conteggioMiPiace".

let arreyContMiPiace = [posts.id];

// Andiamo a collegare il "like-button" per tutti gli elementi.

let btnMiPiace = document.querySelectorAll('.like-button');

// Vado a settare il click a 0.

let click = 0;

let miPiace = 0;

// Vado a creare un ciclo "for" che percorrerà il ".posts".

for (let i = 0; i < posts.length; i++) {

    // Vado a creare l'evento al "click".

    btnMiPiace[i].addEventListener("click", function () {
        
        // Se il bottone non è cliccato vado a cliccarlo.
        if (click === 0) {
          click = 1;
          liked = true;
          console.log(liked);
        
          // Vado a richiamare l'id "like-counter" e incremento  e stampo l'innerHTML. 
          document.getElementById(`like-counter-${i + 1}`).innerHTML = `${posts[i].likes + 1}`;
          arreyContMiPiace.push(`like-counter-${i}`);
          console.log(arreyContMiPiace);
          
          //  Aggiungo la classe ".like-button--liked" per il colore. 
          btnMiPiace[i].classList.add("like-button--liked");
          
          // Vado a diselezionare il bottone.
        } else {
          click = 0;
          liked = false;
          console.log(liked);

          // Vado a richiamare l'id "like-counter" e decremento  e stampo l'innerHTML. 
          document.getElementById(`like-counter-${i + 1}`).innerHTML = `${posts[i].likes - 0}`;
          arreyContMiPiace.push(`like-counter-${i}`);
          console.log(arreyContMiPiace);
          
          //Vado a diselezionare il bottone.   
          btnMiPiace[i].classList.remove("like-button--liked");
        }
  });
}



