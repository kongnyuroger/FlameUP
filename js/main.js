import { GetTrendingMovies } from "./index.js";
import {GetPopulaMovies} from "./index.js"
import {getUpComingMovies} from "./index.js"
import {getTvShows} from "./index.js"
import {getTopRatedMovies} from "./index.js"
import {searchMovies} from "./index.js"
GetTrendingMovies()
document.querySelector('#trending').addEventListener('click', GetTrendingMovies); 
document.querySelector('#popular').addEventListener('click', GetPopulaMovies);
document.querySelector('#up-coming').addEventListener('click', getUpComingMovies);
document.querySelector('#top-rated').addEventListener('click', getTopRatedMovies);
document.querySelector('#latest-movies').addEventListener('click', getTvShows);

// Search functionality
const searchInput = document.querySelector('search-box input');
let debounceTimer;

searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const query = searchInput.value.trim();
        if (query) {
            searchMovies(query);
        } else {
            GetTrendingMovies();
        }
    }, 400);
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        clearTimeout(debounceTimer);
        const query = searchInput.value.trim();
        if (query) {
            searchMovies(query);
        } else {
            GetTrendingMovies();
        }
    }
});
