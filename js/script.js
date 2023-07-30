
//#region Healthy Plate
const OpenPlateBtn = document.querySelector("#toggle-plate-btn");
var plate = document.querySelector("#plate-container");
var isOpen = false;

HidePlate();

function HidePlate()
{
    plate.style.display = "none"; 
}

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

//#region Wholegrains
var wholegrains = document.querySelector("wholegrains");
const scrollToWholegrainsBtn = document.querySelector("#TopLeft");

function show()
{
    wholegrains.style.opacity = 1;
}

scrollToWholegrainsBtn.addEventListener("click", function()
    {
        show();
    }
);
//#endregion