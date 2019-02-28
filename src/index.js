// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
        var coins ={
            'H' : 50,
            'Q' : 25,
            'D' : 10,
            'N' : 5,
            'P' : 1
    }
    var result = {};
    if (currency <=0){
    // result.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
    }else if(currency >= 10000){
        result.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
    }
    else{
            for(key in coins){
                var currentNumOfCurrrentCoin = 0;
                currentNumOfCurrrentCoin = currency/coins[key];
            if(currentNumOfCurrrentCoin >= 1){                  
                    result[key] = currentNumOfCurrrentCoin-(currentNumOfCurrrentCoin%1);

            } 
            if(currentNumOfCurrrentCoin%1==0) break;       
            currency= currency-(currentNumOfCurrrentCoin-(currentNumOfCurrrentCoin%1))*coins[key];
            }
            
    }
    return result;
 }
