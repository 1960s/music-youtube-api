
let channelId = "UCk4wPJZ9BdFauMI_5-P5J_A"
let fieldVar = "items(id, snippet(title))"
let playlistsJson; 

function channelPlaylists(){

  return gapi.client.youtube.playlists.list({
    "part": [
      "contentDetails, snippet"
    ],
    "maxResults": 50,
    "channelId": channelId,
      "fields": fieldVar
  })
    .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);

playlistsJson = response.result.items
//[a,b,c] = [response.result.items[0], response.result.items[1], response.result.items[7]]
//playlistsJson = [a,b,c]
//jsonObj = response.body
  },
          function(err) { console.error("Execute error", err); });



}

