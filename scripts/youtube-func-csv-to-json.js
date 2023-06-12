//GETTING CSV FILES
let fileNameOutput;

  function handleFiles() {

   let fileInput = document.getElementById("fileInput")
    let arr = []

    for (let i = 0; i < fileInput.files.length; i++) {

      let reader = new FileReader()

      reader.readAsText(fileInput.files[i])

      reader.onload = function() {

	fileNameOutput = fileInput.files[i].name.replace(/\./gi, '-')//need to fix for lazy 
console.log(fileNameOutput)
	fileConverter(reader.result, fileNameOutput)
      }

    }
  }




//FILE CONVERSION
  function fileConverter(csvFile, fileNameOutput){

//breaking down CSV
//splitting page content to lines
    let arr1 = csvFile.split("\n")
 console.log(arr1)
     
//splitting line content to items
let arr2 = []
arr1.forEach((el) => {

arr2.push(el.split("\t"))
})
console.log(arr2)


//building up JS Object
csvData = []
//title headings are in 0, so start on 1
for (let i = 1; i < arr2.length; i++) {
  
  let musicObj = {}
  for (let j = 0; j < arr2[i].length; j++) {
//headings are in 0, ex."artist" and "song"
    musicObj[arr2[0][j]] = arr2[i][j]
  }
 
               
  csvData.push(musicObj)
}
//saveTextAsFile(fileNameOutput, "js", JSON.stringify(csvData))
console.log(csvData)
  }