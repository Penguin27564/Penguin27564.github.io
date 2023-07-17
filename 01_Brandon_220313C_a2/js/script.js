
/*For opening and closing healthy plate*/
const OpenPlatebtn=document.querySelector("#HPlateOpenBtn");
const ClosePlateBtn=document.querySelector("#HPlateCloseBtn");
var plate=document.querySelector("#Plate1");

HidePlate();

function HidePlate()
{ //function to hide all pages
    plate.style.display="none"; 
}

function ShowPlate(displayType)
{ //function to show selected page no
    HidePlate(); 
    plate.style.display=displayType;
}

OpenPlatebtn.addEventListener("click", function () 
{
    ShowPlate("block");
}
);

ClosePlateBtn.addEventListener("click", function () 
{
    ShowPlate("none");
}
);