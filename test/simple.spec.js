const { assert, expect, should } = require("chai")
should();

describe(`Sample test`, () => {

    let a;

    before(() => {
        a = `Awesome JavaScrip`
    })

    it(`First test : chai assert string equal `, () => {
        assert.equal(a, `Awesome JavaScript`, `string does not match`);
    })

    it(`Second test : expect assert string equal `, () => {
        expect(a).equal(`Awesome JavaScript`, `string does not match`);
    })

    it(`Third test : should assert string equal `, () => {
        (a === `Awesome JavaScript`).should.be.true;
    })

})