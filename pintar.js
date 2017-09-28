var Table = require('cli-table');

const doIt = function(weathers)
{
    var table = new Table({
      head: ['City', 'Temperature']
    , colWidths: [50, 50]
    });

    weathers.forEach(function(item){
      table.push(
        [item.name, item.temp]
      );
    })

    return table.toString();
}

module.exports = doIt;
