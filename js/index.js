export function trendingMovies () {
    console.log('Arenyou working')
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
       return response.json()
    }).then((data) => {
        const list = data.results;
        list.map((item) => {
            const movieTitle = item.title;
            const average = item.vote_average
            const poster = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
            const movie = `<li class="movie-box"><img src="${poster}"><div class="overlay"></div> <h4 class="movie-title">${movieTitle}</h4> <p class="average">${average}</p> </li>`
            document.querySelector('.contents-box').innerHTML += movie
        })
  
})
}

