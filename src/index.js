module.exports = function toReadable (number) {
    let result = "";
    
    if(Math.trunc(number/100)>0){
        if(number%100==0){
            n = Math.trunc(number/100);
            number = number%100;
            return numberToString(n)+" hundred";
        }else{
            n = Math.trunc(number/100);
            number = number%100;
            result += numberToString(n)+" hundred "
        }
    }

    if(Math.trunc(number/10)>0){
        if(number>19 && number%10==0){
            n = Math.trunc(number/10);
            result += numberzero(n*10);
            return result;
        }else if(number>=19 && number < 100){
            if(number<20){
                result += numberToString(number);
            }else{
                n = Math.trunc(number/10);
                result += numberzero(n*10)+ " ";
                n = number%10;
                result += numberToString(n);
            }
            
        }else{
            result += numberToString(number);
        }
        
    }else{
        result += numberToString(number);
    }
    return result;
}

function numberzero(n){
    if(n == 20 ){
        return 'twenty';
    }
    if(n == 30 ){
        return 'thirty';
    }
    if(n == 40 ){
        return 'forty';
    }
    if(n == 50 ){
        return 'fifty';
    }
    if(n == 60 ){
        return 'sixty';
    }
    if(n == 70 ){
        return 'seventy';
    }
    if(n == 80 ){
        return 'eighty';
    }
    if(n == 90 ){
        return 'ninety';
    }
}

function numberToString(n){
    if(n === 0){
        return 'zero';
    }
    if(n == 1){
        return 'one';
    }
    if(n == 2){
        return 'two';
    }
    if(n == 3){
        return 'three';
    }
    if(n == 4){
        return 'four';
    }
    if(n == 5){
        return 'five';
    }
    if(n == 6){
        return 'six';
    }
    if(n == 7){
        return 'seven';
    }
    if(n == 8){
        return 'eight';
    }
    if(n == 9){
        return 'nine';
    }
    if(n == 10){
        return 'ten';
    }
    if(n == 11){
        return 'eleven';
    }
    if(n == 12){
        return 'twelve';
    }
    if(n == 13){
        return 'thirteen';
    }
    if(n == 14){
        return 'fourteen';
    }
    if(n == 15){
        return 'fifteen';
    }
    if(n == 16){
        return 'sixteen';
    }
    if(n == 17){
        return 'seventeen';
    }
    if(n == 18){
        return 'eighteen';
    }
    if(n == 19){
        return 'nineteen';
    }
}
