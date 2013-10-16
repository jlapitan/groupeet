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

  var per = Mnames.length/numberOfgroups;

	shuffle(Mnames);



var aytem=chunk(Mnames,per);

$("#generatedGroups").html("");

for(var x=0;x<numberOfgroups;x++)
{
  //console.log(groupName[x]+" || "+aytem[x]);
$("#generatedGroups").append(
                          "<h3>"+groupName[x]+"</h3>" +
                          "<ul>" +
                          "<li>" + aytem[x] + "</li>"+
                          "</ul>"

                        );

}




});




/**********************************************/
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


function chunk(arr, len) {

var items=[];
  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}



