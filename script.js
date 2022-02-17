const birthday = prompt("What is your age in DD/MM/YYYY Format?");

const birthDayArray = birthday.split('/');

const day = birthDayArray[0];
const month = birthDayArray[1];
const year = birthDayArray[2];

const birthdayDate = new Date(parseInt(year),parseInt(month),parseInt(day));
const timestamp = Date.now() - birthdayDate.getTime();

const second = timestamp / 1000;
const minutes = second / 60;
const hours = minutes / 60;
const days = hours / 24;

const years = new Date(timestamp).getFullYear() - new Date(0).getFullYear();
let months = 12 * (new Date(Date.now()).getFullYear() - year - 1);
    months += (12 -birthdayDate.getMonth());
    months += new Date(Date.now()).getMonth();

console.log(`Seconds passed: ${parseInt(second)}`);
console.log(`Minutes passed: ${parseInt(minutes)}`);
console.log(`Hours passed: ${parseInt(hours)}`);
console.log(`Days passed: ${parseInt(days)}`);
console.log(`Monts passed: ${parseInt(months)}`);
console.log(`Years passed: ${parseInt(years)}`);

