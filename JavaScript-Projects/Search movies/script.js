const APIURL= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH= "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI= "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moviebox= document.querySelector("#movie-box");
const getMovies=async(url)=>{
const response= await fetch(url);
const data= await response.json();
showMovies(data.results);
// console.log(data.results);
};


const showMovies= (data)=>{
    moviebox.innerHTML="";
data.forEach(
    (element) => {
    console.log(element);
    const box=document.createElement("div");
    box.classList.add("box");
    box.innerHTML=`
    <img src="${IMGPATH+element.poster_path}" alt="" />
    <div class="overlay">
        <div class="title"> 
            <h2> ${element.original_title} </h2>
            <span>${element.vote_average}<span>
        </div>
        <h3>Overview:</h3>
        <p> 
            ${element.overview}
        </p>
     </div>
    `;
   moviebox.appendChild(box); 
}
);
}


document.querySelector("#search").addEventListener("keyup", (event)=>{
    if(event.target.value!=""){
        getMovies(SEARCHAPI+event.target.value);
    }else{
        getMovies(APIURL);
    }
})
getMovies(APIURL);