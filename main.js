// Variables for menu nav
const btnMenu = document.querySelector("#menu");
const btnMenuPagesList = document.querySelector("nav ul");
const btnAbtOwl = document.querySelector("#abtowl");
const btnOwlSpecies = document.querySelector("#owlspecies");
const btnOwlHunt = document.querySelector("#owlhunt");
const btnFunFacts = document.querySelector("#funfacts");
let allpages = document.querySelectorAll(".page");

// Variables for owl species

const btnSnowy = document.querySelector("#trueowl1");
const btnBurrow = document.querySelector("#trueowl2");
const btnBoreal = document.querySelector("#trueowl3");
const trueOwlList = document.querySelectorAll(".trueowl");
const trueName = document.querySelector("#trueName");
const trueDescription = document.querySelector("#trueDescription");

const btnBarn = document.querySelector("#barnowl1");
const btnEast = document.querySelector("#barnowl2");
const btnBay = document.querySelector("#barnowl3");
const barnOwlList = document.querySelectorAll(".barnowl");
const barnName = document.querySelector("#barnName");
const barnDescription = document.querySelector("#barnDescription");
// Stop putting () for functions inside event listeners unless it's newly initialised in there

// Functions for menu navigation

btnMenu.addEventListener("click", toggleMenus);

function toggleMenus()
{
    btnMenuPagesList.classList.toggle("menuShow");
}

function hideall()
{
    for (let onepage of allpages)
    {
        if (onepage.classList.contains("displayed"))
        {
            onepage.classList.remove("displayed");
        }
        
        onepage.classList.add("hidden");
    }
}

function showPage(pgNo)
{
    hideall()
    let onepage = document.querySelector("#page" + pgNo);
    onepage.classList.remove("hidden");
    onepage.classList.add("displayed");
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

// Functions for owl species

function viewTrueInformation(infoNum)
{
    switch (infoNum)
    {
        case 1:
            trueName.innerHTML = "Snowy Owl";
            trueDescription.innerHTML = "A white owl that lives in the Arctic tundra. If you're a fan of Harry Potter, you might've seen it as Harry's owl! It is distinguised with its white feathers and black spots, with a height of up to 70cm. It hunts mostly small mammals during the day in the Arctic summer!";
            break;
        case 2:
            trueName.innerHTML = "Burrowing Owl";
            trueDescription.innerHTML = "The burrowing owl lives in, well, burrows! Found in North and South America, they live underground in grasslands and deserts. They are quite active during the day and are quite the social birds! They also decorate their homes to attract prey!";
            break;
        case 3:
            trueName.innerHTML = "Boreal Owl";
            trueDescription.innerHTML = "Similar to the Snowy Owl, they live in northern boreal forests in Canada, Alaska and Scandivania! They are very, very strictly elusive and nocturnal, so good luck spotting them in the day! They are quite small, about 27cm tall, making this bird species one of the most difficult to study!";
            break;
        default:
            trueName.innerHTML = "Owl Name";
            trueDescription.innerHTML = "Description: Click on one of the photos to view more information about the owl!";
            break;
    }
}

function toggleTrueInformation(toggleNum)
{
    for (let currentOwlSelected of trueOwlList)
    {
        if (currentOwlSelected.classList.contains("clicked"))
        {
            currentOwlSelected.classList.remove("clicked");
        }
    }

    let trueOwlSelected = document.querySelector("#trueowl" + toggleNum);
    trueOwlSelected.classList.add("clicked");

    viewTrueInformation(toggleNum);
}

btnSnowy.addEventListener("click", function()
{
    toggleTrueInformation(1);
});

btnBurrow.addEventListener("click", function()
{
    toggleTrueInformation(2);
});

btnBoreal.addEventListener("click", function()
{
    toggleTrueInformation(3);
});

function viewBarnInformation(infoNum)
{
    switch (infoNum)
    {
        case 1:
            barnName.innerHTML = "Barn Owl";
            barnDescription.innerHTML = "True to its name, the barn owl is of the barn owl family and the most widespread owl in the world! It has a white, heart-shaped face, equipped with dark eyes, unlike the normfor owls. They are outstandingly silent mid-flight and hunts mostly rodents, being the perfect assistant for farmers!";
            break;
        case 2:
            barnName.innerHTML = "Eastern Grass Owl";
            barnDescription.innerHTML = "Found in Southeast Asia and Australia, this particular barn owl lives amongst the tall grasslands and marshes. It has a special trait where it makes tunnels in the grass to avoid being spotted. Its elusive behaviour makes it hard to spot in the wild, despite what its natural habitats may suggest.";
            break;
        case 3:
            barnName.innerHTML = "Bay Owl";
            barnDescription.innerHTML = "Bay owls have a staggeringly low number of 2 species, that being the Oriental species and Sri Lanka species! Unlike normal barn owls, their faces are strongly curved, comparable to that of a hook, and prefer humid, dense forests, which could be the reason for the difference in face shape. However, due to their rarity, humans use them as indicators to determine how healthy a forest is!";
            break;
        default:
            barnName.innerHTML = "Owl Name";
            barnDescription.innerHTML = "Description: Click on one of the photos to view more information about the owl!";
            break;
    }
}

function toggleBarnInformation(toggleNum)
{
    for (let currentOwlSelected of barnOwlList)
    {
        if (currentOwlSelected.classList.contains("clicked"))
        {
            currentOwlSelected.classList.remove("clicked");
        }
    }

    let barnOwlSelected = document.querySelector("#barnowl" + toggleNum);
    barnOwlSelected.classList.add("clicked");

    viewBarnInformation(toggleNum);
}

btnBarn.addEventListener("click", function()
{
    toggleBarnInformation(1);
});

btnEast.addEventListener("click", function()
{
    toggleBarnInformation(2);
});

btnBay.addEventListener("click", function()
{
    toggleBarnInformation(3);
});