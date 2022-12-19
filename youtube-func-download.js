
//download file for csv
function downloadCsv(csvArr){

let str = ""
for (let i = 0; i < csvArr.length; i++) {
  str += csvArr[i].join("\t")
  str += "\n"
}

    saveTextAsFile("playlists-csv", str, "csv")
}

//download file for json
function downloadJson(jsonArr){

    saveTextAsFile("json", jsonArr.join(","), "json")
}




//FILE SAVING
  function saveTextAsFile(fileName, contents, filetype){      
    var textToWrite = contents;
   var textToWrite = textToWrite.replace(/\n/g, "\r\n");
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = `${fileName}.${filetype}`; //name file here

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = `${fileName}`;//<--custom change, find out meaning

    window.URL = window.URL || window.webkitURL;

    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);

    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();


  }

  function destroyClickedElement(event){
    document.body.removeChild(event.target);
  }

/*

*/