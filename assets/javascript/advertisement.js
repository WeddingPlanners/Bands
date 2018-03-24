var config = {
  apiKey: "AIzaSyC22pg8At8rnWwjY-8HhGMlL8RSqtIO-lw",
  authDomain: "mo-bands-mo-problems.firebaseapp.com",
  databaseURL: "https://mo-bands-mo-problems.firebaseio.com",
  projectId: "mo-bands-mo-problems",
  storageBucket: "mo-bands-mo-problems.appspot.com",
  messagingSenderId: "172100309774"
};
firebase.initializeApp(config);

var bandData = firebase.database();








bandData.ref().on("child_added", function (childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var bName = childSnapshot.val().name;
  var bNeed = childSnapshot.val().need;
  var bDate = childSnapshot.val().need_date;
  var bDes = childSnapshot.val().description;
  var bMedia = childSnapshot.val().media;

  console.log(bName);
  console.log(bNeed);
  console.log(bDate);
  console.log(bDes);
  console.log(bMedia);

  var heading = $("<h1>");
  heading.text(bNeed);
  $("#posts-table > tbody").append("<tr><td>" + bName + "</td><td>" + bNeed + "</td><td>" +
    bDate + "</td><td>" + bDes + "</td><td>" + bMedia + "</td></tr>");

  heading.on("click", function () {
    // Load the details for this ad
    $("#details-desc").text(bDes);
    // Hide the main table
    $("#wrapper").hide();
    // Show the details page
    $("#details").show();
  })
  //$("#wrapper").append(heading);
  //$("#wrapper").append("<p>" + bName + "</p><<p>" + bDes + "</p><p>" + bDate + "</p>");
})




  // 2. This code loads the IFrame Player API code asynchronously.
function displayVideo() {
  //var media = childSnapshot.val().media;
  //bandData?


  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '300',
      width: '300',
      videoId: '7XwdMWXz7QA',
      playerVars: {

      },
      events: {
        'onReady': onPlayerReady,

      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    player.setPlaybackRate(1);

  }
}
