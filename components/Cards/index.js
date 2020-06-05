// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function articleCreator(){
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
            let articleData = response.data.articles;
            for (topic in articleData){
                for (art in articleData[topic]){
                    document.body.append(cardCreator(articleData[topic][art]));
                }
            }
        })
        .catch(error => {
            console.log('Something went wrong', error)
        })
        .finally(() => {
            console.log('done')
        })
}

articleCreator();

 function cardCreator(info){
     let card = document.createElement('div');
     card.classList.add('card');

     let head = document.createElement('div');
     head.classList.add('headline');
     head.textContent = info.headline;
     card.appendChild(head);

     let auth = document.createElement('div');
     auth.classList.add('author');

     let imgCont = document.createElement('div');
     imgCont.classList.add('img-container');

     let image = document.createElement('img');
     image.src = info.authorPhoto;
     imgCont.appendChild(image);

     let authName = document.createElement('span');
     authName.textContent = `By ${info.authorName}`;

     auth.appendChild(image);
     auth.appendChild(imgCont);
     card.appendChild(auth);

     return card;
 }