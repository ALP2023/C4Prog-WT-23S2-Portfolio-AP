document.getElementById("getJokeButton").addEventListener("click", function() {
    var limit = 1;
    var JOKE_URL = "https://api.api-ninjas.com/v1/jokes";
    var apiKey = "CrHOHMID6drn+8lkQpBlZA==PvYTcv5w2nSQYIMJ";

    $.ajax({
        method: 'GET',
        url: JOKE_URL + "?limit=" + limit,
        headers: { 'X-Api-Key': apiKey },
        contentType: 'application/json',
        success: function(result) {
            var joke = result[0].joke;
            $("#jokeResponse").text(joke);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            $("#jokeResponse").text("Failed to retrieve a joke.");
        }
    });
});
