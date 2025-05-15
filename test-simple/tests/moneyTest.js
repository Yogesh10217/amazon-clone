import {formatCurrency} from "../../Scripts/utility/money.js";

console.log("test suit: formatCurrency")
console.log("convert cents into dollars")
if(formatCurrency(2095)==='20.95'){
  console.log('passed');
}else{
  console.log('failled');
}

console.log("works with zero")
if(formatCurrency(0)==='0.00'){
  console.log('passed');
}else{
  console.log('failled');
}

console.log("rounds up to the nearest cents")
if(formatCurrency(2000.5) === '20.01'){
  console.log('passed');
}else{
  console.log('failled');
}