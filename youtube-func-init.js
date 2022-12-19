
gapi.load("client:auth2", function() {
  //gapi.auth2.init({client_id: CLIENTID});
});



//let TOKEN = ""

const client =  google.accounts.oauth2.initTokenClient({
  client_id: CLIENTID,
  scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
  callback: (tokenResponse) => {
TOKEN = tokenResponse.access_token
  },
});


function loadClient() {
  gapi.client.setApiKey(APIKEY);//apikey
 // gapi.client.setToken(TOKEN);//apikey
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(function() { console.log("GAPI client loaded for API"); },
          function(err) { console.error("Error loading GAPI client for API", err); });
}
