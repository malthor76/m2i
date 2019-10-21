var euro=document.getElementById('euro');
var choix=document.getElementById('choix');
var validation= document.getElementById('validation');
var devise1=document.getElementById('devise');
var historique = document.getElementById('historique');


var histo = document.getElementById('histo');

var devises =
{
	"dollars":"1.11",
	"livre sterling":"0.91",
	"bitcoin":"0.00011",
	"yen":"117.82"
	
};

document.getElementById("validation").onclick=function()
	{
      
	 
			var euroMonnaie= parseFloat(euro.value);
			var res = (devises[choix.value]*euroMonnaie);
	 
	if (!isNaN(euroMonnaie)&& euroMonnaie>=0) 
       {
	devise1.value=res.toFixed(2);
	
		
	histo.innerHTML += euro.value + " euro = " + res.toFixed(2) + " " + choix.value + "<br>";
	  }
	else
		alert("veuillez inserer un montant valide");
	  
	  
	  
 }	
 
 
var log = document.getElementById('log');


document.addEventListener ('keydown', logKey);

function logKey(touche)

{
	
	log.innerText = ("Le keyCode = " + touche.keyCode); 
	if (touche.keyCode==68) { 
		choix.value = "dollars";
		validation.click();
	}
	if (touche.keyCode==66){ choix.value = "bitcoin";
							validation.click();   }
	
	
	if (touche.keyCode==76){ choix.value="livre sterling"                   
								validation.click();   }
	
	
	if (touche.keyCode== 89){ choix.value="yen"                   
								validation.click();   }              
} 
 
 

	












