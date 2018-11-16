var wins = 0;

var losses = 0;

var guess = 0;

var alreadyguess = [""];

var pcopt = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var actual =(function getrandomletter() 
 {
     return pcopt[Math.floor(Math.random() * pcopt.length)];
 })() 

var guessleft = 9;

console.log(actual);

    document.onkeyup = function(event)              
    {

        let input = event.key;

        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
        
        if (options.indexOf(input) > -1) 
        
        {
            
            if (input === actual) {
                wins++;
                guessleft = 9;
                alreadyguess = [];
                getrandomletter();
                
            }

            if (input != actual) {
                guessleft --;
                alreadyguess.push(input);
            }

            if (guessleft === 0) {

            guessleft = 9;
            losses ++;
            alreadyguess = [];
            getrandomletter();

        }
        

    }
         
        console.log(["input", input]) 
        console.log(["guessleft", guessleft])
        console.log(["wins", wins])


            document.getElementById("thewins").innerHTML = "Wins:"+wins+"";
            document.getElementById("thelose").innerHTML = "Loses:"+losses+"";
            document.getElementById("sofar").innerHTML = "Your guesses so far:" +alreadyguess+ "";
            document.getElementById("remaining").innerHTML = "Guesses Remaining:" +guessleft+ "";

}