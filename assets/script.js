let topics = ["HTML", "CSS", "Git", "JavaScript"];
let randomTopic = topics[Math.floor(Math.random()* topics.length)];
function listTopic (arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function selectTopic () {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}
console.log("Here are the topics we learned through Prework:");
listTopic(topics);
console.log("Which topics should we study first?");
selectTopic();

