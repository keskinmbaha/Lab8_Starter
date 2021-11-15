// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber: checks if 619-855-6999 returns true', () => {
    expect(functions.isPhoneNumber("619-855-6999")).toBe(true);
});

test('isPhoneNumber: checks if (858)-855-6999 returns true', () => {
    expect(functions.isPhoneNumber("(858)-855-6999")).toBe(true);
});

test('isPhoneNumber: checks if 61985569999 returns false', () => {
    expect(functions.isPhoneNumber("61985569999")).toBe(false);
});

test('isPhoneNumber: checks if 90 returns false', () => {
    expect(functions.isPhoneNumber("90")).toBe(false);
});

//isEmail
test('isEmail: checks if sup@ucsd.edu returns true', () => {
    expect(functions.isEmail("sup@ucsd.edu")).toBe(true);
});

test('isEmail: checks if yoman@gmail.com returns true', () => {
    expect(functions.isEmail("yoman@gmail.com")).toBe(true);
});

test('isEmail: checks if "" returns false', () => {
    expect(functions.isEmail("")).toBe(false);
});

test('isEmail: checks if ohno@.com returns false', () => {
    expect(functions.isEmail("ohno@.com")).toBe(false);
});

// isStrongPassword
test('isStrongPassword: checks if aTaTdsaduiauio returns true', () => {
    expect(functions.isStrongPassword("aTaTdsaduiauio")).toBe(true);
});

test('isStrongPassword: checks if tF89898989 returns true', () => {
    expect(functions.isStrongPassword("tF89898989")).toBe(true);
});

test('isStrongPassword: checks if 10 returns false', () => {
    expect(functions.isStrongPassword("10")).toBe(false);
});

test('isStrongPassword: checks if djksajdklajskldjlsakjdlkajskld returns false', () => {
    expect(functions.isStrongPassword("djksajdklajskldjlsakjdlkajskld")).toBe(false);
});

// isDate
test('isDate: checks if 01/01/2001 returns true', () => {
    expect(functions.isDate("01/01/2001")).toBe(true);
});

test('isDate: checks if 1/1/2020 returns true', () => {
    expect(functions.isDate("1/1/2020")).toBe(true);
});

test('isDate: checks if 1-1-2020 returns false', () => {
    expect(functions.isDate("1-1-2020")).toBe(false);
});

test('isDate: checks if 000/00/2000 returns false', () => {
    expect(functions.isDate("000-00-2000")).toBe(false);
});

// isHexColor
test('isHexColor: checks if #FC0 returns true', () => {
    expect(functions.isHexColor("#FC0")).toBe(true);
});

test('isHexColor: checks if #FFCF0F returns true', () => {
    expect(functions.isHexColor("#FFCF0F")).toBe(true);
});

test('isHexColor: checks if #FFCF0FF returns false', () => {
    expect(functions.isHexColor("#FFCF0FF")).toBe(false);
});

test('isHexColor: checks if # returns false', () => {
    expect(functions.isHexColor("#")).toBe(false);
});