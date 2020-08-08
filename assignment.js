// feet to mile calculator

function feetToMile(feet){
    if(feet<0){
        alert("Please insert valid Info")
    }else{
        var oneMile = 5280;
        var mile = feet/oneMile;
        return mile + " mile";
    }
}
console.log(feetToMile(100000));





// Wood Calculator
function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed < 0 ){
        alert("Something is wrong!");
    }else{
    var chairWood = 1;
    var tableWood = 3;
    var bedWood = 5;
    
    var totalChairWood =  chair *chairWood;
    var totalTableWood = table * tableWood;
    var totalBedWood = bed * bedWood;

    var totalWoodNeeded = totalChairWood + totalTableWood + totalBedWood;

    return totalWoodNeeded + " cubic feet";
    }
}

console.log(woodCalculator(1,1,5));







// brick Calculator

function brickCalculator(floor){
    if(floor<0){
        alert("Something is wrong!")
    }else{
            var perFeet = 1000;

            if(floor <= 10){
                var brickNeeded =  (15 * perFeet)*floor;
                return brickNeeded + " pcs brick";

            }else if(floor >=10 && floor<=20){
                
                var moreThenTenFloorCount = floor-10;
                var oneToTenBrickNeeded = (15 * perFeet)*10;
                var tenToTwenty = (12 * perFeet) * moreThenTenFloorCount;
                var totalBrickNeeded = oneToTenBrickNeeded + tenToTwenty;
                return totalBrickNeeded + " pcs Brick";

            }
            else{
                var moreThenTwentyFloorCount = floor-20;

                var oneToTen = (15* perFeet)*10;
                var tenToTwenty = (12 * perFeet)*10;
                var upToTwenty = (10 * perFeet) * moreThenTwentyFloorCount;

                var totalBrickNeeded =  oneToTen + tenToTwenty + upToTwenty;
                return totalBrickNeeded +" pcs Brick"
            }
        }
}
console.log( brickCalculator(10))








// lowest Number  or tiny friend 

function tinyFriend( age ){
    var lowest = age[0];
    for(var i=0; i<age.length; i++){
        var currentAge = age[i];
        if(currentAge<lowest){
            lowest = currentAge;
        }
    }
    return lowest + " years old ";
}
console.log(tinyFriend([2,6,5,10,520,4,9]))