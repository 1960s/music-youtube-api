

//NAMING AND CREATING PLAYLIST
let playlistTitle = document.getElementById("playlistTitle")
let playlistDescription = document.getElementById("playlistDescription")
let playlistId;

  function playlistInsert() {
     gapi.client.youtube.playlists.insert({
      "part": [
        "snippet, contentDetails"
      ],
      "resource": {
        "snippet": {
          "title": "SAMPLE2",
          "description": "test"
        }
      }
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
 playlistId = response.result.id
              },
              function(err) { console.error("Execute error", err); });
  }


  async function playlistMaker() {

for (let i = 0; i < csvData.length; i++) {

    await gapi.client.youtube.playlistItems.insert({
      "part": [
        "snippet"
      ],
      "resource": {
        "snippet": {
          "playlistId": playlistId,
         // "position": 0,
          "resourceId": {
            "kind": "youtube#video",
            "videoId": csvData[i].videoId,
          }
        }
      }
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);

              },
              function(err) { console.error("Execute error", err); });
}


  }