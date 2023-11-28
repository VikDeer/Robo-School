let buttons = document.querySelectorAll(".slider button")
let posts = document.querySelectorAll(".post3 div, .post2, .post1 div")
// posts.push(document.querySelectorAll(".post1 div"))
console.log(posts)
for (i = 0; i < buttons.length; i++) {
   // console.log(buttons[i])
}

for (let button of buttons) {
   button.onclick = function() {
      // console.log (button)
      for (let post of posts) {
         var animation = post.animate([
            {opacity: '1'},
            {opacity: '0'},
            {opacity: '1'}
          ], 1500);
          animation.addEventListener('finish', function() {
            // post.style.opacity = '1';
          });
      }
   }
}