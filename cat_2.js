  fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=comedy&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  
  .then(function(value) {
	  
	const film1_url = value.results[1].url
	const film2_url = value.results[2].url
	const film3_url = value.results[3].url
	const film4_url = value.results[4].url
	
	fetch(film1_url)
	  .then(function(res) {
		if (res.ok) {
		  return res.json();
		}
	  })
	  
	  .then(function(value) {
		  
		const image = document.getElementById("cat2_film_1_img")
		image.src = value.image_url;
		image.width = 250;
		image.height = 310;
		image.align = "center";
		
		document.getElementById("cat2_film_1_img").addEventListener("click",function(){
			document.getElementsByClassName
			("fondo_transparente")[0].style.display="block"
			document
			 .getElementById("title")
			 .innerText = value.title;
			document
			 .getElementById("genders")
			 .innerText = "Genres : "+value.genres;
					document
			 .getElementById("date")
			 .innerText = "Date de sortie : "+value.year;
					document
			 .getElementById("rated")
			 .innerText = "Votes : "+value.votes;
					document
			 .getElementById("imdb_score")
			 .innerText = "Score imdb : "+value.imdb_score;
					document
			 .getElementById("real")
			 .innerText = "Réalisation : "+value.directors;
			 		document
			 .getElementById("country")
			 .innerText = "Pays d'origine : "+value.countries;
					document
			 .getElementById("box_office")
			 .innerText = "Box office : "+value.actors;
			if (value.description == null) {
				document
				.getElementById("description")
				.innerText = "Pas de description"
			} else {
				document
				.getElementById("description")
				.innerText = "Synopsys : "+value.description;
			}
			return false
		})
	  })
	
	fetch(film2_url)
	  .then(function(res) {
		if (res.ok) {
		  return res.json();
		}
	  })
	  
	  .then(function(value) {
		  
		const image2 = document.getElementById("cat2_film_2_img")
		image2.src = value.image_url;
		image2.width = 250;
		image2.height = 310;
		image2.align = "center";
		
		document.getElementById("cat2_film_2_img").addEventListener("click",function(){
			document.getElementsByClassName
			("fondo_transparente")[0].style.display="block"
			document
			 .getElementById("title")
			 .innerText = value.title;
			document
			 .getElementById("genders")
			 .innerText = "Genres : "+value.genres;
					document
			 .getElementById("date")
			 .innerText = "Date de sortie : "+value.year;
					document
			 .getElementById("rated")
			 .innerText = "Votes : "+value.votes;
					document
			 .getElementById("imdb_score")
			 .innerText = "Score imdb : "+value.imdb_score;
					document
			 .getElementById("real")
			 .innerText = "Réalisation : "+value.directors;
			 		document
			 .getElementById("country")
			 .innerText = "Pays d'origine : "+value.countries;
					document
			 .getElementById("box_office")
			 .innerText = "Box office : "+value.actors;
			if (value.description == null) {
				document
				.getElementById("description")
				.innerText = "Pas de description"
			} else {
				document
				.getElementById("description")
				.innerText = "Synopsys : "+value.description;
			}
			return false
		})
	  })
	
	fetch(film3_url)
	  .then(function(res) {
		if (res.ok) {
		  return res.json();
		}
	  })
	  
	  .then(function(value) {
	
		const image3 = document.getElementById("cat2_film_3_img")
		image3.src = value.image_url;
		image3.width = 250;
		image3.height = 310;
		image3.align = "center";
		
		document.getElementById("cat2_film_3_img").addEventListener("click",function(){
			document.getElementsByClassName
			("fondo_transparente")[0].style.display="block"
			document
			 .getElementById("title")
			 .innerText = value.title;
			document
			 .getElementById("genders")
			 .innerText = "Genres : "+value.genres;
					document
			 .getElementById("date")
			 .innerText = "Date de sortie : "+value.year;
					document
			 .getElementById("rated")
			 .innerText = "Votes : "+value.votes;
					document
			 .getElementById("imdb_score")
			 .innerText = "Score imdb : "+value.imdb_score;
					document
			 .getElementById("real")
			 .innerText = "Réalisation : "+value.directors;
			 		document
			 .getElementById("country")
			 .innerText = "Pays d'origine : "+value.countries;
					document
			 .getElementById("box_office")
			 .innerText = "Box office : "+value.actors;
			if (value.description == null) {
				document
				.getElementById("description")
				.innerText = "Pas de description"
			} else {
				document
				.getElementById("description")
				.innerText = "Synopsys : "+value.description;
			}
			return false
		})
	  })
	
	fetch(film4_url)
	  .then(function(res) {
		if (res.ok) {
		  return res.json();
		}
	  })
	  
	  .then(function(value) {
	  
		const image4 = document.getElementById("cat2_film_4_img")
		image4.src = value.image_url;
		image4.width = 250;
		image4.height = 310;
		image4.align = "center";
		
		document.getElementById("cat2_film_4_img").addEventListener("click",function(){
			document.getElementsByClassName
			("fondo_transparente")[0].style.display="block"
			document
			 .getElementById("title")
			 .innerText = value.title;
			document
			 .getElementById("genders")
			 .innerText = "Genres : "+value.genres;
					document
			 .getElementById("date")
			 .innerText = "Date de sortie : "+value.year;
					document
			 .getElementById("rated")
			 .innerText = "Votes : "+value.votes;
					document
			 .getElementById("imdb_score")
			 .innerText = "Score imdb : "+value.imdb_score;
					document
			 .getElementById("real")
			 .innerText = "Réalisation : "+value.directors;
			 		document
			 .getElementById("country")
			 .innerText = "Pays d'origine : "+value.countries;
					document
			 .getElementById("box_office")
			 .innerText = "Box office : "+value.actors;
			if (value.description == null) {
				document
				.getElementById("description")
				.innerText = "Pas de description"
			} else {
				document
				.getElementById("description")
				.innerText = "Synopsys : "+value.description;
			}
			return false
		})
	  })
		
	fetch(value.next)
	  .then(function(res) {
		if (res.ok) {
		  return res.json();
		}
	  })
	  
	  .then(function(value) {
		  
		const film5_url = value.results[0].url
		const film6_url = value.results[1].url
		const film7_url = value.results[2].url
			
		fetch(film5_url)
		  .then(function(res) {
			if (res.ok) {
			  return res.json();
			}
		  })
		  
		  .then(function(value) {
		  
			const image5 = document.getElementById("cat2_film_5_img")
			image5.src = value.image_url;
			image5.width = 250;
			image5.height = 310;
			image5.align = "center";
			
			document.getElementById("cat2_film_5_img").addEventListener("click",function(){
				document.getElementsByClassName
				("fondo_transparente")[0].style.display="block"
				document
				 .getElementById("title")
				 .innerText = value.title;
				document
				 .getElementById("genders")
				 .innerText = "Genres : "+value.genres;
						document
				 .getElementById("date")
				 .innerText = "Date de sortie : "+value.year;
						document
				 .getElementById("rated")
				 .innerText = "Votes : "+value.votes;
						document
				 .getElementById("imdb_score")
				 .innerText = "Score imdb : "+value.imdb_score;
						document
				 .getElementById("real")
				 .innerText = "Réalisation : "+value.directors;
						document
				 .getElementById("country")
				 .innerText = "Pays d'origine : "+value.countries;
						document
				 .getElementById("box_office")
				 .innerText = "Box office : "+value.actors;
				if (value.description == null) {
					document
					.getElementById("description")
					.innerText = "Pas de description"
				} else {
					document
					.getElementById("description")
					.innerText = "Synopsys : "+value.description;
				}
				return false
			})
		})
		
		fetch(film6_url)
		  .then(function(res) {
			if (res.ok) {
			  return res.json();
			}
		  })
		  
		  .then(function(value) {
		  
			const image6 = document.getElementById("cat2_film_6_img")
			image6.src = value.image_url;
			image6.width = 250;
			image6.height = 310;
			image6.align = "center";
			
			document.getElementById("cat2_film_6_img").addEventListener("click",function(){
				document.getElementsByClassName
				("fondo_transparente")[0].style.display="block"
				document
				 .getElementById("title")
				 .innerText = value.title;
				document
				 .getElementById("genders")
				 .innerText = "Genres : "+value.genres;
						document
				 .getElementById("date")
				 .innerText = "Date de sortie : "+value.year;
						document
				 .getElementById("rated")
				 .innerText = "Votes : "+value.votes;
						document
				 .getElementById("imdb_score")
				 .innerText = "Score imdb : "+value.imdb_score;
						document
				 .getElementById("real")
				 .innerText = "Réalisation : "+value.directors;
						document
				 .getElementById("country")
				 .innerText = "Pays d'origine : "+value.countries;
						document
				 .getElementById("box_office")
				 .innerText = "Box office : "+value.actors;
				if (value.description == null) {
					document
					.getElementById("description")
					.innerText = "Pas de description"
				} else {
					document
					.getElementById("description")
					.innerText = "Synopsys : "+value.description;
				}
				return false
			})
		  })

		fetch(film7_url)
		  .then(function(res) {
			if (res.ok) {
			  return res.json();
			}
		  })
		  
		  .then(function(value) {
		  
			const image7 = document.getElementById("cat2_film_7_img")
			image7.src = value.image_url;
			image7.width = 250;
			image7.height = 310;
			image7.align = "center";
			
			document.getElementById("cat2_film_7_img").addEventListener("click",function(){
				document.getElementsByClassName
				("fondo_transparente")[0].style.display="block"
				document
				 .getElementById("title")
				 .innerText = value.title;
				document
				 .getElementById("genders")
				 .innerText = "Genres : "+value.genres;
						document
				 .getElementById("date")
				 .innerText = "Date de sortie : "+value.year;
						document
				 .getElementById("rated")
				 .innerText = "Votes : "+value.votes;
						document
				 .getElementById("imdb_score")
				 .innerText = "Score imdb : "+value.imdb_score;
						document
				 .getElementById("real")
				 .innerText = "Réalisation : "+value.directors;
						document
				 .getElementById("country")
				 .innerText = "Pays d'origine : "+value.countries;
						document
				 .getElementById("box_office")
				 .innerText = "Box office : "+value.actors;
				if (value.description == null) {
					document
					.getElementById("description")
					.innerText = "Pas de description"
				} else {
					document
					.getElementById("description")
					.innerText = "Synopsys : "+value.description;
				}
				return false
			})
		  })
	  }) 
	  
	document.getElementsByClassName("modal_cerrar")[0].addEventListener("click",function(){
		document.getElementsByClassName
		("fondo_transparente")[0].style.display="none"
	})
  })
  .catch(function(err) {
    // Une erreur est survenue
  });  


/* const next = document.querySelector('.next-comedy');
const prev = document.querySelector('.prev-comedy');
const slider = document.querySelector('.slider-comedy');

let elementsCount = 6;
let current = 1;
let slideWidth = 400;
let shift = 0;

next.addEventListener('click', () => {
  if (current < elementsCount) {
    slider.classList.toggle('move');
    shift += slideWidth;
    slider.style.transform = `translateX(-${shift}px)`;
    current++;
  } else {
    shift = 0;
    current = 1;
    slider.style.transform = `translateX(${shift}px)`;
  };
});

prev.addEventListener('click', () => {
  if (current > 1) {
    slider.classList.toggle('move');
    shift -= slideWidth;
    current--;
    slider.style.transform = `translateX(-${shift}px)`;
  } else if (current === 1) {
    shift = elementsCount * slideWidth - slideWidth;
    slider.classList.toggle('move');
    slider.style.transform = `translateX(-${shift}px)`;
    current = elementsCount;
  };
}); */