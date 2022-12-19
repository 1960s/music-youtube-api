//GETTING IDS FROM YOUTUBE SEARCH
let csvData; 
async function searchItems() {

for (let i = 0; i < csvData.length; i++) {

await gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 1,
      "q": `${csvData[i].artist} - topic ${csvData[i].song}`,
      "type": [
        "video"
      ],
      "fields": "items(id/videoId, snippet(title, channelTitle))"
    }
)
    .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);

csvData[i].videoId = response.result.items[0].id.videoId
  },
          function(err) { console.error("Execute error", err); });
}

console.log(csvData)

}



/*
*/
