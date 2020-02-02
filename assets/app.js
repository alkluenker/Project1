var queryURL = "https://core.ac.uk:443/api-v2/search/evolution?page=1&pageSize=10&apiKey=cWTu8XQENxOvfGUP5LCbh6IjiRzmoYFq";
    
    //"https://wger.de/api/v2/exerciseinfo/";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response.data);
    });