
//#region Healthy Plate
var OpenPlateBtn = document.querySelector("#toggle-plate-btn");
var plate = document.querySelector("#plate-container");
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
        plate.style.display = "flex";
    }
    isOpen = !isOpen;
}

OpenPlateBtn.addEventListener("click", function () 
    {
        ShowPlate();
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