//Post directly after <body> on each page you want to load
//Initalize and Setup FB Javscript SDK


// Paste something like the following in the HTML...
// <script>href="facebookAPI.js"</script>
// <div id="status"></div>
// <button onclick="login()">Login</button>

window.fbAsyncInit = function() {
    FB.init({
      appId            : '1478871842240454',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.12'
    });
  };
  FB.getLoginStatus(function(response){
      if (response.status === 'connected'){
          document.getElementById('status').innerHTML = 'We are connected';
          document.getElementById('login').style.visibility = 'hidden';
        } 
        else if (response.status === 'not_authorized'){
            document.getElementById('status').innerHTML = 'We are not logged in.';
        }
        else {
            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
          }
});
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

 
var finished_rendering = function() {
  console.log("finished rendering plugins");
  var spinner = document.getElementById("spinner");
  spinner.removeAttribute("style");
  spinner.removeChild(spinner.childNodes[0]);
}
FB.Event.subscribe('xfbml.render', finished_rendering);


   // login with extra permissions
   function login () {
       FB.login(function(response){
        if (response.status === 'connected'){
            document.getElementById('status').innerHTML = 'We are connected';
            document.getElementById('login').style.visibility = 'hidden';
          } 
          else if (response.status === 'not_authorized'){
              document.getElementById('status').innerHTML = 'We are not logged in.'
          }
          else {
              document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
            }
        }, {scope: 'email'});
    }
    
    // getting basic user info
    function getInfo() {
        FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id'}, function(response) {
            document.getElementById('status').innerHTML = response.id;
       });
     }