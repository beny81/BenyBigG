document.addEventListener("DOMContentLoaded", 
      function (event){ 
              
        
              // document.querySelector("#btt")
              //         .addEventListener("blur", function(event){
                          
        
                         
          
                      
              //           let screenWidth = window.innerWidth;
                         
                     
              //                     if(screenWidth<769 ){
                         
              //                      document.querySelector("#btt") .click();
                                      
                                  
                                      
                                     
                                     
              //                         }

                          
                              
                              
                         
              //             }); 


          Notification.requestPermission().then(function(permission) {
  if (permission === 'granted') {
    console.log('Permission accordée pour les notifications');
  } else {
    console.error('Permission refusée pour les notifications');
  }
});

           

                 document.querySelector("#bell")
                      .addEventListener("click",()=> {  

                    Notification.requestPermission().then (perm =>{
                        // alert("hello")
                        if(perm=== "granted"){
                         
                           console.log("hello");
                          new Notification("Notification-FDS Tournois",{      
                          
                          body:"Have a great day",
                              tag:"hello"
                          
                          
                          })
                            


                            }
                          

                           })
                      })

         

                                                                
                 
                              
       });
const registerSw = async ()=>{

    const registration = await navigator.serviceWorker.register("notif.js");
    return registration;


    }
registerSw();










// var showLoading = function (selector) {
//   var html = "<div class='text-center'>";
//   html += "<img src='images/ajax-loader.gif'></div>";
//   insertHtml(selector, html);
// };
