var sTerm = "floods"; // search term, passed throug as q to ajax
var bDate = "20150101"; // begin date passed in to ajax as bDate
var eDate = "20151231"; // end date passed in to ajax as bDate
var rLimit = ""; // max results to show ... will need to run through FOR LOOP

// if (eDate != "") {
//     var parmTerms += "";
// }

jQuery(($) => { // document ready
    $("#submit").on("click", function (event) { // listen for on click with button using class submit
        console.log("click");
        event.preventDefault(); // prevent page from refreshing

        /* uncomment after search is connecte
        // assign variables to all possible input fields
        let $this = $(this),
        sTerm = $this.data('searchTerm'); // ID
        rLimit = $this.data('recordRetrieve'); // ID
        bDate = $this.data('startYear'); // ID
        eDate = $this.data('endYear'); // ID
*/
        doTheSearch();

        function doTheSearch() {  // build and send search to NYT using Ajax

            var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
            url += '?' + $.param({
                'api-key': "efa188a6e95e44e1bd3a2afa6a5929b7",
                'q': sTerm,
                'begin_date': bDate,
                'end_date': eDate
            });
            console.log("url", url);
            $.ajax({
                url: url,
                method: 'GET',
            })
                .done(function (result) {
                    console.log(result);
                    $("#topArticles").text(JSON.stringify(result));

                    for (i = 0; i < 5; i++) {
                        var articleHeadline = result.response.docs[i].headline;
                        var articleAuthor = result.response.docs[i].byline;
                        var articleURL = result.response.docs[i].web_url;

                        console.log("article URL", articleURL);
                        console.log("article headline", articleHeadline);
                        console.log("article author", articleAuthor);
                        //  $("#topArticles").append(); // title
                        //  $("#topArticles").append(); // author
                    }

                })
                .fail(function (err) {
                    throw err;
                });
        }
    });

});