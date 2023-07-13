$(document).ready(function () {
  $("#searchBtn").click(function () {
    var query = $("#searchBox").val();

    $.ajax({
      type: "GET",
      url: "https://restcountries.com/v2/name/" + query,
      success: function (response) {
        showResults(response);
      },
      error: function () {
        showError();
      },
    });
  });
});

function showResults(results) {
  var html = "";
  for (var i = 0; i < results.length; i++) {
    html += '<div class="result">';
    html += "<h2>" + results[i].name + "</h2>";
    html += "<p>Başkent: " + results[i].capital + "</p>";
    html += "<p>Nüfus: " + results[i].population + "</p>";
    html += "</div>";
  }

  $("#result").html(html);
}

function showError() {
  $("#result").html("<p>Hata</p>");
}
