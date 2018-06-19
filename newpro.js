console.log("coucou");
var bouton = $("#button");
var div = $("#display");
var score = 0;
var multiplicateur = 2; 
var but = $("#bouton");
var prix = 50;

bouton.click(function () {
	score= score+multiplicateur;
    div.html(score + '<br>');

});

but.click(function () {
     multiplicateur++;
     score = score - prix 
     prix= prix *2
     	if(score<0) {
	div.html(score=0);
	but.html("x" + multiplicateur + "<br>" +  prix  + "euros" );
	}

     div.html(score);
console.log(multiplicateur)

});



