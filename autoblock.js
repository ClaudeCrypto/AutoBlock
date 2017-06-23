var fetch = require('node-fetch');
var dollars = 'USD'

for(var loopCoin of ['ETH', 'BTC', 'LSK',]){
fetch('https://min-api.cryptocompare.com/data/price?fsym='+loopCoin+'&tsyms='+dollars)
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
}