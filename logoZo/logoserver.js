let logo = document.getElementById('zorp');

cef.on("game:hud:visivel", (qual) =>{
	logo.str = "C:/logoZo/" + qual + ".png";
});