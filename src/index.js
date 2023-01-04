module.exports = function toReadable (number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let fromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen'];
  let dozens = ['','','twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if(number === 0){
    return 'zero'
  } else if(number>0 && number <10){
    return units[number]
  } else if (number > 9 && number < 20){
    return fromTenToNineteen[number % 10]
  } else if (number >19 && number < 100){
    return `${dozens[Math.floor(number/10)]} ${units[number%10]}`.trim()
  } else if (number >99 && number < 1000){
    let firstNumber = units[Math.floor(number/100)]
    let endTheNumber = Math.floor(number%100)
    return `${firstNumber} hundred ${toReadable(endTheNumber)}`.trim()
  } else{
    return 'one hundred'
  }
}
