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

function Movie(id, title, sinopsis, classes){

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

var onceUponATimeWest = new Movie("onceUponATimeWest", "Once Upon a Time in the West (1968)", "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.", ["todos", "western", "drama", "classic", "cowboy", "adventure"]);

var goodBadUgly = new Movie("goodBadUgly", "The Good, The Bad and The Ugly (1966)", "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.", ["todos", "western", "drama", "classic", "cult", "cowboy"]);

var unforgiven = new Movie("unforgiven", "Unforgiven (1992)", "Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner and a young man.", ["todos", "western", "cowboy", "oscar", "drama", "gunslinger"]);

var django = new Movie("django", "Django (1966)", "A coffin-dragging gunslinger and a half-breed prostitute become embroiled in a bitter feud between a Klan of Southern racists and a band of Mexican Revolutionaries.", ["todos", "western", "adventure", "cowboy", "classic", "gunslinger"]);

var hatefulEight = new Movie("hatefulEight", "The Hateful Eight (2015)", "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.", ["todos", "drama", "western", "thriller", "gang", "cult"]);

var goodFellas = new Movie("goodFellas", "Goodfellas (1990)", "Henry Hill and his friends work their way up through the mob hierarchy.", ["todos", "drama", "biography", "gangster", "crime", "oscar"]);

var memento = new Movie("memento", "Memento (2000)", "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.", ["todos", "drama", "mystery", "thriller", "crime", "cult"]);

var reservoirDogs = new Movie("reservoirDogs", "Reservoir Dogs (1992)", "After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.", ["todos", "drama", "gang", "crime", "cult", "gangster"]);

var departed = new Movie("departed", "The Departed (2006)", "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.", ["todos", "drama", "crime", "gangster", "oscar", "thriller"]);

var wolfOfWallStreet = new Movie("wolfOfWallStreet", "The Wolf of Wall Street (2013)", "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.", ["todos", "drama", "biography", "comedy", "crime", "police"]);

var catchMeIfYouCan = new Movie("catchMeIfYouCan", "Catch Me If You Can (2002)", "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.", ["todos", "drama", "crime", "biography", "adventure", "police"]);

var lockStockAndTwoSmokingBarrels = new Movie("lockStockAndTwoSmokingBarrels", "Lock, Stock and Two Smoking Barrels (1998)", "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.", ["todos", "comedy", "action", "gangster", "crime", "cult"]);

var yojimbo = new Movie("yojimbo", "Yojimbo (1961)", "A crafty ronin comes to a town divided by two criminal gangs and decides to play them against each other to free the town.", ["todos", "action", "classic", "japanese", "samurai", "thriller"]);

var sevenSamurai = new Movie("sevenSamurai", "Seven Samurai (1954)", "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.", ["todos", "adventure", "japanese", "samurai", "classic", "cult"]);

var granTorino = new Movie("granTorino", "Gran Torino (2008)", "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.", ["todos", "drama", "cult", "gang", "car", "crime"]);

var forrestGump = new Movie("forrestGump", "Forrest Gump (1994)", "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.", ["todos", "drama", "adventure", "comedy", "oscar", "classic"]);

var shawshankRedemption = new Movie("shawshankRedemption", "Shawshank Redemption (1994)", "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", ["todos", "crime", "drama", "prison", "escape", "classic"]);

var oneFlewOverTheCuckooNest = new Movie("oneFlewOverTheCuckooNest", "One Flew Over the Cuckoo's Nest (1975)", "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.", ["todos", "drama", "prison", "escape", "oscar", "classic"]);

var apocalypseNow = new Movie("apocalypseNow", "Apocalypse Now (1979)", "During the Vietnam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade colonel who has set himself up as a god among a local tribe.", ["todos", "war", "thriller", "mystery", "horror", "oscar"]);

var theDeerHunter = new Movie("theDeerHunter", "The Deer Hunter (1978)", "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.", ["todos", "drama", "war", "horror", "oscar", "thriller"]);



/* adicionar um vetor 'tela', uma classe chamada filme e usar um 'if' para categorias dos filmes.*/
