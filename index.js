function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(tlag = "*") {
    
    return function(blag = "special") {
        return `You are ${tlag}${blag}${tlag}!`
    }
}

saturdayFun();
mondayWork();
const encouragingPromptFunction = wrapAdjective("!!!")