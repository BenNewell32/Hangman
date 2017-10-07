//Select Random Word at Start//

var phrases = ["aaaarrrrgggghhhh ","ahoy ","ahoy, matey ","ahoy, me hearties ","all hand hoay ","avast ye ","aye ","batten down the hatches ","blimey ","blow me down ","blow the man down ","booty ","buccaneer ","bucko ","cat o'nine tails ","cleave him to the brisket ","corsair ","crow's nest ","cutlass ","davy jones' locker ","dead men tell no tales ","doubloons ","feed the fish ","hang 'im from the yardarm ","head ","heave ho ","hempen halter ","hornswaggle ","jacob's ladder ","jolly roger ","keelhaul ","lad, lass, lassie ","landlubber ","letters of marque ","me ","mizzen ","old salt ","pieces of eight ","pillage ","poop deck ","rum ","run a shot across the bow ","savvy? ","scallywag ","scurvy dog ","scuttle ","seadog ","shark bait ","shipshape ","shiver me timbers ","son of a biscuit eater ","splice the mainbrace ","thar she blows ","three sheets to the wind ","walk the plank ","ye ","yo ho ho "];
var defs = ["exhortation of discontent or disgust","hello!","hello, my friend!","the same as saying hello my friends!","comparable to all hands on deck","stop and check this out or pay attention","yes","put everything away on the ship and tie everything down because a storm is brewing","exhortation of surprise","expression of shock of disbelief akin to holy crap","command to kill someone","treasure","a pirate","a buccaneer","a whip with nine strands","to cut across the chest, from one shoulder to the lower abdomen","pirates in the mediterranean sea","small platform atop the mast where the lookout stands","short heavy curved bladed sword used by pirates","fabled, mythical place at the bottom of the ocean where the evil spirit of davy jones brings sailor and pirates to die","phrase indicating to leave no survivors","other coins or found in pirate hoards and stashes","will soon die","punishment of those captured in battle","the pirate ship's toilet","give it some muscle and push it","a noose for hanging","to defraud or cheat out of money or belongings","the rope ladder one uses to climb aboard a sloop","pirate's flag including white skull and crossbones over a black field","punishment in which a person where dragged underneath the pirate ship from side to side and was lacerated by the barnacles on the vessel","a younger person","big, slow clumsy person who doesn't know how to sail","letters issue from governments during wartime to privateers endorsing the piracy of another vessel","my","third mast from the bow of the ship on ships that have three or more masts","an experienced sailor","coins or found in pirate stashes","rob, sack or plunder","the part of the ship farthest to the back, which is usually above the captain's quarters. this is not the bathroom.","pirate's traditional alcoholic beverage","warning shot to another vessel's captain","do you understand and do you agree?","mild insult akin to rapscallion or rogue","the pirate is talking directly to you with mild insult","to sink a ship","old pirate or sailor","will soon join davy jones' locker","cleaned up and under control","comparable to holy crap!","insult directed towards someone you don't like","give the crew a drink!","whale sighting","someone who is very drunk. one sheet is mildly drunk and four sheets is passed out.","punishment in which person walks off a board jutting over the side of the ship while at sea. the consequence is drowning and a visit to davy jones' locker.","you","cheerful exhortation to demand attention"];
var random1 = Math.random();
var wordchoice = phrases[Math.floor(random1 * phrases.length)];

//get phrase//

// console.log(wordchoice);

//Make hangman dashes based on length//
var wordlength = wordchoice.length;

// document.getElementById("start").innerHTML =wordchoice.length;

/////////////////////////////
//WRITE WORD AT TOP OF PAGE//
/////////////////////////////
for (i = 0; i < wordlength; i++) { 

	///////////////////////////////////////////
	//?? HOW DO I LOOK FOR LOWERCASEEEEEEEE??//
	///////////////////////////////////////////

			if (wordchoice[i]=="a" ||
			wordchoice[i]=="b" ||
			wordchoice[i]=="c" ||
			wordchoice[i]=="d" ||
			wordchoice[i]=="e" ||
			wordchoice[i]=="f" ||
			wordchoice[i]=="g" ||
			wordchoice[i]=="h" ||
			wordchoice[i]=="i" ||
			wordchoice[i]=="j" ||
			wordchoice[i]=="k" ||
			wordchoice[i]=="l" ||
			wordchoice[i]=="m" ||
			wordchoice[i]=="n" ||
			wordchoice[i]=="o" ||
			wordchoice[i]=="p" ||
			wordchoice[i]=="q" ||
			wordchoice[i]=="r" ||
			wordchoice[i]=="s" ||
			wordchoice[i]=="t" ||
			wordchoice[i]=="u" ||
			wordchoice[i]=="v" ||
			wordchoice[i]=="w" ||
			wordchoice[i]=="y" ||
			wordchoice[i]=="x" ||
			wordchoice[i]=="z" ||
			wordchoice[i]=="A" ||
			wordchoice[i]=="B" ||
			wordchoice[i]=="C" ||
			wordchoice[i]=="D" ||
			wordchoice[i]=="E" ||
			wordchoice[i]=="F" ||
			wordchoice[i]=="G" ||
			wordchoice[i]=="H" ||
			wordchoice[i]=="I" ||
			wordchoice[i]=="J" ||
			wordchoice[i]=="K" ||
			wordchoice[i]=="L" ||
			wordchoice[i]=="M" ||
			wordchoice[i]=="N" ||
			wordchoice[i]=="O" ||
			wordchoice[i]=="P" ||
			wordchoice[i]=="Q" ||
			wordchoice[i]=="R" ||
			wordchoice[i]=="S" ||
			wordchoice[i]=="T" ||
			wordchoice[i]=="U" ||
			wordchoice[i]=="V" ||
			wordchoice[i]=="W" ||
			wordchoice[i]=="Y" ||
			wordchoice[i]=="X" ||
			wordchoice[i]=="Z"  
			){
			document.write("_");
		}
		else if (wordchoice[i]=="  "){
			document.write("  ");
		}
		else {
	    document.write(wordchoice[i]);
		}
};

///////////////////////
//WHEN KEY IS PRESSED//
///////////////////////

//have letter show up on screen//
var hoverletter = document.addEventListener("click", afunction);
var keyhit = [";",",",":","-"," ","'","!","?"];
var selected = [];


function afunction(){
	//console.log classes//
	////////////////console.log(event.target);
	////////////////console.log(event.target.classList);

	//push to "keyhit" array//
	keyhit.push(event.target.classList[0]);
	////////////////console.log(keyhit);
	selected.push(event.target.classList[0]);
	console.log(selected);
    document.getElementById("selected").innerHTML =selected;
    /////////////////////////////////////////////////////
    //LOOP THROUGH WORD LETTERS FOR EACH BUTTON PRESSED//
    /////////////////////////////////////////////////////
    //when user clicks letter, identify letter and unhide value//
	var shown =[];
	for (i = 0; i < wordlength-1; i++) { 
		if (wordchoice[i] == keyhit[0]){
			shown.push(wordchoice[i]);		
		}
		else if (wordchoice[i] == keyhit[1]){
			shown.push(wordchoice[i]);				
		}
		else if (wordchoice[i] == keyhit[2]){
			shown.push(wordchoice[i]);								
		}
		else if (wordchoice[i] == keyhit[3]){
			shown.push(wordchoice[i]);								
		}
		else if (wordchoice[i] == keyhit[4]){
			shown.push(wordchoice[i]);								
		}
		else if (wordchoice[i] == keyhit[5]){
			shown.push(wordchoice[i]);								
		}
		else if (wordchoice[i] == keyhit[6]){
			shown.push(wordchoice[i]);								
		}
		else if (wordchoice[i] == keyhit[7]){
			shown.push(wordchoice[i]);	
		}					
		else if (wordchoice[i] == keyhit[8]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[9]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[10]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[11]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[12]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[13]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[14]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[15]){
			shown.push(wordchoice[i]);		
		}
		else if (wordchoice[i] == keyhit[16]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[17]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[18]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[19]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[20]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[22]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[23]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[24]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[25]){
			shown.push(wordchoice[i]);	
		}
		else if (wordchoice[i] == keyhit[26]){
			shown.push(wordchoice[i]);	
		}
		else {
			shown.push("_");
		}
	};
	//UPDATE WORD ON PAGE
	var shownfinal= shown.toString();
	document.getElementById("word").innerHTML =shownfinal;



////////
//LIFE//
////////
	var life=10;
	var lifecheck=0;
	
	///////////////////////////////////////////////////////////
	//LOOP THROUGH EACH LETTER HIT AND SEE IF ITS IN THE WORD//
	///////////////////////////////////////////////////////////
	//change life -1 everytime key hit is not a wordchoice[i]//
	for (i = 0; i < 27; i++) { 
		if (selected[0] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[1] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[2] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[3] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[4] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[5] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[6] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[7] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[8] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[9] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[10] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[11] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[12] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[13] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[14] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[15] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[16] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[17] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[18] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[19] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[20] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[21] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[22] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[23] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[24] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[25] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[26] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
		lifecheck=0;
		for (i = 0; i < 27; i++) { 
			if (selected[27] !== shown[i]){

				lifecheck++;		
			} 
		}
		if (lifecheck==27){
			life--;
		}
	
	var lifefinal=life.toString();
	document.getElementById("life").innerHTML =lifefinal;
	console.log("life: " + life);
		////////////////console.log("lifecheck: " +lifecheck);
		////////////////console.log("keyhit: " +keyhit);
		////////////////console.log("shownfinal: " +shownfinal);
	lifecheck=0;
		////////////////console.log("lifecheck: " +lifecheck);

////////
//LOSS//
////////
	//when life is 0 losses go up end//
	//when losses =3 go to loss.html//
	var losses=0;

	if (life==0){
		losses++;
		lifecheck=0;
		life=10;
	    lifefinal = "10";
	    document.getElementById("life").innerHTML =lifefinal;
	    //console.log(lifefinal);
	    //console.log(lifecheck);
	    console.log("Losses: " + losses);

	    //unable to get sound to work...//
		// var audio = new Audio('../assets/data/AngryPirate');
		// audio.play();
		
        

	    if(!alert('Me booty will never be yours! Again?')){
	    	window.location.reload();
	    	var win = 0;
			localStorage.setItem("win", 1+1)
		console.log(localStorage.getItem("win"));
		console.log(wordchoice);
	    }


	}

		var lossesfinal=losses.toString();
	document.getElementById("losses").innerHTML =lossesfinal;

////////
//WIN//
////////
	//when life is 0 losses go up end//
	var wins=0;
	if (!shownfinal.includes("_")) {
		wins++;
		lifecheck=0;
		life=10;
	    lifefinal = "10";
	    document.getElementById("life").innerHTML =lifefinal;
	    console.log(wordchoice);
	    console.log("Life Resets: " + life);
	    // console.log(lifefinal);
	    //console.log(lifecheck);
	    console.log("Wins: " + wins);
	    if(!alert('aaaarrrrgggghhhh... you bested me this tyme me lad. Dare another?')){window.location.reload();}
	    //document.onload(doAdelay());
	}
	var winsfinal=wins.toString();
	document.getElementById("wins").innerHTML =winsfinal;
	
	};
///////////////////
//Selected Letter//
///////////////////
	//when letter is selected, turn background black//


////////
//HINT//
////////
	//click the hint button to reveal description//
	//must match item in array to same length in a different array//
	//reveal//

var hoverletter2 = document.addEventListener("click", bfunction);
var defchoice = defs[Math.floor(random1 * phrases.length)];

function bfunction(){
event.target.classList[0]
if (event.target.classList[0]=="nav-link") {
		document.getElementById("hint").innerHTML =defchoice;
	};
};
