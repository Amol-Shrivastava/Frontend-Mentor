const about_creator = document.getElementById('about_creator');
const creators_name = document.getElementById('creators_name');
const creators_post = document.getElementById('creators_post');
const creators_img = document.getElementById('creators_img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let counter = 0;
const Tanya = {
  about:  `I\’ve been interested in coding for a while but never taken the jump, until now.I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future.`,
  name: "Tanya Sinclair",
  post: "UX Engineer",
  img_src:`./images/image-tanya.jpg`
}

const John = {
  about:  `If you want to lay the best foundation possible I\’d recommend taking this course.The depth the instructors go into
   is incredible. I now feel so confident about starting up as a professional developer.`,
  name: "John Tarkpor",
  post: "Junior Front-end Developer",
  img_src: `./images/image-john.jpg`
}

function printDetails(user){
  about_creator.innerText = user.about;
  creators_name.innerText = user.name;
  creators_post.innerText = user.post;
  creators_img.src = user.img_src;
}

function clearScreen(){
  about_creator.innerText = "";
  creators_name.innerText = "";
  creators_post.innerText = "";
  creators_img.src = "";
}

function selectingWhatToPrint(){
  if(counter % 2 === 0 || counter === 0){
    printDetails(Tanya);
    }else{
    printDetails(John);
    }
  counter++;
}

selectingWhatToPrint();

prev.addEventListener('click', () => {
  clearScreen();
  selectingWhatToPrint();
});
next.addEventListener('click', () => {
  clearScreen();
  selectingWhatToPrint();
});


/*Code Summary

when button is clicked counter value should increase and for
odd values of counter tanya's testimonial should print and for even values of
counter john's testimonial should print
 */

/* Tanya's Testimonial
 about_creator  =>  “ I’ve been interested in coding for a while but never taken the jump, until now.
 I couldn’t recommend this course enough. I’m now in the job of my dreams and so
 excited about the future. ”
creators_name =>Tanya Sinclair
creators_post =>UX Engineer
creators_img.src => "./images/image-tanya.jpg"
*/

/* John's Testimonial
 about_creator  =>“ If you want to lay the best foundation possible I’d recommend taking this course.
 The depth the instructors go into is incredible. I now feel so confident about
 starting up as a professional developer. ”
creators_name =>John Tarkpor
creators_post =>Junior Front-end Developer
creators_img.src => "./images/image-john.jpg"
*/
