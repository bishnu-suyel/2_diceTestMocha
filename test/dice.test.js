import { expect } from "chai";
import Dice from "../dice.js";

describe("methods defined", function () {
  const dice = new Dice();

  it("getter maximumValue is defined", function () {
    expect(dice).to.have.a.property("maximumValue");
  });

  it("getter dots is defined", function () {
    expect(dice).to.have.a.property("dots");
  });

  it("method roll is defined", function () {
    expect(dice).to.have.a.property("roll");
  });
});

describe("test roll", function () {
  let dice;

  beforeEach(function () {
    dice = new Dice();
  });

  it("test not rolled yet", function () {
    expect(dice.dots).to.equal(0);
  });

  it("dice rolled", function () {
    dice.roll();
    expect(dice.dots).to.be.within(1, 6);
  });
});

describe("test toString", function () {
  let dice;

  beforeEach(function () {
    dice = new Dice();
  });

  it("test not rolled yet", function () {
    expect(dice.toString()).to.equal("not rolled yet");
  });

  it("dice rolled", function () {
    dice.roll();
    expect(dice.toString()).to.equal(`${dice.dots}`);
  });
});

describe("test upperbounds", function () {
  const testValues = new Array(19).fill(2).map((value, ind) => value + ind);

  testValues.forEach(function (ubound) {
    it(`Dice(${ubound}) maximumValue is set correctly`, function () {
      const dice = new Dice(ubound);
      expect(dice.maximumValue).to.equal(ubound);
    });
  });
});

describe("test ubounds 2...20", function () {
  for (let ub = 2; ub <= 20; ub++) {
    it(`Dice(${ub}) maximumValue is set correctly`, function () {
      const dice = new Dice(ub);
      expect(dice.maximumValue).to.equal(ub);
    });

    it(`Dice(${ub}) dots are within 1 and ${ub}`, function () {
      const dice = new Dice(ub);
      dice.roll();
      expect(dice.dots).to.be.within(1, ub);
    });
  }
});
