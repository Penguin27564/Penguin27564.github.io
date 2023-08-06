
//#region Healthy Plate
var OpenPlateBtn = document.querySelector("#toggle-plate-btn");
var plate = document.querySelector("#plate-container");
var plateBody = document.querySelector("#plate-container-body");
var isOpen = false;

function HidePlate()
{
    plate.style.display = "none"; 
}

HidePlate();

function ShowPlate()
{ 
    HidePlate();
    if(isOpen)
    {
        OpenPlateBtn.textContent = "Open";
        plate.style.display = "none";
    }
    else
    {
        OpenPlateBtn.textContent = "Close";
    }
    isOpen = !isOpen;
}

OpenPlateBtn.addEventListener("click", function () 
    {
        ShowPlate();
        plateBody.classList.toggle("fade");
    }
);
//#endregion

// #region Nav Bar
function ToggleNavBar() 
{
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } 
    else {
      navbar.className = "navbar";
    }
}

ToggleNavBar();
// #endregion

// #region Healthy Plate

//Toggle sections info
var wholegrains = document.getElementById("wholegrains");
var protein = document.getElementById("protein");
var fruitveg = document.getElementById("fruitveg");

function ToggleSection(ID)
{
    if (ID == 1) //Wholegrains
    {
        wholegrains.className = "wholegrains";
        //Hide other segments
        if (protein.className === "protein") 
        {
            protein.className += " hidden";
        }
        if (fruitveg.className === "fruitveg") 
        {
            fruitveg.className += " hidden";
        }
    }
    else if (ID == 2)
    {
        protein.className = "protein";
        //Hide other segments
        if (wholegrains.className === "wholegrains") 
        {
            wholegrains.className += " hidden";
        }
        if (fruitveg.className === "fruitveg") 
        {
            fruitveg.className += " hidden";
        }
    }
    else if (ID == 3)
    {
        fruitveg.className = "fruitveg";
        //Hide other segments
        if (wholegrains.className === "wholegrains") 
        {
            wholegrains.className += " hidden";
        }
        if (protein.className === "protein") 
        {
            protein.className += " hidden";
        }
    }
    else
    {
        if (wholegrains.className === "wholegrains") 
        {
            wholegrains.className += " hidden";
        }
        if (protein.className === "protein") 
        {
            protein.className += " hidden";
        }
        if (fruitveg.className === "fruitveg") 
        {
            fruitveg.className += " hidden";
        }
    }
}

ToggleSection(0);
// #endregion

// #region Macros Form
// To toggle the macros form
var macros = document.getElementById("macros");
var macrosOpen = false;

document.getElementById("macrosbtn").onclick = function()
{
    macros.classList.toggle("fade");
    if (!macrosOpen)
    {
        macros.style.display = "block";
        macrosOpen = true;
    }
    else
    {
        macros.style.display = "none";
        macrosOpen = false;
    }
};

var bmrResult = document.querySelector("#bmr-result");
var dacResult = document.querySelector("#dac-result");
var splitResult = document.querySelector("#split-result");
var genderSelect = document.querySelector("#gender-form");
var activitySelect = document.querySelector("#activity-form");
var form = document.querySelector("#macros-form");
var multipler;
var BMR;
var DAC;
var proteinAndCarbs;
var fats;
//var macrosResult = document.querySelector("#macros-results");

function displayResults()
{
    const weight = form.weight.value;
    const height = form.height.value;
    const age = form.age.value;

    if (activitySelect.value == "Little to None")
    {
        multipler = 1.2;
    }
    else if (activitySelect.value == "Light, few times a week")
    {
        multipler = 1.375;
    }
    else if (activitySelect.value == "Moderate, 3-5 times a week")
    {
        multipler = 1.55;
    }
    else if (activitySelect.value == "Heavy, 6-7 times a week")
    {
        multipler = 1.725;
    }

    if (genderSelect.value == "Male")
    {
        BMR = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
    }
    else if (genderSelect.value == "Female")
    {
        BMR = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }
    else
    {
        BMR = 0;
    }

    DAC = BMR * multipler;

    proteinAndCarbs = DAC * 0.4;
    fats = DAC * 0.2;

    bmrResult.textContent = "Your BMR is: " + BMR.toFixed(2);
    dacResult.textContent = "Your DAC is: " + DAC.toFixed(2);
    splitResult.textContent = "Protein: " + proteinAndCarbs.toFixed(2) + "g" + '\n' +
                              "Carbohydrates: " + proteinAndCarbs.toFixed(2) + "g" + '\n' +
                              "Fats: " + fats.toFixed(2) + "g";
}
// #endregion