// Without JQuery and implementing ES6 for the first time
// Still don't really understand const/let enough to use it

// Still need to break fetchData function up
// Styling!!!

var searchbar = document.querySelector('#searchbar');
var searchButton = document.querySelector('#search');
var results = document.querySelector('.results');

function fetchData() {
  var userInput = searchbar.value;
  results.innerHTML = '';
  fetch(
    'https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrlimit=10&prop=extracts&exintro&extlinks&explaintext&exsentences=2&exlimit=max&gsrsearch=' +
      userInput
  )
    .then(response => response.json())
    .then(jsonData => {
      var myData = jsonData.query.pages;

      for (result in myData) {
        let { pageid, title, extract } = myData[result];
        var url = 'https://en.wikipedia.org/wiki?curid' + pageid;
        var resultHtml = `<a target="_blank" href="${url}">${title}</a>
                            <li>${extract}</li>
                      `;
        results.innerHTML += resultHtml;
      }
      console.log(myData);
    });
}

searchButton.addEventListener('click', event => {
  // prevent page from loading
  event.preventDefault();
  results.innerHTML = '';
  fetchData();
});
