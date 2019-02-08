var cosmosImage = document.getElementById('cosmoss');
var cosmosRange = document.getElementById('cosmos-range');

// Може и со input може и со click 
cosmosRange.addEventListener('input', function() {
 

  // console.log('CICKIII');
  // console.log(cosmosRange.value);
  // console.log(cosmosImage.style.width);
 

  cosmosImage.style.width = cosmosRange.value + 'px';
});