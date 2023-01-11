/* selecting all class in html with .section */
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls'); // all buttons
const sectBtn = document.querySelectorAll('.control'); //each button (5 of them in sectBtn)
const allSections = document.querySelectorAll('.main-content');

function PageTransitions(){

    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            //remove previous active button
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            //remove previous apprearing block
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

}

PageTransitions();

function changeTheme(){
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
}

changeTheme();


 
