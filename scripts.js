$(document).ready(function() {

    $("#Lucky").click(function(){
        var query = $("#searchBar").val().replace(/\s+/g,"%20");
        var wikiCall = "https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=morelike:"+query+"&srlimit=10&format=json&formatversion=2";   
        $.getJSON(wikiCall, wikiFind)
        
        function wikiFind(wikiHunt){
            console.log(wikiHunt);
        };
    });
        
    //     ;
    
});

// api.php?action=query&srsearch=morelike:Marie_Curie|radium&srprop=size&formatversion=2