let url='https://picsum.photos/v2/list';
let images = document.querySelector("#image1");
let button=document.querySelector("button");
button.addEventListener('click',fetchResults);


function fetchResults(){
    fetch(url)
    .then(function(result){
        return result.json()
        
    })
    .then(function(json){
        // console.log(json);
        // console.log(json[i].download_url);
        displayResults(json);
        
    })
    .catch((err)=>console.log(err))
    
}
function displayResults(json){
    // e.preventDefault();
    let i =Math.floor(Math.random() * 29) 
    let picture=json[i].download_url;
images.src=picture;
}



