document.addEventListener("DOMContentLoaded", 
      function (event){ 
              
        
              // document.querySelector("#btt")
              //         .addEventListener("blur", function(event){
                          
        
                         
          
                      
              //           let screenWidth = window.innerWidth;
                         
                     
              //                     if(screenWidth<769 ){
                         
              //                      document.querySelector("#btt") .click();
                                      
                                  
                                      
                                     
                                     
              //                         }

                          
                              
                              
                         
              //             }); 
           

                 Notification.requestPermission().then (perm =>{
                        
                        if(perm=== "granted"){
                           
                          
                          new Notification("FDS-TOURNOIS",{      
                          
                          body:"Le match commence"
                          
                          
                         })
                        
                           


                            }
                           

                           })
                     

         
   document.querySelector("#bell")
                      .addEventListener("click", function(event){
                            
                            new Notification("Merci d'avoir clicke");

                      })
                                                                
                 
                              
       });
// var showLoading = function (selector) {
//   var html = "<div class='text-center'>";
//   html += "<img src='images/ajax-loader.gif'></div>";
//   insertHtml(selector, html);
// };
