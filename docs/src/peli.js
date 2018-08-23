//console.log("esta conectado");
//let pelisArray=['Star Wars','Game of Thrones','Harry Potter'];

const btn1 = document.getElementById("sw");
const btn2 = document.getElementById("gG");
const btn3 = document.getElementById("gT");

btn1.addEventListener("click",
getData1= () => {
    fetch('https://www.omdbapi.com/?t=%27StarWars%27&apikey=7de876e1')
        .then(res => res.json())
        .then(res => {
            drawPeli(res);
            drawImage(res);
        })
        .catch(error => {
            console.log('Error', error);
        })
});

btn2.addEventListener("click",
getData2 = () => {
    fetch('https://www.omdbapi.com/?t=%27Guardians%20of%20the%20Galaxy%27&apikey=7de876e1')
        .then(res => res.json())
        .then(res => {
            drawPeli(res);
            drawImage(res);
        })
        .catch(error => {
            console.log('Error', error);
        })
})


btn3.addEventListener("click",
getData3 = () => {
    fetch('http://www.omdbapi.com/?t=Game%20of%20Thrones&apikey=7de876e1')
       .then(res => res.json())
        .then(res => {
            drawPeli(res);
            drawImage(res);
        })
        .catch(error => {
            console.log('Error', error);
        })
})

const drawPeli= (res)=>{

let title = res.Title;
genre = res.Genre;
plot = res.Plot;
var arrGenres = genre.split(', ');
console.log(arrGenres);

if (title !== 'N/A') {
 $('.container-title').append('<p>' + title + '</p>');
 
 for (var i = 0; i < arrGenres.length; i++) {
 if (arrGenres[i] === 'Comedy') {
   console.log('Comedia');
   $('.container-genre').append('<p>' + "Comedia"+ '</p>');
 } else if (arrGenres[i] === 'Drama') {
   console.log('Drama');
   $('.container-genre').append('<p>' + "Drama"+ '</p>');
 } else if (arrGenres[i] === 'Action') {
   console.log('Acción');
   $('.container-genre').append('<p>' + "Accion"+ '</p>');
 }
}

}

};

drawImage = (res) =>{
	var image = res.Poster;
	if (image !== "N/A"){
		$('.container-img').attr("src", image);
	}
	
}