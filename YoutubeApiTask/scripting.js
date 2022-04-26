
var videos;
var totalRecords = 15;
var ItemsInPage = 5;
var totalPages = totalRecords/ItemsInPage;
var prevSelectedPageNo = 1;
var url;
API_KEY = 'AIzaSyCFEUIg3VBmKgMOsXrJc6sDZo_q9oLKIgQ';

 window.onresize = () => {RenderingFun()};
function renderSearchResult(){
    var searchBarValue = document.getElementById('searchbar').value;
    url =  `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=${searchBarValue}`;
    fetch(url)
    .then((response) => response.json())
    .then(function (data) {
        videos = data;
        RenderingFun();
        
    
    })
    .catch(err => {
        console.log(err)
    });
        
}
function RenderingFun(){
    document.getElementById("root").style.justifyContent = "space-between";
    if(screen.width <= 500){
        document.getElementById("root").style.justifyContent = "center";
        ItemsInPage = 1;
        totalPages = totalRecords/ItemsInPage;
    }
    else if(screen.width <= 960){
        ItemsInPage = 3;
        totalPages = totalRecords/ItemsInPage;
    }
    else{
        ItemsInPage = 5;
        totalPages = totalRecords/ItemsInPage;
    }
    
        displayPageNums();
        displayVideos(1);
    
}
function displayPageNums(){
    let pageNumsDiv = document.getElementById('pageNumbers');
    pageNumsDiv.innerHTML = '';
    
    let pageNumsHtml = ``
    for(let i = 1; i <= totalPages; i++){
        pageNumsHtml += `<button class="pageNum" id = ${i} onclick=displayVideos(${i})>${i}</button>`
    }
    pageNumsDiv.innerHTML += pageNumsHtml;
}
function displayVideos(startInd){
    setPageNum(startInd);
    let currStart = (startInd-1)*(ItemsInPage),currEnd = currStart+ItemsInPage;
    if(currStart >= 0 && currEnd <= videos.items.length){
        video = ''
        for(item of videos.items.slice(currStart,currEnd)){
                video += `
                <div class = "result">
                    <div class = "thumbnail"><img src = "${item.snippet.thumbnails.medium.url}"></div>
                    <br><br>
                     <div class = "videoDetails">
                        <div id ="title"><b>${item.snippet.title}</b></div>
                        <div class = "channelTitle"><b>Author   </b>${item.snippet.channelTitle}</div>
                        <div id="link"><b>VideoLink:  </b><a href="https://www.youtube.com/watch?v=${item.id.videoId}"> Watch It!! </a></div>
                        <div class = "description"><b>Description:  </b>${item.snippet.description}</div>
                       
                    </div>
                 </div>
                `
        }
        document.getElementById('root').innerHTML= video;
    }
    
}
function setPageNum(startInd){
    //prevPage
    let prevSelectedPage = document.getElementById(prevSelectedPageNo).style;
    prevSelectedPage.backgroundColor = "gray";
    prevSelectedPage.fontSize = "x-large";
    
    prevSelectedPageNo = startInd;
    //currPage
    let currPage =  document.getElementById(startInd).style;
    currPage.backgroundColor= "black";  
    currPage.fontSize = "xx-large";
}
