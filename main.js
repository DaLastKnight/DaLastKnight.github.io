// Menu Nav variables
const btnMenu = document.querySelector("#menu");
const meText = document.querySelector("#me");
const btnMenuPagesList = document.querySelector("nav ul");
const btnAbtOwl = document.querySelector("#abtowl");
const btnOwlSpecies = document.querySelector("#owlspecies");
const btnOwlHunt = document.querySelector("#owlhunt");
const btnFunFacts = document.querySelector("#funfacts");
const btnOwlGame = document.querySelector("#owlgame");

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
const arrowsList = document.querySelectorAll(".arrow");
const textList = document.querySelectorAll(".text");

let currentStageNum = 1;

const huntElementsList = document.querySelectorAll(".hunt");
const owlSit = document.querySelector("#owlsit");
const owlFly = document.querySelector("#owlfly");
const rat = document.querySelector("#rat");
const cheese = document.querySelector("#cheese");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");

// Page 4 variables

const qnList = document.querySelectorAll("input[name ^= 'q']")
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
const fullHeartSrc = "images/hearticon.png";
const brokenHeartSrc = "images/heartbrokenicon.png";
const healthDisplay = document.querySelector("#health");
const ratsFoundDisplay = document.querySelector("#ratsfound");
const ratsTotalDisplay = document.querySelector("#ratstotal");
const messageDisplay = document.querySelector("#message");
const btnReset = document.querySelector("#reset");

let gridItems = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
let maxHealth = 3;
let health = 0;
let ratsFound = 0;
let ratsTotal = 0;

// Stop putting () for functions inside event listeners unless it's newly initialised in there

// Functions for menu navigation

btnMenu.addEventListener("click", toggleMenus);

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
    currentStageNum = 1;
    toggleStageInfo("nil");
});

btnFunFacts.addEventListener("click", function()
{
    showPage(4);
});

btnOwlGame.addEventListener("click", function()
{
    showPage(5);
    createGrid();
});

hideall();
showPage(1);

// Page 2 Functions
function viewTrueInfo(infoNum)
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
        let selectedAns = Array.from(q2).map(checkbox => checkbox.value);
        let correctAns = ['moretrue', 'rotate'];
        if (selectedAns.length === correctAns.length && selectedAns.every(ans => correctAns.includes(ans)))
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

        scoreText.textContent = `Score: ${score}`;
        isQuizDone = true;
    }
    else
    {
        scoreText.textContent = "Please click retry to do the quiz again!";
    }
}

function resetQuiz()
{
    isQuizDone = false;
    scoreText.textContent = "Not submitted"
    qnList.forEach(qn =>
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
function getRandomGridType()
{
    return gridTypes[Math.floor(Math.random() * gridTypes.length)];
}

function updateStatus()
{
    updateHealthDisplay()
    ratsFoundDisplay.textContent = ratsFound;
}

function createGrid()
{
    gridGame.innerHTML = '';
    ratsFound = 0;
    ratsTotal = 0;
    maxHealth = 3;
    health = maxHealth;
    
    updateHealthDisplay();

    for (let {} of gridItems)
    {   
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
    allTiles.forEach(tile =>
    {
        let type = tile.dataset.hidden;
        tile.classList.add(type);
        tile.classList.add("revealed");
    });
}

function clickTile(tile) 
{
    let gridTile = tile;
    const type = gridTile.dataset.hidden;

    if (gridTile.classList.contains("griditem") && !gridTile.classList.contains("revealed"))
    {
        gridTile.classList.add("revealed");

        if (type === 'bomb')
        {
            gridTile.classList.add('bomb');
            health--;
            if (health <= 0)
            {
                messageDisplay.textContent = "You lose!";
                revealAllTiles();
            }
        }
        else if (type === 'rat')
        {
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
    const tile = event.target.closest(".griditem");
    if (tile && !tile.classList.contains("revealed") && health > 0 && ratsFound < ratsTotal)
    {
        clickTile(tile);
    }
});

btnReset.addEventListener("click", createGrid)