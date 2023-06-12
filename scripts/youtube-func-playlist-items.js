
//let playlistsTest = ["PLS-FnlTtDdr9G2GI_xd-_OkhwvQSj1RJH", "PLS-FnlTtDdr_PFEg0LekU87vfCxsV0Yyb"]
let fieldVarItems = "pageInfo(totalResults), nextPageToken, items(contentDetails/videoId, snippet(title, videoOwnerChannelTitle))"
let playlistTitle;
//playlistsJson is declared 
let counter = 0

async function playlistSort(){


    for (let i = 0; i < playlistsJson.length; i++) {
playlistId = playlistsJson[i].id
playlistTitle = playlistsJson[i].snippet.title

await playlistItems()

if(Object.hasOwn(jsonResult, "nextPageToken")){
 await pageSift()
counter += jsonResult.pageInfo.totalResults
}

//for non-pageable playlists 
else {
jsonDownload.push(jsonBody)
  csvBody()
counter += jsonResult.pageInfo.totalResults
}

}
}




let jsonResult;
let jsonBody;
// Make sure the client is loaded and sign-in is complete before calling this method.
function playlistItems() {
  return gapi.client.youtube.playlistItems.list({
    "part": [
      "contentDetails, snippet"
    ],
    "maxResults": 50,
    "playlistId": playlistId,
      "fields": fieldVarItems
  })
    .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
jsonResult = response.result
jsonBody = response.body

  },
          function(err) { console.error("Execute error", err); });
}


//for flipping through pageTokens
function playlistItemsPaged(token) {
  return gapi.client.youtube.playlistItems.list({
    "part": [
      "contentDetails, snippet"
    ],
    "maxResults": 50,
    "pageToken": `${token}`,
    "playlistId": playlistId,
      "fields": fieldVarItems
  })
    .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
jsonResult = response.result
jsonBody = response.body

  },
          function(err) { console.error("Execute error", err); });
}






let jsonDownload = []
let csvDownload = [["Title", "Artist", "URL", "Playlist Title"]]

async function pageSift(){

  let token = jsonResult.nextPageToken
//  console.log(token)

  //in case initial response has pages
  while (/**/Object.hasOwn(jsonResult, "nextPageToken")) {
	jsonDownload.push(jsonBody)
    csvBody()

    await playlistItemsPaged(token)
    token = jsonResult.nextPageToken
  //  console.log(token)

  } 

//last page function call, same as an else statement

jsonDownload.push(jsonBody)
  csvBody()
}


//gives a string of json data
function csvBody(){
    for (let i = 0; i < jsonResult.items.length; i++) {

      csvDownload.push([
jsonResult.items[i].snippet.title,
jsonResult.items[i].snippet.videoOwnerChannelTitle.replace(/ - Topic/, ""),
jsonResult.items[i].contentDetails.videoId,
playlistTitle,//playlist title
])

    }
}
/*
      let musicSet = []

      musicSet.push(jsonResult.items[i].snippet.title)   
      musicSet.push(jsonResult.items[i].snippet.videoOwnerChannelTitle.replace(/ - Topic/, ""))
      musicSet.push(`https://www.youtube.com/watch?v=${jsonResult.items[i].contentDetails.videoId}`)
	musicSet.push(`${jsonResult.items[i].contentDetails.videoId}`)//playlist title

*/

