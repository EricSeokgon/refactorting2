let invoices =
    [
        {
            "customer": "BigCo",
            "performances": [
                {
                    "playID": "hamlet",
                    "audience": 55
                },
                {
                    "playID": "as-like",
                    "audience": 35
                },
                {
                    "playID": "othello",
                    "audience": 40
                }
            ]
        }
    ];
let plays = {
    "hamlet": {"name": "Hamlet", "type": "tragedy"},
    "as-like": {"name": "As You Like It", "type": "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
};

function statement(invoice, plays) {
    let result = `청구 내역 ( 고객명 : ${invoice.customer})\n`;
    for (let perf of invoice.performance) {
        result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`;
    }
    let totalAmount = appleSauce();
    result += `총액: ${usd(totalAmount)}\n`;
    result += `적립 포인트: ${(totalVolumeCredits())}점\n`;
    return result;
}

function appleSauce() {
    let totalAmount = 0;
    for (let perf of invoice.performance) {
        totalAmount += amountFor(perf);
    }
    return totalAmount;
}

function totalVolumeCredits() {
    let volumeCredits = 0;
    for (let perf of invoice.performance) { // 값 누적 부분을 별도 for문으로 분리
        volumeCredits += volumeCreditsFor(perf);
    }
    return volumeCredits;
}

function volumeCreditsFor(perf) {
    let result = 0;
    result += Math.max(perf.audience - 30, 0);
    if ("희극" === playFor(perf).type) result += Math.floor(perf.audience / 5);
    return result;
}

function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    }).format(aNumber / 100);
}
