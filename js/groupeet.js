var basedon = { "animals":   "Tigers\nLions\nWolves\nJaguars\nBears\nCheetahs\nLeopards\nPanthers\nGorillas",
                    "birds":     "Hawks\nEagles\nKites\nOspreys\nFalcons\nBuzzards\nOwls",
                    "cars":      "Ferrari\nMercedes\nLexus\nBugatti\nJaguar\nAudi\nCadillac\nLamborghini\nBentley\nPorsche\nVolvo",
                    "dinosaurs": "Velociraptors\nTriceratops\nStegosaurus\nT-Rex\nBrachiosaurus\nAllosaurus\nApatosaurus",
                    "elements":  "Oxygen\nHydrogen\nHelium\nCarbon\nNeon\nCopper\nZinc\nCobalt\nTitanium\nSodium",
                    "greekgods": "Zeus\nAthena\nHera\nHermes\nArtemis\nApollo\nPoseidon\nAres\nEros\nHercules\nVenus",
                    "numbers":   "Team 1\nTeam 2\nTeam 3\nTeam 4\nTeam 5\nTeam 6\nTeam 7\nTeam 8\nTeam 9\nTeam 10",
                    "sports":    "Giants\nYankees\nMets\nRangers\nKnicks\nJets\nRays",
                    "warriors":  "Knights\nSpartans\nNinjas\nVikings\nSamurai\nLegionaires\nBarbarians"
                  };

  $(function() {
      $("#basedon").change(function() {
        $("#actualteams").val(basedon[$(this).val()]);
      });
      
      $("#basedon").change();

    });