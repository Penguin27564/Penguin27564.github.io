
//#region Healthy Plate
var openPlateBtn = document.getElementById("toggle-plate-btn");
var plate = document.getElementById("plate-container");
var plateBody = document.getElementById("plate-container-body");
var plateOpen = false;

function TogglePlate()
{
    plateBody.classList.toggle("fade");
    if (plateOpen == false)
    {
        plateBody.style.display = "flex";
        openPlateBtn.textContent = "Close";
        plateOpen = true;
    }
    else
    {
        plateBody.style.display = "none";
        openPlateBtn.textContent = "Open";
        plateOpen = false;
    }
}

//Waits until button is clicked to run function
openPlateBtn.addEventListener("click", TogglePlate, false);
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
    else if (ID == 2) //Protein
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
    else if (ID == 3) //Fruits and Veg
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
        //Hide all if ID is not 1,2, or 3
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
var macrosbtn = document.getElementById("macrosbtn");

macrosbtn.addEventListener("click", ToggleMacros, false);

function ToggleMacros()
{
    macros.classList.toggle("fade");
    if (macrosOpen == false)
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

//Logic of the form
var bmrResult = document.getElementById("bmr-result");
var dacResult = document.getElementById("dac-result");
var splitResult = document.getElementById("split-result");
var genderSelect = document.getElementById("gender-form");
var activitySelect = document.getElementById("activity-form");
var form = document.getElementById("macros-form");
//Variables to put into calculations
var multipler;
var BMR;
var DAC;
var proteinAndCarbs;
var fats;

function displayResults()
{
    //Get the input values of the 3 numbers
    const weight = form.weight.value;
    const height = form.height.value;
    const age = form.age.value;

    //Get the option selected by the user
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

    //Calculate based on input
    DAC = BMR * multipler;

    proteinAndCarbs = DAC * 0.4 / 4;
    fats = DAC * 0.2 / 9;

    //Display results in each respective information box
    bmrResult.textContent = "Your BMR is: " + BMR.toFixed(2);
    dacResult.textContent = "Your DAC is: " + DAC.toFixed(2);
    splitResult.textContent = "Protein: " + proteinAndCarbs.toFixed(2) + "g" + '\n' +
                              "Carbohydrates: " + proteinAndCarbs.toFixed(2) + "g" + '\n' +
                              "Fats: " + fats.toFixed(2) + "g";
}
// #endregion