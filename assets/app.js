var search = $("#search-input").val().trim();

var results = "";

var resultsTitle = "";

var fullText = "";

$("#search").on("click", function(event) {

    event.preventDefault();

    search = $("#search-input").val().trim();

    

    //var searchInquiry = $(this).attr("data-name");

    //console.log(searchInquiry);

})
    
$("#search").on("click", function(event) {

    event.preventDefault;

   

    var queryURL = "https://core.ac.uk:443/api-v2/articles/search/" + search + "?page=1&pageSize=10&metadata=true&fulltext=true&citations=false&similar=false&duplicate=false&urls=true&faithfulMetadata=false&apiKey=cWTu8XQENxOvfGUP5LCbh6IjiRzmoYFq"
    
        
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        

        $("#viewresults").empty();

        for (i = 0; i < response.data.length; i++) {

            results = response.data;

            resultsTitle = results[i].title;

            fullText = results[i].fulltextIdentifier;

            console.log(fullText);

            

            

            //resultsTitle = $("<a>");

           // resultsTitle = $("<button>");

            

            //resultsTitle.attr("data-full", fullTextUrl);

            //var fullTextUrl = $("<a>");

            //fullTextUrl.attr("href", results.fulltextUrls[0]);

            //var fullTextUrl = results.fulltextUrls[0];

            //var fullText = $("href").attr("src", fullTextUrl);

            
            

            //fullText.addClass("fullUrl");
            

            

            //var url = $("<a>").attr("href", fullText);

            

            $("#viewresults").append(resultsTitle + "<br>");

            $("#viewresults").append(fullText + "<br>");

            //$("#viewresults").append(results.fullText);

            console.log(resultsTitle);

            //console.log(response.data[i]._source.downloadUrl);

            //resultsTitle.addClass("results");

           

        }


        

        $("#viewresults").on("click", function() {
            

            console.log(this);

            var resultUrl = $(this).fullText

            
            console.log("clicked");

        })

        

    });
})




