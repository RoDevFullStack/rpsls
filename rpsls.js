let arr = ['rock', 'paper','scissors', 'lizard','spock'];
let computerVar = Math.floor(Math.random()*5);
let computerPlaying = arr[computerVar];
let humanVar = Math.floor(Math.random()*5);
let humanPlaying = arr[humanVar];
console.log(`You played: ${humanPlaying} and Computer played: ${computerPlaying}`);
if (humanPlaying == 'rock' && computerPlaying == 'paper') {
console.log('Paper covers rock. You loose.')
} if (humanPlaying == 'rock' && computerPlaying == 'scissors') {
    console.log('Rock crushes scissors. You won!')
} if (humanPlaying == 'rock' && computerPlaying == 'lizard') {
    console.log('Rock crushes lizard. You won!')
} if (humanPlaying == 'rock' && computerPlaying == 'spock') {
    console.log('Spock vaporizes rock. You loose.')
} if (humanPlaying == 'paper' && computerPlaying == 'rock') {
    console.log('Paper covers rock. You won!') 
} if (humanPlaying == 'paper' && computerPlaying == 'scissors') {
    console.log('Scissors cuts paper. You loose.') 
} if (humanPlaying == 'paper' && computerPlaying == 'lizard') {
    console.log('Lizard eats paper. You loose.') 
}  if (humanPlaying == 'paper' && computerPlaying == 'spock') {
    console.log('Lizard eats paper. You loose.') 
} if (humanPlaying == 'scissors' && computerPlaying == 'rock') {
    console.log('Rock crushes scissors. You loose.') 
} if (humanPlaying == 'scissors' && computerPlaying == 'paper') {
    console.log('Scissors cuts paper. You won!') 
} if (humanPlaying == 'scissors' && computerPlaying == 'lizard') {
    console.log('Scissors decapitates lizard. You won!') 
} if (humanPlaying == 'scissors' && computerPlaying == 'spock') {
    console.log('Spock smashes scissors. You loose.') 
} if (humanPlaying == 'lizard' && computerPlaying == 'rock') {
    console.log('Rock crushes lizard. You loose.') 
} if (humanPlaying == 'lizard' && computerPlaying == 'paper') {
    console.log('Lizard eats paper. You won!') 
} if (humanPlaying == 'lizard' && computerPlaying == 'scissors') {
    console.log('Scissors decapitates lizard. You loose.') 
} if (humanPlaying == 'lizard' && computerPlaying == 'spock') {
    console.log('Lizard poisons Spock. You won!') 
} if (humanPlaying == 'spock' && computerPlaying == 'rock') {
    console.log('Spock vaporizes rock. You won!') 
} if (humanPlaying == 'spock' && computerPlaying == 'paper') {
    console.log('Paper disproves Spock. You loose.') 
} if (humanPlaying == 'spock' && computerPlaying == 'scissors') {
    console.log('Spock smashes scissors. You won!') 
} if (humanPlaying == 'spock' && computerPlaying == 'lizard') {
    console.log('Lizard poisons Spock. You loose.') 
} if (humanPlaying  === computerPlaying) {
    console.log("It's a tie") 
}





