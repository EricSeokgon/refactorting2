function amountFor(aPerformance, play) {
       let result =0;

        switch (playFor(aPerformance).type) {
            case "비극":
                result=40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "희극":
                result = 30000;
                if (aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`);
        }
    return result;
}

function playFor(aPerformance) {
    return plays[aPerformance.displayId];
}