var Mnames	=	[];
var Grouped	=	[];

var basedon = { 
					"animals":   "Tigers\nLions\nWolves\nJaguars\nBears\nCheetahs\nLeopards\nPanthers\nGorillas",
                    "cars":      "Ferrari\nMercedes\nLexus\nBugatti\nJaguar\nAudi\nCadillac\nLamborghini\nBentley\nPorsche\nVolvo",
                    "dinosaurs": "Velociraptors\nTriceratops\nStegosaurus\nT-Rex\nBrachiosaurus\nAllosaurus\nApatosaurus",
                    "greekgods": "Zeus\nAthena\nHera\nHermes\nArtemis\nApollo\nPoseidon\nAres\nEros\nHercules\nVenus",
                    "sports":    "Giants\nYankees\nMets\nRangers\nKnicks\nJets\nRays",
                    "warriors":  "Knights\nSpartans\nNinjas\nVikings\nSamurai\nLegionaires\nBarbarians"
                  };

var arranged = [];
//arranged.grpMember = 'joell';
//arranged.grpName = 'zeus';
//Grouped.push(arranged);



  $(function() {
      $("#basedon").change(function() {
        $("#actualteams").val(basedon[$(this).val()]);
      });

      $("#basedon").change();

    });

  $(document).on("vclick","#generate",function() {


	var names=$('#members');
	var numberOfgroups=$('#numberOfgroups').val();
	var groupName=$("#actualteams").val().split('\n');
	Mnames = names.val().split('\n');

	shuffle(Mnames);
	//console.log(Mnames);
	//fruits.splice(0,1);

for(var j=0;j<=Mnames.length;j++)
	{
	for(var i=0;i<numberOfgroups;i++)
	{
		console.log("-----------------------------------------------"+ i);
		arranged.push(groupName[i]);
		console.log(arranged);
		
			Grouped.push(arranged[i]=Mnames.splice(0,1));
			console.log(Grouped);
		
		console.log("-----------------------------------------------"+ i);
	}
}
	

Mnames=[];
Grouped=[];

  });


  function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}