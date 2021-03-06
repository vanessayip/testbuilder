// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var length = cardNumber.length;
  var prefix = cardNumber.charAt(0) + cardNumber.charAt(1);
  var prefix_three = cardNumber.charAt(0) + cardNumber.charAt(1) + cardNumber.charAt(2);
  var prefix_four = cardNumber.charAt(0) + cardNumber.charAt(1) + cardNumber.charAt(2) + cardNumber.charAt(3); 
  var prefix_six = cardNumber.charAt(0) + cardNumber.charAt(1) + cardNumber.charAt(2) + cardNumber.charAt(3) + cardNumber.charAt(4) + cardNumber.charAt(5);
  var chinaUnionPayPrefix = [];
  for (var i = 622126; i <= 622925; i++){
    chinaUnionPayPrefix[i-622126] = i.toString();
  }


  if ((prefix === '38' || prefix === '39') && length === 14){
  	return 'Diner\'s Club';
  } else if ((prefix === '34' || prefix === '37') && length === 15){
  	return 'American Express';
  } else if ((['4903', '4905', '4911', '4936', '6333', '6759'].includes(prefix_four) || ['564182', '633110'].includes(prefix_six)) && (length === 16 || length === 18 || length === 19)){
    return 'Switch';
  } else if (prefix.charAt(0) === '4' && (length === 13 || length === 16 || length === 19)){
  	return 'Visa';
  } else if ((prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55') && length === 16){
  	return 'MasterCard';
  } else if ((prefix_four === '6011' || prefix_three === '644' || prefix_three === '645' || prefix_three === '646' || prefix_three === '647' || prefix_three === '648' || prefix_three === '649' || prefix === '65') && (length === 16 || length === 19)){
  	return 'Discover';
  } else if ((prefix_four === '5018' || prefix_four === '5020' || prefix_four === '5038' || prefix_four === '6304') && (length >= 12 && length <= 19)){
  	return 'Maestro';
  } else if ((chinaUnionPayPrefix.includes(prefix_six) || ['624', '625', '626'].includes(prefix_three) || ['6282', '6283', '6284', '6285', '6286', '6287', '6288'].includes(prefix_four)) && (length >= 16 && length <= 19)){
    return 'China UnionPay';
  } else {
  	return 'not valid';
  }
};

