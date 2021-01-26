$(document).ready(function () {
    var movieArray = JSON.parse(localStorage.getItem("review"));
    var message = "";
    for (var i = 0; i < movieArray.length; i++) {
        message += "<div class='card bg-light'>";
        var movie = movieArray[i];
        message += "<img class='card-img-top' src='" + movie.Poster + ">";
        message += "<div class='card-header'>Title: " + movie.Title + "</div>";
        message += "<div class='card-body'><p class='card-text'>" + movie.Plot + "</p></div>";
        message += "</div>";
    }

    $("#contents").html(message);
}
);