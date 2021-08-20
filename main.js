// Image files
let imagesArray = [
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg",
];
let imageObjects = {
  one: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg",
  two: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg",
  three:
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg",
  four: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg",
  five: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg",
  six: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg",
  seven:
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg",
  eight:
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg",
  nine: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg",
};
let channels = document.querySelectorAll(".channel");

for (let index = 0; index < channels.length; index++) {
  channels[index].addEventListener("click", function (e) {
    // console.log(e.target.id);
    //#way 1
    // console.log(imageObjects[e.target.id]);
    // document.querySelector("#tv_display_picture").src =
    //   imageObjects[e.target.id];

    //way 2
    // document.querySelector("#tv_display_picture").src = imagesArray[index];

    //way 3
    if (e.target.innerText == 1) {
      document.querySelector("#tv_display_picture").src =
        imagesArray[e.target.innerText - 1];
    } else if (e.target.innerText == 2) {
      document.querySelector("#tv_display_picture").src =
        imagesArray[e.target.innerText - 1];
    } else if (e.target.innerText == 3) {
      document.querySelector("#tv_display_picture").src =
        imagesArray[e.target.innerText - 1];
    } else if (e.target.innerText == 4) {
      document.querySelector("#tv_display_picture").src =
        imagesArray[e.target.innerText - 1];
    } else if (e.target.innerText == 5) {
      document.querySelector("#tv_display_picture").src =
        imagesArray[e.target.innerText - 1];
    } else if (e.target.innerText == 6) {
      document.querySelector("#tv_display_picture").src =
        imagesArray[e.target.innerText - 1];
    } else if (e.target.innerText == 7) {
      document.querySelector("#tv_display_picture").src =
        imagesArray[e.target.innerText - 1];
    } else if (e.target.innerText == 8) {
      document.querySelector("#tv_display_picture").src =
        imagesArray[e.target.innerText - 1];
    } else if (e.target.innerText == 9) {
      document.querySelector("#tv_display_picture").src =
        imagesArray[e.target.innerText - 1];
    }
  });
}
