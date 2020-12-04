var accordion = document.getElementsByClassName("faq__button__accordion");

for (var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function() {
       var content = this.nextElementSibling;

       if (content.style.height){
           content.style.height = null;
       } else {
           content.style.height = 250 + "px";
       }
    }
}
(function init () {
    for(let i=0; i< question.length; i++) {
        question[i].addEventListener("click", accordion);
        loadBtn.addEventListener("click", addQuestions);
        slideBtn.addEventListener("click", changeSlide);
    }
})();
