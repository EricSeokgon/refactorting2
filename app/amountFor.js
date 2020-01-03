function amountFor(perf, play) {
       let thisAmount =0;

        switch (play.type) {
            case "비극":
                thisAmount=40000;
                if (perf.audience > 30) {
                    thisAmount += 1000 * (perf.audience - 30);
                }
                break;
            case "희극":
                thisAmount = 30000;
                if (perf.audience > 20) {
                    thisAmount += 10000 + 500 * (perf.audience - 20);
                }
                thisAmount += 300 * perf.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르 : ${play.type}`);
        }
    return thisAmount;
}