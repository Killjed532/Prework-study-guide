/*let topic = "HTML";

if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}*/

let topics = ["HTML", "CSS", "Git", "JavaScript"];

function chooseTopic (arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
chooseTopic(topics)