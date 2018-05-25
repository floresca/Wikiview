$(document).ready(function() {

    $("#Lucky").click(function(){
        var query = $("#searchBar").val().replace(/\s+/g,"%20");
        var wikiCall = "https://en.wikipedia.org/w/api.php?origin=*&format=json&formatversion=2&action=query&generator=search&gsrnamespace=0&gsrsearch="+query+"&gsrlimit=10&prop=pageimages&pilimit=max";   
        
        $.getJSON(wikiCall, wikiHunt);
        
        
        function wikiHunt(wikiWhere){
            
            
            for(var i = 0; i < wikiWhere.query.pages.length; i++){
                var wikiName = wikiWhere.query.pages[i].title;
                var wikiNewName = wikiName.replace(/\s+/g, "_");
                var wikiPickMe = "https://en.wikipedia.org/wiki/"+wikiNewName;
                var nameHTML = "<h3 class='PageName'>"+wikiName+"</h3>";
                var wikiGO = "<a class='pageLink' href='"+wikiPickMe+"'>"+nameHTML+headLogo+"</a>";
                
                $(".results").append(wikiGO);
                
                var headLogo = "<img src='https://en.m.wikipedia.org/wiki/Wikipedia_logo#/media/File%3AWikipedia-logo-v2.svg' alt='Logo'>";
                var wikiPhoto = wikiWhere.query.pages[i].pageimage;
                // var wikiIMG = "https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=Image:Einstein_1921_by_F_Schmutzer_-_restoration.jpg&prop=imageinfo&iiprop=url&format=json&formatversion=2"; 
                // $.getJSON(wikiIMG, wikiPic);
                
                // if (wikiPhoto !== undefined){
                //     function wikiPic(goGetIt){
                //         var newPhoto =
                //     }
                // }
                
                console.log(wikiGO);
            };
        }
    });
});

//wikiCall will run to wikipedia and find the associated pages to the search
// var wikiCall = "https://en.wikipedia.org/w/api.php?origin=*&format=json&formatversion=2&action=query&generator=search&gsrnamespace=0&gsrsearch="+query+"&gsrlimit=10&prop=pageimages&pilimit=max"; 

//wikiIMG will use the image parameter from the call to fin the URL of the image
// var wikiIMG = "https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=Image:Einstein_1921_by_F_Schmutzer_-_restoration.jpg&prop=imageinfo&iiprop=url&format=json&formatversion=2";