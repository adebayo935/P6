  fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  
  .then(function(value) {
	  
	const film1_url = value.results[0].url
	
	fetch(film1_url)
	  .then(function(res) {
		if (res.ok) {
		  return res.json();
		}
	  })
	  
	  .then(function(value) {
		document
			.getElementById("best_film_title")
			.innerText = value.title;
			
		if (value.description == null) {
			document
			.getElementById("description_best")
			.innerText = "Pas de description"
		} else {
			document
			.getElementById("description_best")
			.innerText = value.description;
		}
		
		document.getElementById("best_button").addEventListener("click", function(){
			document.getElementById("description_best").style.opacity="1";
		})
		
		const image = document.createElement("img")
		image.src = value.image_url;
		image.width = 970;
		image.height = 450;
		image.align = "right";
		document.getElementById("best_film_img").appendChild(image);
		
		document.getElementById("best_film_img").addEventListener("click",function(){
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
	  
	document.getElementsByClassName("modal_cerrar")[0].addEventListener("click",function(){
		document.getElementsByClassName
		("fondo_transparente")[0].style.display="none"
	})
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
