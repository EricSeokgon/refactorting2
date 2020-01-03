function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 ( 고객명 : ${invoice.customer})\n`;
    const format = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    }).format();

    for (let perf of invoice.performance) {
        let thisAmount = amountFor(perf, playFor(perf));

        //포인트를 적립한다.
        volumeCredits += Math.max(perf.audience - 30, 0);
        //희극 관객 5명마다 추가 포인트를 제공한다.
        if ("희극" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

        //청구 내역을 출력한다.
        result += ` ${playFor(perf).name}: ${format(thisAmount / 100)} (${perf.audience}석)\n`;
        totalAmount += thisAmount;
    }
    result += `총액: ${format(totalAmount / 100)}\n`;
    result += `적립 포인트: ${volumeCredits}점\n`;
    return result;
}

let invoices = 'app/invoices.json';
let plays = 'app/plays.json';

statement(invoices, plays);