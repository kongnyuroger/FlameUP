import { GetTrendingMovies } from "./index.js";
import {GetPopulaMovies} from "./index.js"
import {getUpComingMovies} from "./index.js"
import {getTvShows} from "./index.js"
import {getTopRatedMovies} from "./index.js"
GetTrendingMovies()
document.querySelector('#trending').addEventListener('click', GetTrendingMovies); 
document.querySelector('#popular').addEventListener('click', GetPopulaMovies);
document.querySelector('#up-coming').addEventListener('click', getUpComingMovies);
document.querySelector('#top-rated').addEventListener('click', getTopRatedMovies);
document.querySelector('#latest-movies').addEventListener('click', getTvShows);
    



