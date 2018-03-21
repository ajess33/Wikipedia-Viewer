// Without JQuery and implementing ES6 for the first time

var searchbar = document.querySelector('#searchbar');
var searchButton = document.querySelector('#search');
var results = document.querySelector('.results');

var userInput = searchbar.value;

function fetchData() {
  fetch(
    'https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrlimit=10&prop=extracts&exintro&extlinks&explaintext&exsentences=2&exlimit=max&gsrsearch=' +
      userInput
  )
    .then(response => response.json())
    .then(jsonData => {
      var myData = jsonData;
      console.log(myData);
      for (result in myData) {
        console.log(result);
      }
    });
}

fetchData();

// fetch(
//   'https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrlimit=10&prop=extract&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' +
//     userInput
// )
