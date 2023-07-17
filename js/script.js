
/*For opening and closing healthy plate*/
const OpenPlateBtn = document.querySelector("#PlateOpenBtn");
var plate = document.querySelector("#PlateContainer");
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
ClosePlateBtn.addEventListener("click", function () 
    {
        ShowPlate();
    }
);