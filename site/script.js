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
                        alert("hello")
                        if(perm=== "granted"){
                           new Notification("hello");
                           console.log("hello");
                          new Notification("Hello",{      
                          
                          body:"Have a great day"
                          
                          
                         })
                        
                            


                            }
                            alert("Test 1")

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
