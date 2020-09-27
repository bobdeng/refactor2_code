const statement = require('../../src/statement');
const plays = {
    "hamlet": {"name": "Hamlet", "type": "tragedy"}, "aslike": {"name": "AsYouLikeIt", "type": "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
}
const invoices =
    {
        "customer": "BigCo",
        "performances": [{"playID": "hamlet", "audience": 55}, {"playID": "aslike", "audience": 35}, {
            "playID": "othello",
            "audience": 40
        }]
    }


describe('statement test', function () {

    it('should ', async function () {
        let result = statement(invoices, plays);
        console.log(result)
        expect(result).toBe(`Statement for BigCo
Hamlet:US$ 650.00(55 seats)
AsYouLikeIt:US$ 580.00(35 seats)
Othello:US$ 500.00(40 seats)
You earned 7 credits\n`)
    });
});
