var wins = 0;

var losses = 0;

var guess = 0;

var alreadyguess = [""];

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var pcopt = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var actual = pcopt[Math.floor(Math.random() * pcopt.length)];

var guessleft = 0;

console.log(actual);



    document.onkeyup = function(event) {


        var input = event.key;

        if (options.indexOf(input) > -1) {
            
            if (input === actual) {
                wins++;
                guessleft = 9;
                alreadyguess = [];
            }

            if (input != actual) {
                guessleft --;
                alreadyguess.push(input);
            }

            if (guessleft === 0) {

            guessleft = 9;
            losses ++;
            alreadyguess = [];
        }

}










}