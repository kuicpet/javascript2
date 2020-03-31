const data = [
    { principal:2500,time:1.8 },
    { principal:1000,time:5 },
    { principal:3000,time:1 },
    { principal:2000,time:3 },
];

function interestCalculator ([]) {
    let principal = 2500;
    let time = 1;
    let rate = 4;
    let interest = (principal*time*rate)/100;
    let interestData = [{principal,time,rate,interest}];
    
        if(principal >= 2500 && time > 1 && time < 3 ){
            rate == 3;
        }
        else if(principal >= 2500 && time >= 3){
            rate == 4;
        }
        else if(principal < 2500 && time <= 1){
            rate == 2;
        }else{
            rate == 1;
        };
        
        console.log("Interest is "+ interest);
        console.log(interestData);
        return interestData; 
    
    
};
interestCalculator(data);