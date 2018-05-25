$(document).ready(function() {

    $("#Lucky").click(function(){
        var query = $("#searchBar").val().replace(/\s+/g,"%20");
        // var wikiCall = "https://en.wikipedia.org/w/api.php?origin=*&format=json&formatversion=2&action=query&generator=search&gsrnamespace=0&gsrsearch="+query+"&gsrlimit=10&prop=pageimages&pilimit=max";   
        var wikiCall = "https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=Image:Einstein_1921_by_F_Schmutzer_-_restoration.jpg&prop=imageinfo&iiprop=url&format=json&formatversion=2";
        $.getJSON(wikiCall, wikiHunt);
        
        // var wikiFind = {
        //     format: "json",
        //     list: "search",
        //     srsearch: query,
        //     origin: "*",
        //     action: "query",
        //     srlimit: "10",
        //     srprop: "images",
        // };
        
        // var foundit = $.ajax({type: "GET", url: wikiCall, data: wikiFind});
        
        function wikiHunt(wikiWhere){
        console.log(wikiWhere);
        }
    });
});

// api.php?action=query&srsearch=morelike:Marie_Curie|radium&srprop=size&formatversion=2

//this one works: "https://en.wikipedia.org/w/api.php?&action=query&origin=*&list=search&srsearch=title:"+query+"&srlimit=10&format=json&formatversion=2"

//this one doesnt work with the images: https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=title:"+query+"&srlimit=10&prop=pageimages&format=json&formatversion=2