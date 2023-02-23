const myName = document.getElementById('myName');
const myTitle = document.getElementById('myTitle');

myName.addEventListener("mouseover", () => {
    myName.style.color = "#F5CC00";
    myName.style.fontSize= "3.25rem";
    myName.style.fontWeight="800";
});

myName.addEventListener("mouseout", () => {
    myName.style.color = "#003566";
    myName.style.fontSize= "3rem";
    myName.style.fontWeight="700";
});

myTitle.addEventListener("mouseover", () => {
    myTitle.style.color = "#F5CC00";
    myTitle.style.fontSize= "1.75rem";
    myTitle.style.fontWeight="400";
});

myTitle.addEventListener("mouseout", () => {
    myTitle.style.color = "#5E656B";
    myTitle.style.fontSize= "1.5rem";
    myTitle.style.fontWeight="300";
});


const today =document.getElementById("today");
const date = new Date();
today.innerHTML = date.toDateString()


function getWisdom() {
    $.ajax ("https://api.adviceslip.com/advice", {
        success: (APIResponse) => {
            const myResponse = JSON.parse(APIResponse);
            console.log(myResponse)
            let wisdom = document.getElementById('wisdom')
            wisdom.innerHTML = myResponse.slip.advice
        }
})}

getWisdom();


const githubLink = document.getElementById('githubLink');
const githubLogo = document.getElementById('githubLogo');
const githubText= document.getElementById('githubText');

githubLink.addEventListener("mouseover", () => {
   githubLogo.setAttribute('src', 'assets/akar-icons_github-fill-yellow.svg')
   githubText.style.color = '#F5CC00';
});

githubLink.addEventListener("mouseout", () => {
    githubLogo.setAttribute('src', 'assets/akar-icons_github-fill.svg')
    githubText.style.color = 'white';
});

