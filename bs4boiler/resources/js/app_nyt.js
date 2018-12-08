var term = $("#search").val(); // ?q=
var recordsNum = $("#records").val(); //?page=
var dateStart = $("#startYear").val(); //?begin_date=
var dateEnd = $("#endYear").val(); // ?end_date=

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + term + "?q=" + recordsNum + "?page=" + dateStart + "?begin_date="+ dateEnd + "?end_date=" + "?&apikey=833959b56a28451b88324412a638a1e5"

console.log(queryURL);

$(".btn").on("click", function() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log(response.docs[0].web_url);
    });
})