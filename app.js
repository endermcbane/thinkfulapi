$(document).ready(function(){

    $("#submitButton").on("click", function() {
    event.preventDefault();
    console.log("Submit Button Clicked");
    /*$(".instructions").fadeOut();*/
    $('#submitButton').html('Show More');
    getPhotos();
    $("#photos").show();
    $(".intro").fadeOut();

    });

});


var getPhotos = function() {

  var userId = ['343900445', "294330511", '396', '72', '1658742', '37677682', '35084500', '235126', '176547811', '208634859', '24457708', '43828379', '492356095', '21326082', '29440194', '9406127', '197656340', '1504627', '6281714', '116480', '195270438', '11469979', '16926557', '174705977', '261143230', '435909874', '23113572', '6193661'];
  var len = userId.length;
  console.log(len)
  var randomNum = Math.floor((Math.random() * len) + 1);
  console.log(randomNum)
  var result = $.ajax({
    url: "https://api.instagram.com/v1/users/"+userId[randomNum]+"/media/recent/?client_id=0e9a2e4583774a3ab81cd29b2dbba916",
    dataType: "jsonp",
    cache: false,
    type: "GET",
  })
  .done(function(result){

    console.log("success!")

      for(var i = 0; i < 20; i++) {

        console.log(result.data[i].images.thumbnail.url);

     var showPhoto = function() {

          var photo = $("#fringe").clone();

          photo.attr('src', result.data[i].images.thumbnail.url);
          photo.attr('id', result.data[i].images.thumbnail.url);

          return photo;
        }


      $("#photos").append(showPhoto);
    }
  }

)

}

