const btnMenu = document.querySelector("#menu");
const btnMenuPagesList = document.querySelector("nav ul");
const btnAbtOwl = document.querySelector("#abtowl");
const btnOwlSpecies = document.querySelector("#owlspecies");
const btnOwlHunt = document.querySelector("#owlhunt");
const btnFunFacts = document.querySelector("#funfacts");
let allpages = document.querySelectorAll(".page");

// Stop putting () for functions inside event listeners unless it's newly initialised in there

btnMenu.addEventListener("click", toggleMenus);

function toggleMenus()
{
    btnMenuPagesList.classList.toggle("menuShow");
}

function hideall()
{
    for (let onepage of allpages)
    {
        onepage.style.display = "none";
    }
}

function showPage(pgNo)
{
    hideall()
    let onepage = document.querySelector("#page" + pgNo);
    onepage.style.display = "block";
}

btnAbtOwl.addEventListener("click", function()
{
    showPage(1);
});

btnOwlSpecies.addEventListener("click", function()
{
    showPage(2);
});

btnOwlHunt.addEventListener("click", function()
{
    showPage(3);
});

btnFunFacts.addEventListener("click", function()
{
    showPage(4);
});

hideall();
showPage(1);