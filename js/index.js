export function GetTrendingMovies() {
    const trendingActive = document.querySelector('#trending');
    activeClass(trendingActive)
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayMovies(data.results));
}

export function GetPopulaMovies(){
    const popularActive = document.querySelector('#popular');
    activeClass(popularActive)
    fetch('http://api.themoviedb.org/3/movie/popular/?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayMovies(data.results));
}
export function getUpComingMovies(){
    const upComingActive = document.querySelector('#up-coming');
    activeClass(upComingActive)
    fetch('https://api.themoviedb.org/3/movie/upcoming/?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayMovies(data.results));
}
export function getTopRatedMovies(){
    const topRatedActive = document.querySelector('#top-rated');
    activeClass(topRatedActive)
    fetch('https://api.themoviedb.org/3/movie/top_rated/?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayMovies(data.results));
}
export function getTvShows(){
    const tvShowsActive = document.querySelector('#latest-movies');
    activeClass(tvShowsActive)
    fetch('https://api.themoviedb.org/3/tv/popular/?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayTvShows(data.results));
}


export function backDrop(movie) {
    document.querySelector('.contents-box').innerHTML = " ";
    const backgroundImg = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    const descriptions = movie.overview;
    const backPoster = `<div><img src ="${backgroundImg}"> <p>${descriptions}</p></div>`;
    document.querySelector('.movie-poster').innerHTML = backPoster;
    document.querySelector('.movie-poster').style.display = "block";
}

function displayMovies(movies) {
    console.log(movies);
    document.querySelector('.movie-poster').style.display = "none";
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

function displayTvShows(movies) {
    console.log(movies);
    document.querySelector('.movie-poster').style.display = "none";
    document.querySelector('.contents-box').innerHTML = " ";
    movies.map(item => {
        const movieTitle = item.name;
        const average = item.vote_average
        const poster = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
        const movie = document.createElement('li');
        movie.classList.add('movie-box');
        movie.innerHTML = `<img src="${poster}"><div class="overlay"></div> <h4 class="movie-title">${movieTitle}</h4> <p class="average">${average}</p>`;
        movie.addEventListener('click', () => backDrop(item));
        document.querySelector('.contents-box').appendChild(movie);
    });
}

function activeClass(link){
    const activeClass = document.querySelectorAll('.active-class');
    activeClass.forEach(activeClass => {
        activeClass.classList.remove('active');
    });

    link.classList.add('active')
}




