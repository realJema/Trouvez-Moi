// json containing data 
data = {
  "date": {
    "day": "27",
    "month": "Mar",
  },
  "img": "images/img.JPG",
  "category": "Photos",
  "title": "City Lights in New York",
  "sub_title": "The City that never sleeps.",
  "description": "New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers."

}


// $(window).load(function () {
//   // function to animate cards 
//   $(".post-module").hover(function () {
//     $(this).find(".description").stop().animate(
//       {
//         height: "toggle",
//         opacity: "toggle",
//       },
//       300
//       );
//     });
    
//   });

function loadCards(data) {
  var card = '<div class="col-md-3 column">';
  card += '<div class="post-module">';
  card += '<div class="thumbnail">'
  card += '<div class="date">'
  card += '<div class="day">' + data["date"]["day"] + '</div>'
  card += '<div class="month">Mar</div>'
  card += '</div>'
  card += '<img src="'+ data["img"] + '"/>'
  card += '</div>'
  card += '<div class="post-content">'
  card += '<div class="category">'+ data["category"] + '</div>'
  card += '<h1 class="title">'+ data["title"] +'</h1>'
  card += '<h2 class="sub_title">'+ data["sub_title"] + '</h2>'
  card += '<p class="description">' + data["description"] + '</p>'
  card += '<div class="post-meta">'
  card += '<span class="timestamp">'
  card += '<i class="fa fa-clock-">o</i>'
  card += '6 mins ago</span>'
  card += '<span class="comments">'
  card += '<i class="fa fa-comments"></i>'
  card += ' <a href="#">'
  card += '39 comments</a>'
  card += '</span>'
  card += '</div>'
  card += '</div>'
  card += '</div>'
  card += '</div>'

  return card;
}

function createCard(data){
  // add the card to the document
  let container = document.getElementById("main_container");
  console.log("loading cards ---------------------------------------------------------")
  container.innerHTML += loadCards(data);
}

createCard(data);
createCard(data);
createCard(data);
createCard(data);
createCard(data);
createCard(data);
createCard(data);
createCard(data);
createCard(data);