window.fbAsyncInit = function() {

  FB.init({
    appId      : '1164103073651848',
    xfbml      : true,
    version    : 'v2.5'
  });

  $('#facebook-link-acc').click(function() {

    FB.getLoginStatus(function(response) {
        FB.login(function(response) {
          console.log(response);
          if(response.status === "connected") {
            access_token = response.authResponse.accessToken;

            $.ajax({
                type: 'POST',
                data: 'PlainObject',
                url: '/facebook_long_token',
                data: access_token, // the url where we want to POST
                processData: false,
                dataType: 'json',
            }).success(function(data) {
                console.log(data, 'TRUE');
                e.preventDefault();
            });
            return false;
            // e.preventDefault();
          }
        }, { auth_type: 'reauthenticate' })
    });

  })

};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
