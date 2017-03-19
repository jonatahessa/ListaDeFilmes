function show(categoria) {
	var b = document.querySelector("body");
	b.classList.toggle(categoria);
}

document.querySelector("button:nth-of-type(1)").addEventListener("click",function(){show("todos")});

document.querySelector("button:nth-of-type(2)").addEventListener("click",function(){show("action")});

document.querySelector("button:nth-of-type(3)").addEventListener("click",function(){show("adventure")});

document.querySelector("button:nth-of-type(4)").addEventListener("click",function(){show("biography")});

document.querySelector("button:nth-of-type(5)").addEventListener("click",function(){show("car")});

document.querySelector("button:nth-of-type(6)").addEventListener("click",function(){show("classic")});

document.querySelector("button:nth-of-type(7)").addEventListener("click",function(){show("comedy")});

document.querySelector("button:nth-of-type(8)").addEventListener("click",function(){show("cowboy")});

document.querySelector("button:nth-of-type(9)").addEventListener("click",function(){show("crime")});

document.querySelector("button:nth-of-type(10)").addEventListener("click",function(){show("cult")});

document.querySelector("button:nth-of-type(11)").addEventListener("click",function(){show("drama")});

document.querySelector("button:nth-of-type(12)").addEventListener("click",function(){show("escape")});

document.querySelector("button:nth-of-type(13)").addEventListener("click",function(){show("gang")});

document.querySelector("button:nth-of-type(14)").addEventListener("click",function(){show("gangster")});

document.querySelector("button:nth-of-type(15)").addEventListener("click",function(){show("gunslinger")});

document.querySelector("button:nth-of-type(16)").addEventListener("click",function(){show("horror")});

document.querySelector("button:nth-of-type(17)").addEventListener("click",function(){show("japanese")});

document.querySelector("button:nth-of-type(18)").addEventListener("click",function(){show("mystery")});

document.querySelector("button:nth-of-type(19)").addEventListener("click",function(){show("oscar")});

document.querySelector("button:nth-of-type(20)").addEventListener("click",function(){show("police")});

document.querySelector("button:nth-of-type(21)").addEventListener("click",function(){show("prison")});

document.querySelector("button:nth-of-type(22)").addEventListener("click",function(){show("samurai")});

document.querySelector("button:nth-of-type(23)").addEventListener("click",function(){show("thriller")});

document.querySelector("button:nth-of-type(24)").addEventListener("click",function(){show("war")});

document.querySelector("button:nth-of-type(25)").addEventListener("click",function(){show("western")});

function Filme(id, title, sinopsis, classes){

  this.title = title;
  this.sinopsis = sinopsis;
  this.id = id;
  this.classes = classes;

  this.write = function(){

    var article = document.createElement("article");
    article.setAttribute("id", this.id);
    for (var i = 0; i < this.classes.length; i++) {
        article.classList.add(this.classes[i]);
    }
    document.querySelector("body").appendChild(article);

    var p = document.createElement("p");
    var label1 = document.createTextNode(this.title);
    p.appendChild(label1);
    document.querySelector("#" + id).appendChild(p);

    var p2 = document.createElement("p");
    var label2 = document.createTextNode(this.sinopsis);
    p2.appendChild(label2);
    document.querySelector("#" + id).appendChild(p2);

  }

  this.write();

}

var onceUponATimeWest = new Filme("onceUponATimeWest", "Once Upon a Time in the West (1968)", "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.", ["todos", "western"]);

var goodBadUgly = new Filme("goodBadUgly", "The Good, The Bad and The Ugly (1966)", "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.", ["todos", "western", "drama", "classic", "cult", "cowboy"]);

/* adicionar um vetor 'tela', uma classe chamada filme e usar um 'if' para categorias dos filmes.*/
