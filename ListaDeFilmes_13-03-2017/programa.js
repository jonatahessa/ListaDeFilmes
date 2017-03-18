function show(categoria) {
	var b = document.querySelector("body");
	b.classList.toggle(categoria);
}

document.querySelector("button:nth-of-type(1)").addEventListener("click",function(){show("todos")});

document.querySelector("button:nth-of-type(2)").addEventListener("click",function(){show("action")});

document.querySelector("button:nth-of-type(3)").addEventListener("click",function(){ligar("adventure")});

document.querySelector("button:nth-of-type(4)").addEventListener("click",function(){ligar("biography")});

document.querySelector("button:nth-of-type(5)").addEventListener("click",function(){ligar("car")});

document.querySelector("button:nth-of-type(6)").addEventListener("click",function(){ligar("classic")});

document.querySelector("button:nth-of-type(7)").addEventListener("click",function(){ligar("comedy")});

document.querySelector("button:nth-of-type(8)").addEventListener("click",function(){ligar("cowboy")});

document.querySelector("button:nth-of-type(9)").addEventListener("click",function(){ligar("crime")});

document.querySelector("button:nth-of-type(10)").addEventListener("click",function(){ligar("cult")});

document.querySelector("button:nth-of-type(11)").addEventListener("click",function(){ligar("drama")});

document.querySelector("button:nth-of-type(12)").addEventListener("click",function(){ligar("escape")});

document.querySelector("button:nth-of-type(13)").addEventListener("click",function(){ligar("gang")});

document.querySelector("button:nth-of-type(14)").addEventListener("click",function(){ligar("gangster")});

document.querySelector("button:nth-of-type(15)").addEventListener("click",function(){ligar("gunslinger")});

document.querySelector("button:nth-of-type(16)").addEventListener("click",function(){ligar("horror")});

document.querySelector("button:nth-of-type(17)").addEventListener("click",function(){ligar("italian")});

document.querySelector("button:nth-of-type(18)").addEventListener("click",function(){ligar("japanese")});

document.querySelector("button:nth-of-type(19)").addEventListener("click",function(){ligar("mystery")});

document.querySelector("button:nth-of-type(20)").addEventListener("click",function(){ligar("oscar")});

document.querySelector("button:nth-of-type(21)").addEventListener("click",function(){ligar("police")});

document.querySelector("button:nth-of-type(22)").addEventListener("click",function(){ligar("prison")});

document.querySelector("button:nth-of-type(23)").addEventListener("click",function(){ligar("samurai")});

document.querySelector("button:nth-of-type(24)").addEventListener("click",function(){ligar("thriller")});

document.querySelector("button:nth-of-type(25)").addEventListener("click",function(){ligar("war")});

document.querySelector("button:nth-of-type(26)").addEventListener("click",function(){ligar("western")});

function filme(id, titulo, sinopse, classe) {
		this.id = id;
		this.titulo = titulo;
		this.sinopse = sinopse;
		this.classe = classe;

		this.mostrar = function(){
			var article = document.createElement("article");
			article.setAtribute("id", this.id);
			for (var i = 0; i < this.classe; i++){
					article.classList.add(this.classe[i]);
			}
	    document.querySelector("body").appendChild(article);

			var p1 = document.createElement("P");
			var titulo = document.createTextNode(this.nome);
			p1.appendChild(titulo);
			document.querySelector("#" + id).appendChild(p1);

			var p2 = document.createElement("P");
			var texto = document.createTextNode(this.sinopse);
			p2.appendChild(texto);
			document.querySelector("#" + id).appendChild(p2);

		}

		this.mostrar();

}

var yojimbo = new filme("once-upon-a-time-west", "Once Upon a Time in the West (1968)", "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.", "todos western drama classic cowboy adventure", ["todos"]);

window.addEventListener("click", show);

/* adicionar um vetor 'tela', uma classe chamada filme e usar um 'if' para categorias dos filmes.*/
