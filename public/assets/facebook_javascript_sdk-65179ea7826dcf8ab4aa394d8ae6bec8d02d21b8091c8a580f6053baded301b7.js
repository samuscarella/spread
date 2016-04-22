window.fbAsyncInit = function() {

        FB.init({
          appId: '1164103073651848',
          cookie: true,
          status: true,
          xfbml: true
        });

  //
  // $('#facebook-link-acc').click(function() {
  //
  //
  //   // FB.getLoginStatus(function(response) {
  //   //   if (response.status === 'connected') {
  //   //     FB.login(function(response) {
  //   //         if (response.authResponse) {
  //   //          console.log('Welcome!  Fetching your information.... ');
  //   //         } else {
  //   //          console.log('User cancelled login or did not fully authorize.');
  //   //         }
  //   //     });
  //   //   } else {
  //   //     FB.login(function(response) {
  //   //       console.log(response);
  //   //       if(response.status === "connected") {
  //   //         var access_token = response.authResponse.accessToken;
  //   //         console.log(access_token);
  //   //         $.ajax({
  //   //             type: 'POST',
  //   //             data: 'PlainObject',
  //   //             url: '/facebook_long_token',
  //   //             data: '000',
  //   //             processData: false,
  //   //             dataType: 'json',
  //   //             success: function(data) {
  //   //               console.log(data, 'TRUE');
  //   //               e.preventDefault();
  //   //             }
  //   //         }, { auth_type: 'reauthenticate' });
  //   //       };
  //   //     });
  //   //   }
  //   // });
  //
  // });

}

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
