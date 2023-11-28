document.getElementById("getJokeButton").addEventListener("click", function() {
    let limit = parseInt(document.getElementById("jokeCount").value);;
    let maxLimit = 10;
    let JOKE_URL = "https://api.api-ninjas.com/v1/jokes";
    let apiKey = "CrHOHMID6drn+8lkQpBlZA==PvYTcv5w2nSQYIMJ";

    if (isNaN(limit) || limit >= maxLimit) {
        $("#jokeResponse").text("Please enter a valid number of jokes, up to a maximum of " + maxLimit + ".");
    } else if (limit <= 0) {
        $("#jokeResponse").text("Please enter a valid number of jokes.");
    } else {
        $.ajax({
            method: 'GET',
            url: JOKE_URL + "?limit=" + limit,
            headers: { 'X-Api-Key': apiKey },
            contentType: 'application/json',
            success: function(result) {
                if (result.length > 0) {
                    var jokes = result.map(function(jokeObj) {
                        return jokeObj.joke;
                    });
                    $("#jokeResponse").html(jokes.join("<br><br>"));
                }
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                $("#jokeResponse").text("Failed to retrieve jokes.");
            }
        });
    }
});






