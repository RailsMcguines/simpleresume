$(document).ready(function() {

  var url=window.location.href;

    thisString = new RegExp('\\b' + 'index' + '\\b', 'i');
     if(thisString.test(url)){
    consulta("js/fakedb.json");
        }
    else {	
    consulta("../../js/fakedb.json");
    
     }
    
    function consulta(dbr){
             $.get(dbr,function(data){
                 
            let record ='<article class="mt-0 mx-auto">';
            $.each( data, function( i ) {                    
            let short= data[i].content.split(" ").splice(0,18).join(" ");
    
                    record=`<h6 style="line-height:18px; font-weight:600; padding:0;">${data[i].title}</h6>
                        <p style="font-size:11px; padding-left:3px; margin:-4px;">${data[i].date}</p>
                        <p style="font-size: 12px; line-height:14px; margin-bottom:0px; margin-top:8px;"> ${short}  </p>
                        <a href="#" style="color:#2B353F !important; font-size:14px; font-weight:bold; margin-top:5px;">Ver más...</a>
                        </article>  
                        <hr class="dashed">`;
                    $("#news").append(record); 
               
            }); 
           
        });
        
    }  
      
    document.getElementById("accordionFlushExample").addEventListener("click", function(e){

        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    });    


    });

