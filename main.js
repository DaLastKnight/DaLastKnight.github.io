// Validated by BeautifyTools Javascript Validator!
// Menu Nav variables
const btnMenu = document.querySelector("#menu");
const meText = document.querySelector("#me");
const btnMenuPagesList = document.querySelector("nav ul");
const btnAbtOwl = document.querySelector("#abtowl");
const btnOwlSpecies = document.querySelector("#owlspecies");
const btnOwlHunt = document.querySelector("#owlhunt");
const btnFunFacts = document.querySelector("#funfacts");
const btnOwlGame = document.querySelector("#owlgame");
const btnRefresh = document.querySelector("#refresh");

let allpages = document.querySelectorAll(".page");

// Page 2 variables
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

// Page 3 variables
const huntStage = document.querySelector("#huntstage");
const huntText = document.querySelector("#hunttext");
const huntText2 = document.querySelector("#hunttext2");
const leftArrow = document.querySelector("#leftarrow");
const rightArrow = document.querySelector("#rightarrow");
const huntElementsList = document.querySelectorAll(".hunt");

let currentStageNum = 1;

// Page 4 variables
const qnList = document.querySelectorAll("input[name ^= 'q']");
const btnSound = document.querySelector("#sound");
const owlSound = document.querySelector("#owlsound");
const btnSubmit = document.querySelector("#submit");
const btnRetry = document.querySelector("#retry");
const scoreText = document.querySelector("#scoretext");
const q5 = document.querySelector("input[name = 'q5']");

let score = 0;
let rangeValue = 50;
let isQuizDone = false;

// Page 5 variables
const gridGame = document.querySelector("#gridgame");
const gridTypes = ['empty', 'bomb', 'rat'];
const owlSit2 = document.querySelector("#owlsit2");
const fullHeartSrc = "images/hearticon.png";
const brokenHeartSrc = "images/heartbrokenicon.png";
const healthDisplay = document.querySelector("#health");
const ratsFoundDisplay = document.querySelector("#ratsfound");
const ratsTotalDisplay = document.querySelector("#ratstotal");
const messageDisplay = document.querySelector("#message");
const btnReset = document.querySelector("#reset");
const btnPlay = document.querySelector("#play");
const tadaSound = new Audio('audio/ta-da.mp3');
const explodeSound = new Audio('audio/deltarune-explosion.mp3');

let gridItems = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
let maxHealth = 3;
let health = 0;
let ratsFound = 0;
let ratsTotal = 0;
let countdown = 0;

// Functions for menu navigation

btnMenu.addEventListener("click", toggleMenus);

// For hamburger menu (owl icon)
function toggleMenus()
{
    btnMenuPagesList.classList.toggle("menuShow");
    meText.classList.toggle("hide");
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

// Displays selected page, hides the rest
function showPage(pgNo)
{
    hideall();
    let onepage = document.querySelector("#page" + pgNo);
    onepage.classList.remove("hidden");
    onepage.classList.add("displayed");
}

// This resets every page's values (be it a quiz, game, state) back to default, as if resetting app status without a browser refresh
function refreshAllPages()
{
    refreshClicks();
    trueName.textContent = "Owl name";
    trueDescription.textContent = "Description: Click on one of the photos to learn more about the owl!";
    barnName.textContent = "Owl name";
    barnDescription.textContent = "Description: Click on one of the photos to learn more about the owl!";


    currentStageNum = 1;
    toggleStageInfo();
    resetQuiz();

    maxHealth = 0;
    ratsFound = 0;
    ratsTotal = 0;
    countdown = 4;

    owlSit2.classList.remove("dead");
    updateStatus();
    gridGame.replaceChildren();
    ratsTotalDisplay.textContent = ratsTotal;
    btnPlay.textContent = "Click here to play game!";
    if (btnPlay.classList.contains("hide"))
    {
        btnPlay.classList.remove("hide");
    }
}

btnAbtOwl.addEventListener("click", function()
{
    showPage(1);
});

btnOwlSpecies.addEventListener("click", function()
{
    refreshClicks();
    showPage(2);
});

btnOwlHunt.addEventListener("click", function()
{
    showPage(3);
    currentStageNum = 1;
    toggleStageInfo("nil");
});

btnFunFacts.addEventListener("click", function()
{
    resetQuiz();
    showPage(4);
});

btnOwlGame.addEventListener("click", function()
{
    showPage(5);
    countdown = 4;
});

btnRefresh.addEventListener("click", function()
{
    refreshAllPages();
});

hideall();
showPage(1);

// Page 2 Functions
// Gets rid of :clicked state from before
function refreshClicks()
{
    for (let currentOwlSelected of trueOwlList)
    {
        if (currentOwlSelected.classList.contains("clicked"))
        {
            currentOwlSelected.classList.remove("clicked");
        }
    }
    
    for (let currentOwlSelected of barnOwlList)
    {
        if (currentOwlSelected.classList.contains("clicked"))
        {
            currentOwlSelected.classList.remove("clicked");
        }
    }
}

// viewInfo: view the name and description of the owl
// toggleInfo: changes which owl is currently being toggled on/viewed by the user
function viewTrueInfo(infoNum)
{
    switch (infoNum)
    {
        case 1:
            trueName.innerHTML = "Snowy Owl";
            trueDescription.innerHTML = "A white owl that lives in the Arctic tundra. If you're a fan of Harry Potter, you might've seen it as Harry's owl! It is distinguised with its white feathers and black spots, with a height of up to 70cm. It hunts mostly small mammals during the day in the Arctic summer! Photo by James Pintar";
            break;
        case 2:
            trueName.innerHTML = "Burrowing Owl";
            trueDescription.innerHTML = "The burrowing owl lives in, well, burrows! Found in North and South America, they live underground in grasslands and deserts. They are quite active during the day and are quite the social birds! They also decorate their homes to attract prey! Photo by Clyde Nishimura";
            break;
        case 3:
            trueName.innerHTML = "Boreal Owl";
            trueDescription.innerHTML = "Similar to the Snowy Owl, they live in northern boreal forests in Canada, Alaska and Scandivania! They are very, very strictly elusive and nocturnal, so good luck spotting them in the day! They are quite small, about 27cm tall, making this bird species one of the most difficult to study! Photo by Bruce G. McKee";
            break;
        default:
            trueName.innerHTML = "Owl Name";
            trueDescription.innerHTML = "Description: Click on one of the photos to view more information about the owl!";
            break;
    }
}

function toggleTrueInfo(toggleNum)
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

    viewTrueInfo(toggleNum);
}

btnSnowy.addEventListener("click", function()
{
    toggleTrueInfo(1);
});

btnBurrow.addEventListener("click", function()
{
    toggleTrueInfo(2);
});

btnBoreal.addEventListener("click", function()
{
    toggleTrueInfo(3);
});

function viewBarnInfo(infoNum)
{
    switch (infoNum)
    {
        case 1:
            barnName.innerHTML = "Barn Owl";
            barnDescription.innerHTML = "True to its name, the barn owl is of the barn owl family and the most widespread owl in the world! It has a white, heart-shaped face, equipped with dark eyes, unlike the normfor owls. They are outstandingly silent mid-flight and hunts mostly rodents, being the perfect assistant for farmers! Photo by Peter K. Burian";
            break;
        case 2:
            barnName.innerHTML = "Eastern Grass Owl";
            barnDescription.innerHTML = "Found in Southeast Asia and Australia, this particular barn owl lives amongst the tall grasslands and marshes. It has a special trait where it makes tunnels in the grass to avoid being spotted. Its elusive behaviour makes it hard to spot in the wild, despite what its natural habitats may suggest. Photo by Alfred Schulte";
            break;
        case 3:
            barnName.innerHTML = "Bay Owl";
            barnDescription.innerHTML = "Bay owls have a staggeringly low number of 2 species, that being the Oriental species and Sri Lanka species! Unlike normal barn owls, their faces are strongly curved, comparable to that of a hook, and prefer humid, dense forests, which could be the reason for the difference in face shape. However, due to their rarity, humans use them as indicators to determine how healthy a forest is! Photo by Ian Dugdale";
            break;
        default:
            barnName.innerHTML = "Owl Name";
            barnDescription.innerHTML = "Description: Click on one of the photos to view more information about the owl!";
            break;
    }
}

function toggleBarnInfo(toggleNum)
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

    viewBarnInfo(toggleNum);
}

btnBarn.addEventListener("click", function()
{
    toggleBarnInfo(1);
});

btnEast.addEventListener("click", function()
{
    toggleBarnInfo(2);
});

btnBay.addEventListener("click", function()
{
    toggleBarnInfo(3);
});

// Page 3 Functions
// Transitions are controlled here, with innerHTML for text and classes for CSS
function viewStageInfo(infoNum)
{
    switch (infoNum)
    {
        case 1:
            for (let currentElement of huntElementsList)
            {
                if (currentElement.classList.contains("stage2"))
                {
                    currentElement.classList.remove("stage2");
                }
                
                currentElement.classList.add("stage1");
            }

            huntStage.innerHTML = "Stage 1: Timing the hunt";
            huntText.innerHTML = "Most owls, like the barn owl, are nocturnal and use their enchanced night vision and sharp hearing to hunt during the night, when their prey like rodents and insects are more active. However, there are some exceptions like the short-eared owl and burrowing owl that hunt during either sunrise or sunset and in full daylight respectively.";
            huntText2.innerHTML = "Most owls, like the barn owl, are nocturnal and use their enchanced night vision and sharp hearing to hunt during the night, when their prey like rodents and insects are more active. However, there are some exceptions like the short-eared owl and burrowing owl that hunt during either sunrise or sunset and in full daylight respectively.";
            break;
        case 2:
            for (let currentElement of huntElementsList)
            {
                if (currentElement.classList.contains("stage3"))
                {
                    currentElement.classList.remove("stage3");
                }
                
                currentElement.classList.add("stage2");
            }

            huntStage.innerHTML = "Stage 2: Locating the prey";
            huntText.innerHTML = "When it comes to locating prey, owls use their binocular vision and forward-facing eyes that have retinas tuned to low light levels to find prey. Some owls don't even use vision, and fully rely on their hearing to locate prey in total darkness, which is supported by their satellite-shaped facial disks that funnel the sound of their surroundings to their ears.";
            huntText2.innerHTML = "When it comes to locating prey, owls use their binocular vision and forward-facing eyes that have retinas tuned to low light levels to find prey. Some owls don't even use vision, and fully rely on their hearing to locate prey in total darkness, which is supported by their satellite-shaped facial disks that funnel the sound of their surroundings to their ears.";
            break;
        case 3:
            for (let currentElement of huntElementsList)
            {
                if (currentElement.classList.contains("stage4"))
                {
                    currentElement.classList.remove("stage4");
                }
                
                currentElement.classList.add("stage3");
            }

            huntStage.innerHTML = "Stage 3: Stalking and approaching the prey";
            huntText.innerHTML = "When approaching their next meal, owls use their unique feathers to break turbulence and reduce sound. This allows them to glide silently to a striking position, often without their prey knowing they're coming. Certain owls perch and ambush their prey, while others may hover around their prey and wait for the opportunity to strike their prey.";
            huntText2.innerHTML = "When approaching their next meal, owls use their unique feathers to break turbulence and reduce sound. This allows them to glide silently to a striking position, often without their prey knowing they're coming. Certain owls perch and ambush their prey, while others may hover around their prey and wait for the opportunity to strike their prey.";
            break;
        case 4:
            for (let currentElement of huntElementsList)
            {   
                currentElement.classList.add("stage4");
            }

            huntStage.innerHTML = "Stage 4: Striking the prey";
            huntText.innerHTML = "Owls, being raptors, kill off their prey by using their razor sharp talons instead of their beaks to pierce through their prey. Not all owls kill off their prey immediately however, because they may choose to bring them back to their nest and finish the job later on.";
            huntText2.innerHTML = "Owls, being raptors, kill off their prey by using their razor sharp talons instead of their beaks to pierce through their prey. Not all owls kill off their prey immediately however, because they may choose to bring them back to their nest and finish the job later on.";
            break;
        default:
            break;
    }
}

// Just removing or adding classes depending on the arrow the user presses
function toggleStageInfo(arrowDir)
{
    if (arrowDir === "left" && currentStageNum > 1)
    {
        currentStageNum--;
    }
    else if (arrowDir === "right" && currentStageNum < 4)
    {
        currentStageNum++;
    }

    viewStageInfo(currentStageNum);
}

leftArrow.addEventListener("click", function()
{
    toggleStageInfo("left");
});

rightArrow.addEventListener("click", function()
{
    toggleStageInfo("right");
});

// Page 4 Functions
// Checks every answer
function checkAns()
{
    if (!isQuizDone)
    {
        score = 0;

        let q1 = document.querySelector("input[name = 'q1']:checked").value;
        if (q1 === 'Strigiformes')
        {
            score++;
        }

        let q2 = document.querySelectorAll("input[name = 'q2']:checked");
        let selectedAns = Array.from(q2).map(function(checkbox)
        {
            return checkbox.value;
        });
        let correctAns = ['moretrue', 'rotate'];
        if (selectedAns.length === correctAns.length && selectedAns.every(function(ans){return correctAns.includes(ans);}))
        {
            score++;
        }

        let q3 = document.querySelector("input[name = 'q3']");
        let q3Ans = q3.value.toLowerCase();
        if (q3Ans === 'sound' || q3Ans === 'sounds')
        {
            console.log("yes");
            score++;
        }

        let q4 = document.querySelector("input[name = 'q4']:checked").value;
        if (q4 === 'tawny')
        {
            score++;
        }

        // For q5
        if (rangeValue >= 70)
        {
            score++;
        }

        scoreText.textContent = "Score: " + score;
        isQuizDone = true;
    }
    else
    {
        scoreText.textContent = "Please click retry to do the quiz again!";
    }
}

// Removes any previous input by the user
function resetQuiz()
{
    isQuizDone = false;
    scoreText.textContent = "Not submitted";
    qnList.forEach(function(qn)
    {
        switch (qn.type)
        {
            case "radio":
            case "checkbox":
                qn.checked = false;
                break;
            case "text":
                qn.value = '';
                break;
            case "range":
                qn.value = qn.defaultValue;
                break;
            default:
                break;
        }
    });
}

// Plays the sound you're suppose to listen to to do qn4
btnSound.addEventListener("click", function()
{
    owlSound.currentTime = 0;
    owlSound.play();
});

q5.addEventListener("input", function()
{
    rangeValue = q5.value;
});

btnSubmit.addEventListener("click", function()
{
    checkAns();
});

btnRetry.addEventListener("click", function()
{
    resetQuiz();
});

// Page 5 Functions
// A mini countdown before the game begins and will also call to create the game objects here
function gameCountdown()
{
    let interval = setInterval(function()
    {
        countdown--;
        btnPlay.textContent = countdown;

        if (countdown <= 0)
        {
            clearInterval(interval);
            btnPlay.textContent = "Go!";
            setTimeout(function()
            {
                btnPlay.textContent = '';
                btnPlay.classList.add("hide");
                createGrid();
            }, 1500);
        }

    }, 1000);
}

// Will return either empty, bomb or rat
function getRandomGridType()
{
    return gridTypes[Math.floor(Math.random() * gridTypes.length)];
}

// Updates game information (HP, total rats found, etc)
function updateStatus()
{
    updateHealthDisplay();
    ratsFoundDisplay.textContent = ratsFound;
}

// Uses appendChildren() here to create different grids of different types
function createGrid()
{
    gridGame.innerHTML = '';
    ratsFound = 0;
    ratsTotal = 0;
    maxHealth = 3;
    health = maxHealth;
    
    updateHealthDisplay();

    for (let item of gridItems)
    {   
        console.log(item);
        const gridTile = document.createElement("div");
        gridTile.classList.add("griditem");
        gridTile.textContent = '';
        let type = getRandomGridType();
        gridTile.dataset.hidden = type;

        if (type === 'rat')
        {
            ratsTotal++;
        }

        gridGame.appendChild(gridTile);
    }

    ratsTotalDisplay.textContent = ratsTotal;
}

// Renders either a red heart or broken heart depending on current HP
function updateHealthDisplay()
{
    healthDisplay.replaceChildren();
    for (let i = 0; i < maxHealth; i++)
    {
        const heartImg = document.createElement('img');
        
        if (i < health)
        {
            heartImg.src = fullHeartSrc;
            heartImg.alt = "A full heart";
            heartImg.title = "Full heart";
        }
        else
        {
            heartImg.src = brokenHeartSrc;
            heartImg.alt = "A broken heart";
            heartImg.title = "Broken heart";
        }

        heartImg.classList.add("heart");
        healthDisplay.appendChild(heartImg);
    }
}

function revealAllTiles()
{
    const allTiles = document.querySelectorAll(".griditem");
    allTiles.forEach(function(tile)
    {
        let type = tile.dataset.hidden;
        tile.classList.add(type);
        tile.classList.add("revealed");
    });
}

// This uses event delegation since there's a lot of grids
function clickTile(tile) 
{
    let gridTile = tile;
    const type = gridTile.dataset.hidden;

    if (gridTile.classList.contains("griditem") && !gridTile.classList.contains("revealed"))
    {
        gridTile.classList.add("revealed");

        // Will play some animations depending on what you got
        if (type === 'bomb')
        {
            owlSit2.classList.add("sad");
            setTimeout(function()
            {
                owlSit2.classList.remove("sad");
            }, 500);
            
            explodeSound.currentTime = 0;
            explodeSound.play();
            gridTile.classList.add('bomb');
            health--;
            if (health <= 0)
            {
                owlSit2.classList.add("dead");
                messageDisplay.textContent = "You lose!";
                revealAllTiles();
            }
        }
        else if (type === 'rat')
        {
            owlSit2.classList.add("happy");
            setTimeout(function()
            {
                owlSit2.classList.remove("happy");
            }, 500);
            
            tadaSound.currentTime = 0;
            tadaSound.play();
            gridTile.classList.add('rat');
            ratsFound++;
            if (ratsFound === ratsTotal)
            {
                messageDisplay.textContent = "You win!";
                revealAllTiles();
            }
        }
        else if (type === 'empty')
        {
            gridTile.classList.add('empty');
        }

        updateStatus();
    }
}

gridGame.addEventListener("click", function(event)
{
    const tile = event.target.closest(".griditem"); // closest is so that it will almost always guarantees to return caller (.griditem) as tile
    if (tile && !tile.classList.contains("revealed") && health > 0 && ratsFound < ratsTotal)
    {
        clickTile(tile);
    }
});

btnPlay.addEventListener("click", function()
{
    gameCountdown();
});

btnReset.addEventListener("click", function()
{
    // Reset to default values and brings back the play button
    maxHealth = 0;
    ratsFound = 0;
    ratsTotal = 0;
    countdown = 4;

    owlSit2.classList.remove("dead");
    updateStatus();
    gridGame.replaceChildren();
    ratsTotalDisplay.textContent = ratsTotal;
    btnPlay.textContent = "Click here to play game!";
    if (btnPlay.classList.contains("hide"))
    {
        btnPlay.classList.remove("hide");
    }
});