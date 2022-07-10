export function GetTrendingMovies() {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayMovies(data.results));
}

export function GetPopulaMovies(){
    fetch('https://api.themoviedb.org/3/movie/popular/?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayMovies(data.results));
}
export function getUpComingMovies(){
    fetch('https://api.themoviedb.org/3/movie/upcoming/?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayMovies(data.results));
}
export function getTopRatedMovies(){
    fetch('https://api.themoviedb.org/3/movie/top_rated/?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayMovies(data.results));
}
export function getLatestMovies(){
    fetch('https://api.themoviedb.org/3/movie/latest/?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayMovies(data.results));
}


export function backDrop(movie) {
    console.log('are you working')
    const backgroundImg = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    const descriptions = movie.overview;
    const backPoster = `<div><img src ="${backgroundImg}"> <p>${descriptions}</p></div>`;
    document.querySelector('.movie-poster').innerHTML = backPoster;
    document.querySelector('.movie-poster').style.display = "block";
}

function displayMovies(movies) {
    document.querySelector('.contents-box').innerHTML = " ";
    movies.map(item => {
        const movieTitle = item.title;
        const average = item.vote_average
        const poster = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
        const movie = document.createElement('li');
        movie.classList.add('movie-box');
        movie.innerHTML = `<img src="${poster}"><div class="overlay"></div> <h4 class="movie-title">${movieTitle}</h4> <p class="average">${average}</p>`;
        movie.addEventListener('click', () => backDrop(item));
        document.querySelector('.contents-box').appendChild(movie);
    });

}





