var finishedLoading = true;
var fs = require('fs');
var csv = require('csv-parse');
var bs = require('binarysearch');

var lastNameFiles = ['./data/last_name_probabilities.csv', './data/last_names.csv']
var maleFirstNameFiles;
var femaleFirstNameFiles;

function getLastNameParser(){
    var lastNameChoiceIndex;
    var lastNameChoice;

    var probabilityParser = csv({delimiter: ',', auto_parse: true}, function(err, data){
        return data;
        var min = 0;
        var max = parseFloat(data[data.length - 1][0]);
        var choice = parseFloat((Math.random() * (max - min) + min).toFixed(3));

        var pick = bs.closest(data, choice);

        if(data[pick][0] < choice){
            lastNameChoiceIndex = pick++;
            return "";
        }
        lastNameChoiceIndex = pick;
        return "";
    });

    probabilityParser.on('close', function(data){
        console.log(data)
    });

    var data = fs.createReadStream(lastNameFiles[0]).pipe(probabilityParser);
    //fs.createReadStream(lastNameFiles[1]).pipe(nameParser);
}

getLastNameParser();