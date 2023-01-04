module.exports = function toReadable (number) {
   let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let fromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eightteen', 'nineteen'];
  let dozens = ['','','twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if(num === 0){
    return 'zero'
  } else if(num === 100){
    return 'one hundred'
  } else if(num>0 && num <10){
    return units[num]
  } else if (num > 9 && num < 20){
    return fromTenToNineteen[num % 10]
  } else if (num >19 && num < 100) {
    return dozens[Math.floor(num/10)] + ' ' + units[num%10]
  } else if (num >99 && num < 1000) {
    let firstNumber = units[Math.floor(num/100)]
    let endTheNumber = Math.floor(num%100)
    return firstNumber + ' hundred ' + toReadable(endTheNumber)
  } else{
    return 'число больше 999'
  }
}
