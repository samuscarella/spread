// $(document).ready(function() {

    window.fbAsyncInit = function() {

       FB.init({
         appId      : '1164103073651848',
         xfbml      : true,
         version    : 'v2.5'
       });

      //  (function getFacebookAccountStatus() {
      //    $.ajax({
      //        url: '/get_facebook_token',
      //        status: true,
      //        dataType: 'json',
      //        success: function(data) {
      //          console.log(data, 'fbToken');
      //          $('#facebook-account-linked-col').html('<h4>Account Linked</h4><img src="assets/images/checkmark.svg" alt="CHECKMARK"/>')
      //        },
      //        error: function(xhr, status, error) {
      //          console.log(xhr, status, error);
      //        }
      //     });
      //     FB.getLoginStatus(function(response) {
      //       console.log(response, '44')
      //       if(response.status === 'connected') {
      //           $('#facebook-account-linked-col').html('<h4>Account Linked</h4><img src="assets/images/checkmark.svg" alt="CHECKMARK"/>')
      //       } else if(response.status === 'unknown') {
       //
      //       }
      //     })
      //  })()

        $('#facebook-link-acc').click(function() {


              FB.getLoginStatus(function(response) {

                if (response.status === 'unknown') {
                  console.log(response);
                  FB.login(function(response) {
                      if (response.authResponse) {
                        var fbToken = response.authResponse.accessToken;
                        console.log(fbToken);
                        console.log('Welcome!  Fetching your information....');

                         var user = $('#user-id-input').val();

                         var formData = {
                           'token': fbToken,
                           'user': user
                         }

                         $.ajax({
                             type: "POST",
                             url: '/facebook_long_token',
                             data: formData,
                             status: true,
                             dataType: 'json',
                             success: function(data) {
                               console.log(data, 'TRUE');
                               $('#facebook-account-linked-col').html('<h4>Account Linked</h4><img src="http://localhost:3000/assets/images/checkmark.svg" alt="CHECKMARK"/>')
                             },
                             error: function(xhr, status, error) {
                               console.log(xhr, status, error);
                             }
                          });

                        } else {
                         console.log('User cancelled login or did not fully authorize.');
                        }
                  });
                } else if(response.status === 'connected') {
                  console.log(response);
                  $('#facebook-account-linked-col').html('<h4>Account Linked</h4><img src="assets/images/checkmark.svg" alt="CHECKMARK"/>')
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

// });
