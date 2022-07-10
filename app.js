// const API_Key = 'd80cb21a';
const API_Key = '1e091c22';

// Fetch elements from DOM
const searchEl = document.getElementById('movie');
const searchBtn = document.querySelector('.search-btn');
const displayEl = document.getElementById('display');


// Add event listener on search button
searchBtn.addEventListener('click', (e) => {
    const searchTerm = searchEl.value;
    // console.log(searchTerm);

    // Create URL
    const url = `http://www.omdbapi.com/?apikey=${API_Key}&s=${searchTerm}`;

    // send API request to OMDB api using the above search term
    fetch(url) // Returns promise
        .then(res => res.json())
        .then(data => { // Resolving using .then methond again
            console.log(data);
            const moviesData = data.Search;
            displayEl.innerHTML = '';

            for(let i = 0; i < 3; i++){
                const { imdbID } = moviesData[i];

                // Plot, genre, remaining info
                // get using imdbID
                // make another request to OMDB API
                const movieUrl = `http://www.omdbapi.com/?apikey=${API_Key}&i=${imdbID}`;

                fetch(movieUrl)
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        const { Poster, Title, imdbRating, Runtime, Genre, Plot } = data;

                        displayEl.innerHTML += `
                            <div class="movie-item">
                                <img src="${Poster}" alt="Movie Image"/>
                                <div class="info-right">
                                    <div class="info--first">
                                        <p>${Title}</p>
                                        <i class="fa-solid fa-star"></i>
                                        <span>${imdbRating}</span>
                                    </div>
                                    <div class="info--second">
                                        <small>${Runtime}</small>
                                        <small>${Genre}</small>
                                        <span>
                                            <i class="fa fa-plus" onclick=addMoviesToLocalStorage('${imdbID.trim()}')></i>Watchlist
                                        </span>
                                    </div>
                                    <p class="info--third">${Plot}</p>
                                </div>
                            </div>
                            <hr/>
                        `;
                    })
            }
        })
})


function addMoviesToLocalStorage(id){
    console.log('Watchlist added');
    let movieIDs;
    if(localStorage.getItem('movieIDs') === null){
        movieIDs = [];
    } else{
        movieIDs = JSON.parse(localStorage.getItem('movieIDs'));
    }
    movieIDs.push(id);

    localStorage.setItem('movieIDs', JSON.stringify(movieIDs));
}










































// // Fetch elements from DOM
// const searchEl = document.getElementById('movie');
// const searchBtn = document.getElementById('search-btn');
// const displayEl = document.getElementById('display');

// // const API_Key = 'd80cb21a';
// const API_Key = '1e091c22';

// // Add event listener to search input box
// // searchEl.addEventListener('input', function(e){
// //     const inputText = e.target.value;
// //     console.log(inputText);
// // })


// searchBtn.addEventListener('click', function(e){
//     const searchTerm = searchEl.value;
//     const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_Key}`;
    
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data);
//             const moviesData = data.Search;

//             for(let i=0; i < 2; i++){
//                 const { Title, Year, imdbID, Poster } = moviesData[i];
//                 const movieUrl = `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_Key}`;

//                 fetch(movieUrl)
//                     .then(res => res.json())
//                     .then(data => {
//                         const { Poster, Title, imdbRating, Runtime, Genre, Plot } = data; 
//                         displayEl.innerHTML += `
//                             <div class="movie-item">
//                                 <img src="${Poster}" />
//                                 <div class="right">
//                                     <h4>${Title} <span>${imdbRating}</span></h4>
//                                     <div class="info">
//                                         <span>${Runtime}</span>
//                                         <span>${Genre}</span>
//                                         <span><i class="fa fa-plus" style="font-size:20px;color:white;background:black;border-radius:50%"></i>Watchlist</span>
//                                     </div>
//                                     <p>${Year}</p>
//                                     <p>${Plot}</p>
//                                 </div>
//                             </div>
//                             <hr />
//                         `;
//                     })
//             }

//             // moviesData.forEach(movie => {
//             //     const { Title, Year, imdbID, Poster } = movie;

//             //     const movieUrl = `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_Key}`;
//             //     // const div = document.createElement('div');
//             //     // div.className = "movie-item";
//             //     displayEl.innerHTML += `
//             //         <div class="movie-item">
//             //             <img src="${Poster}" />
//             //             <div class="right">
//             //                 <h4>${Title}</h4>
//             //                 <p>${Year}</p>
//             //             </div>
//             //         </div>
//             //         <hr />
//             //     `;
               
//             //     displayEl.appendChild(div);
//             //     displayEl.innerHTML += div;
//             // });
//         })

//     // console.log(searchEl.value);
// })


// d80cb21a - API Key



