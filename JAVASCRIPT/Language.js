
    $("#lang-switch").on("change",function(){
        
        var lin =$(this).val();
        if(lin == "it")
        {
            window.location.replace("index.html");    
        }
        else
        {
            window.location.replace("indexGB.html");    
        }
        
    });
    