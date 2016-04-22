$(document).ready(function() {
  $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function() {

       FB.init({
         appId      : '1164103073651848',
         xfbml      : true,
         version    : 'v2.5'
       });
       console.log( "ready!" );
       var endOfToken;
       var beginningOfExpiration;

        (function getFacebookAccountStatus() {
          $.ajax({
            url: "/facebook_account_token",
            status: true,
            dataType: 'json',
            success: function(tokenString) {
              console.log(tokenString, 'Token String');
              if(tokenString) {
                 for(var i=0;i < tokenString.length;i++) {
                   if(tokenString[i] === "&") {
                     endOfToken = i
                     beginningOfExpiration = i + 9
                     break;
                   }
                 }
                 var longToken = tokenString.slice(13, endOfToken);
                 var secondsTillExpiration = tokenString.slice(beginningOfExpiration);
                 var daysTillExpiration = Math.ceil(secondsTillExpiration / 86400);
                 console.log('There are ' + daysTillExpiration + ' days left before this token will expire.');
                 $('.second-facebook-col').toggleClass("col-md-10").toggleClass("col-md-8");
                 $('.third-facebook-col').toggleClass("col-md-1").toggleClass("col-md-3");
                 $('.facebook-accounts-linked-num').html('1');
                 $('#facebook-account-linked-col').html('<h4 style="display:inline-block;margin-bottom:0;margin-right:9px;position:relative;top:5px;"><em>Account Linked</em></h4><img src="./../../assets/checkmark.svg" class="success-check" alt="CHECKMARK"/><h6 style="margin-top:0;color:Crimson;">' + daysTillExpiration + ' days until expiration.</h6>');
              } else {
                console.log('User facebook account is not linked')
              }
            },
            error: function(xhr, status, error) {
              console.log(xhr, status, error, "FALSE");
            }
          })
        })()

        $('#facebook-link-acc').click(function() {

              FB.getLoginStatus(function(response) {
                // console.log(response);
                if(response.status === 'unknown') {
                  FB.login(function(response) {
                      if (response.authResponse) {
                         var endOfToken;
                         var beginningOfExpiration;
                         var fbToken;
                         fbToken = response.authResponse.accessToken;
                         console.log(fbToken);
                         console.log('Welcome! Fetching your information....');
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
                              //   for(var i=0;i<data.length;i++) {
                              //     if(data[i] === "&") {
                              //       endOfToken = i
                              //       beginningOfExpiration = i + 9
                              //       break;
                              //     }
                              //   }
                              //   var longToken = data.slice(13, endOfToken);
                              //   var expirationOfToken = data.slice(beginningOfExpiration);
                              //   var daysTillExpiration = expirationOfToken / 86400;
                              //   console.log('There are ' + daysTillExpiration + ' days left before this token will expire.');
                              //  $('#facebook-account-linked-col').html('<h4>Account Linked</h4><img src="./../../assets/checkmark.svg" alt="CHECKMARK"/>')
                             },
                             error: function(xhr, status, error) {
                               console.log(xhr, status, error);
                             }
                          });
                          console.log(longToken);
                          console.log(beginningOfExpiration);
                        } else {
                         console.log('User cancelled login or did not fully authorize.');
                        }
                  });
                } else if(response.status === 'connected') {
                      var endOfToken;
                      var beginningOfExpiration;
                      var fbToken = response.authResponse.accessToken;
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
                              console.log("Long Token Successfully Updated.")
                            //  for(var i=0;i < data.length;i++) {
                            //    if(data[i] === "&") {
                            //      endOfToken = i
                            //      beginningOfExpiration = i + 9
                            //      break;
                            //    }
                            //  }
                            //  var longToken = data.slice(13, endOfToken);
                            //  var secondsTillExpiration = data.slice(beginningOfExpiration);
                            //  var daysTillExpiration = Math.ceil(secondsTillExpiration / 86400);
                            //  console.log('There are ' + daysTillExpiration + ' days left before this token will expire.');
                            // $('.second-facebook-col').toggleClass("col-md-10").toggleClass("col-md-8");
                            // $('.third-facebook-col').toggleClass("col-md-1").toggleClass("col-md-3");
                            // $('.facebook-accounts-linked-num').html('1');
                            // $('#facebook-account-linked-col').html('<h4 style="display:inline-block;margin-bottom:0;margin-right:9px;position:relative;top:5px;"><em>Account Linked</em></h4><img src="./../../assets/checkmark.svg" class="success-check" alt="CHECKMARK"/><h6 style="margin-top:0;color:Crimson;">' + daysTillExpiration + ' days until expiration.</h6>')
                          },
                          error: function(xhr, status, error) {
                            console.log(xhr, status, error);
                          }
                   });
                }
              });

        });

    });
})
