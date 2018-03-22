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
      version          : 'v2.5'
    });
    		// initialize and setup facebook js sdk
		// window.fbAsyncInit = function() {
		//     FB.init({
		//       appId      : '1557876490891744',
		// 	  appSecret  :  '302f28b9110351071840458316ce232f',
		//       xfbml      : true,
		//       version    : 'v2.5'
		//     });
		    FB.getLoginStatus(function(response) {
		    	if (response.status === 'connected') {
		    		document.getElementById('status').innerHTML = 'We are connected.';
		    		document.getElementById('login').style.visibility = 'hidden';
		    	} else if (response.status === 'not_authorized') {
		    		document.getElementById('status').innerHTML = 'We are not logged in.'
		    	} else {
		    		document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
		    	}
		    });
		};
		(function(d, s, id){
		    var js, fjs = d.getElementsByTagName(s)[0];
		    if (d.getElementById(id)) {return;}
		    js = d.createElement(s); js.id = id;
		    js.src = "//connect.facebook.net/en_US/sdk.js";
		    fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		// login with facebook with extened publish_actions permission
		function login() {
			FB.login(function(response) {
				console.log(response);
				if (response.status === 'connected') {
		    		document.getElementById('status').innerHTML = 'We are connected.';
		    		document.getElementById('login').style.visibility = 'hidden';
		    	} else if (response.status === 'not_authorized') {
		    		document.getElementById('status').innerHTML = 'We are not logged in.'
		    	} else {
		    		document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
		    	}
			}, {scope: 'publish_actions'});
		}
		// getting basic user info
		function getInfo() {
			FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id'}, function(response) {
				document.getElementById('status').innerHTML = response.id;
			});
		}
		// uploading photo on user timeline
		function uploadPhoto() {
			FB.api('/me/feed', 'post', {source: 'http://lh3.googleusercontent.com/nYhPnY2I-e9rpqnid9u9aAODz4C04OycEGxqHG5vxFnA35OGmLMrrUmhM9eaHKJ7liB-=w300', message : "SHOWDOWN POST",link:'http://54.175.71.74:3000'}, function(response) {
				if (!response || response.error) {
					console.log(JSON.stringify(response));
					document.getElementById('status').innerHTML = "Error!";
				} else {
					console.log(JSON.stringify(response));
					document.getElementById('status').innerHTML = response.id;
				}
			});
		}
		
		function uploadFeed(imgUrl, des) {
            console.log("img Url-------- " + imgUrl);
            $scope.loaderOverlay = false;
            var linkPage = 'http://playshowdown.com/feed?categoryName='+vm.stateType.categoryName+'&id='+ vm.stateType._id +
                '&type='+vm.stateType.type + '&feedType='+vm.stateType.feedType;
            FB.ui({
                    method: 'share_open_graph',
                    action_type: 'og.shares',
                    action_properties: JSON.stringify({
                        object: {
                            'og:url': linkPage,
                            'og:title': "Play Showdown",
                            'og:description': des,
                            'og:image': imgUrl
                        }
                    })
                },
                function (response) {
                console.log(response);
                    // if(response.post_id){
                    if(response.error_code != 4201){
                        vm.areYouSure = false;
                        $timeout(function(){
                            $('.overlay').show();
                            $('#congract4').show();
                        },1000);
                        console.log("post response1: " + JSON.stringify(response));
                    }
                    // }
                    // Action after response
                })
            
        }
		function readPermission() {
				FB.api(
					"/debug_token?input_token=EAAWI4WLX8eABAJHx3al6NIi2pLM7ZCZBXEgFUOp2gJQ3VOh7gRbLSdZBZAJgmjcuYcYT7jaqO4mrkOyUeCI2q8kuZBqZCzJajjEqPjsZAFzFnHJPhWWozOGqKRZCCvTARTOS67G04cUyeYi9RAZBSZCrZA1Jq6FOmiyksFnhSKkEaFHOQQbZB5siATE9AQCU7prTGv0ZD",
					function (response) {
						console.log(response)
						if (response && !response.error) {
							/* handle the result */
						}
					}
				);
		}
  };
//   FB.getLoginStatus(function(response){
//       if (response.status === 'connected'){
//           document.getElementById('status').innerHTML = 'We are connected';
//           document.getElementById('login').style.visibility = 'hidden';
//         } 
//         else if (response.status === 'not_authorized'){
//             document.getElementById('status').innerHTML = 'We are not logged in.';
//         }
//         else {
//             document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
//           }
// });
//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));

 
// var finished_rendering = function() {
//   console.log("finished rendering plugins");
//   var spinner = document.getElementById("spinner");
//   spinner.removeAttribute("style");
//   spinner.removeChild(spinner.childNodes[0]);
// }
// FB.Event.subscribe('xfbml.render', finished_rendering);


//    // login with extra permissions
//    function login () {
//        FB.login(function(response){
//         if (response.status === 'connected'){
//             document.getElementById('status').innerHTML = 'We are connected';
//             document.getElementById('login').style.visibility = 'hidden';
//           } 
//           else if (response.status === 'not_authorized'){
//               document.getElementById('status').innerHTML = 'We are not logged in.'
//           }
//           else {
//               document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
//             }
//         }, {scope: 'email'});
//     }
    
//     // getting basic user info
//     function getInfo() {
//         FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id'}, function(response) {
//             document.getElementById('status').innerHTML = response.id;
//        });
//      }