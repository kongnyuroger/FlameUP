export function movieApi () {
    console.log('Arenyou working')
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=f72e9b5ce93c4e6338088c039202efe7').then((response) => {
       return response.json()
    }).then((data) => {
        console.log(data);
        console.log(data.budget)
    })
}