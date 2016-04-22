$(document).ready(function() {

  alert('WIN');

  $('.btn-detonate').click(function(e) {

          var social = [];

          $(':checkbox:checked').each(function(i) {
            social[i] = $(this).val();
          });

          var images = document.getElementById("bomb_images").files || [];
          var video = document.getElementById("bomb_video").files || [];

          if(images.length !== 0) {
              for (var i = 0; i < images.length; i++) {
                console.log('Found Image ' + i + ' = ' + images[i].name);
              }
          }
          if(video.length !== 0) {
              console.log('Found Video = ' + video[0].name);
          }

          var formData = {
              'social': JSON.stringify(social),
              'title': $('input[name=title]').val(),
              'message': $('textarea[name=message]').val(),
              'images': images,
              'video': video,
              'user': $('input[name=user_id]').val()
          };

          console.log(formData.social);
          console.log(formData.title);
          console.log(formData.message);
          console.log(formData.images);
          console.log(formData.video);
          console.log(formData.user);

          // $.ajax({
          //     type: 'POST',
          //     url: '/bomb', // the url where we want to POST
          //     data: formData, // our data object
          //     dataType: 'json',
          // }).success(function(data) {
          //     console.log(data, 'TRUE');
          //     e.preventDefault();
          // });
          e.preventDefault();
  });

});
