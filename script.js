const api= "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=180"


var movies = document.getElementById("movies");
const inputSearch = document.querySelector("input[type='search']");


let items = [];
console.log(items, "items")


inputSearch.oninput = () => {   
   movies.innerHTML = "";

    items.filter((item) =>item.movie.toLowerCase().includes(inputSearch.value.toLowerCase()))
        .forEach((item) => addHTML(item));

};


function addHTML(item){
    console.log(item)

    const div = document.createElement("div");
    var movie= `
                <div id="movie">
                    <img src="${item.poster}" alt="imagem do filme">
                
                    
                </div>
                `

    div.innerHTML = movie;
    movies.append(div);
    
}




window.onload= function(){
    fetch(api)
        .then(data =>data.json())
        .then(data => {
            for(let index =0; index < data.length; index ++){
                var movie= `
                <div id="movie">
                    <img src="${data[index].poster}" alt="imagem do filme">
                
                    
                </div>
                `
                items.push(data[index])
                document.getElementById("movies").innerHTML += movie;
            }

        })
}


