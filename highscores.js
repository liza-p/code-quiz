document.querySelector('#clear-highscores').addEventListener('click', function() {
    localStorage.removeItem('highscores');
    location.reload();
});

var highscores = JSON.parse(localStorage.getItem('highscores'));
if (highscores === null) {
    highscores = [];
}

var highscoresDiv = document.querySelector('#highscores');
highscores.forEach(function(result, i) {
    var resultDiv = document.createElement('div');
    resultDiv.innerText = `${i + 1}. ${result.name} - ${result.score}`;
    highscoresDiv.append(resultDiv)
});
