window.fbAsyncInit = function() {

   FB.init({
     appId      : '1164103073651848',
     xfbml      : true,
     version    : 'v2.5'
   });

    $('#facebook-link-acc').click(function() {


          FB.getLoginStatus(function(response) {
            console.log(response);
            if (response.status === 'unknown') {
              FB.login(function(response) {
                  if (response.authResponse) {
                   var token = response.authResponse.accessToken;
                   console.log(token);
                   console.log('Welcome!  Fetching your information....');

                   $.ajax({
                       type: "POST",
                       url: '/facebook_long_token',
                       data: token,
                       status: true,
                       dataType: 'json',
                       success: function(data) {
                         console.log(data, 'TRUE');
                         e.preventDefault();
                       },
                       error: function(xhr, error) {
                         console.log(xhr, error);
                       }
                   });


                  } else {
                   console.log('User cancelled login or did not fully authorize.');
                  }
              });
            }
            if(response.status === "connected") {
                  FB.logout(function(response) {
                      console.log('Logging out...')
                  });
                  FB.login(function(response) {
                      if (response.authResponse) {
                       var token = response.authResponse.accessToken;
                       console.log(token);
                       console.log('Reauthenticated...');

                      // code here...
                      $.ajax({
                          type: "POST",
                          url: '/facebook_long_token',
                          data: token,
                          processData: false,
                          dataType: 'json',
                          success: function(data) {
                            console.log(data, 'TRUE');
                            e.preventDefault();
                          }
                      });

                      } else {
                       console.log('User cancelled login or did not fully authorize.');
                      }
                  }, { auth_type: 'reauthenticate'});

              }
          });
    });

};

 (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
