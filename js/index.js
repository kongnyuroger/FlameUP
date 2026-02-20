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
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayMovies(data.results));
}
export function getUpComingMovies(){
    const upComingActive = document.querySelector('#up-coming');
    activeClass(upComingActive)
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayMovies(data.results));
}
export function getTopRatedMovies(){
    const topRatedActive = document.querySelector('#top-rated');
    activeClass(topRatedActive)
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
        return response.json()
    }).then((data) => displayMovies(data.results));
}
export function getTvShows(){
    const tvShowsActive = document.querySelector('#latest-movies');
    activeClass(tvShowsActive)
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
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

export function searchMovies(query) {
    if (!query.trim()) return;
    // Clear active sidebar highlight while searching
    const allActive = document.querySelectorAll('.active-class');
    allActive.forEach(el => el.classList.remove('active'));

    fetch(`https://api.themoviedb.org/3/search/multi?api_key=f72e9b5ce93c4e6338088c039202efe7&query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const results = data.results.filter(item => item.media_type === 'movie' || item.media_type === 'tv');
            if (results.length === 0) {
                showNoResults(query);
            } else {
                displayResults(results);
            }
        })
        .catch(() => showNoResults(query));
}

function displayResults(items) {
    document.querySelector('.movie-poster').style.display = 'none';
    document.querySelector('.contents-box').innerHTML = '';
    items.forEach(item => {
        const title = item.title || item.name;
        const average = item.vote_average;
        const poster = item.poster_path
            ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
            : 'https://via.placeholder.com/176x272?text=No+Image';
        const card = document.createElement('li');
        card.classList.add('movie-box');
        card.innerHTML = `<img src="${poster}"><div class="overlay"></div> <h4 class="movie-title">${title}</h4> <p class="average">${average}</p>`;
        card.addEventListener('click', () => backDrop(item));
        document.querySelector('.contents-box').appendChild(card);
    });
}

function showNoResults(query) {
    document.querySelector('.movie-poster').style.display = 'none';
    document.querySelector('.contents-box').innerHTML = `<p class="no-results">No results found for "<strong>${query}</strong>"</p>`;
}

function activeClass(link){
    const activeClass = document.querySelectorAll('.active-class');
    activeClass.forEach(activeClass => {
        activeClass.classList.remove('active');
    });

    link.classList.add('active')
}




