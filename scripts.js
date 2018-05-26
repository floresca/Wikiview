$(document).ready(function() {
    
            $("#wikiLocator").click(function(){
                
                $(".results").empty();
                
                if($("#searchBar").val() == ""){
                    $("#searchBar").attr("placeholder", "Boo! Please enter something :(");
                } else  {
                    var query = $("#searchBar").val().replace(/\s+/g,"%20");
                    var wikiCall = "https://en.wikipedia.org/w/api.php?origin=*&format=json&formatversion=2&action=query&generator=search&gsrnamespace=0&gsrsearch="+query+"&gsrlimit=10&prop=pageimages&pilimit=max";   
                    
                    $.getJSON(wikiCall, wikiHunt);
                    
                    
                    function wikiHunt(wikiWhere){
                        
                        
                        for(var i = 0; i < wikiWhere.query.pages.length; i++){
                            var wikiName = wikiWhere.query.pages[i].title;
                            var wikiNewName = wikiName.replace(/\s+/g, "_");
                            var wikiPickMe = "https://en.wikipedia.org/wiki/"+wikiNewName;
                            var nameHTML = "<h3 class='PageName'>"+wikiName+"</h3>";
                            var wikiGO = "<a class='pageLink' href='"+wikiPickMe+"'>"+nameHTML+"</a>";
                            
                            $(".results").append(wikiGO);
                            
                        }
                    }
                    
                $('input[type="searcher"]').val("").attr( "placeholder", 'Thank you!');
                }
            });
});

//Attemp at pulling wikipedia pictures til I realized their API is too much of a nightmare:

                // var headLogo = "<img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png' alt='Logo'>";
                // var wikiPhoto = wikiWhere.query.pages[i].pageimage;
                // var wikiIMG = "https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=Image:"+wikiPhoto+"&prop=imageinfo&iiprop=url&format=json&formatversion=2"; 
                // $.getJSON(wikiIMG, wikiPic);
                
                // if (wikiPhoto !== undefined){
                //     function wikiPic(goGetIt){
                //         var wikiURL = goGetIt.query.pages[0].imageinfo[0].url;
                //         var newPhoto = "<a class='pageLink' href='"+wikiPickMe+"'>"+nameHTML+wikiURL+"</a>";
                //         console.log(wikiPhoto);
                //         $(".results").append(newPhoto);
                //     }
                // } else {
                //     $(".results").append(wikiGO);
                // }



//wikiCall will run to wikipedia and find the associated pages to the search
// var wikiCall = "https://en.wikipedia.org/w/api.php?origin=*&format=json&formatversion=2&action=query&generator=search&gsrnamespace=0&gsrsearch="+query+"&gsrlimit=10&prop=pageimages&pilimit=max"; 

//wikiIMG will use the image parameter from the call to fin the URL of the image
// var wikiIMG = "https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=Image:Einstein_1921_by_F_Schmutzer_-_restoration.jpg&prop=imageinfo&iiprop=url&format=json&formatversion=2";