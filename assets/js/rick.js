
				

fetch('https://rickandmortyapi.com/api/character', {

	method: 'GET'
})
.then(response => response.json())
.then(function(json){
	let respostas = json.results
	console.log(respostas)
	console.log(respostas.length)
	var containerr = document.querySelector('.containerr');
	for(let i=0;i<respostas.length;i++){
		containerr.innerHTML+=`


<div class="containerr">

		<section class="tiles">

							
		<article class="style2">
		
			<span class="image">
				<img src=" ` +respostas[i].image+ `" class="capa">

				
			</span>
			<a>
				<h2>`+respostas[i].name+`</h2>
				<h2>`+respostas[i].gender+`</h2>
				
			</a>
		</article>
	
	</section>
		
		</div>

		`;
}
	})
