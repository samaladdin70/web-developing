const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLMTdZ61eBnyqzVhegrlKy38Zwzky-eugX&index=5&maxResults=50&key=AIzaSyDU-xbDsf-iaSwUPKzlLbUPq5x87EZXJo4#";
fetch(url).then(response => { return response.json() }).then(data => {

    // console.log(data.items);
    // console.log(data);
    getData(data.items);

    document.getElementById("player").src = "https://www.youtube.com/embed/" + data.items[0].snippet.resourceId.videoId + "?showinfo=0; rel=0;";
}).catch(error => {
    // هنا نضع اوامر الذي نرغب بتنفيذها عند حدوث خطا اثناء استرداد بيانات من  API

    console.log(error);  // هنا طلبنا بعر ض الخطا الذي حدث اثناء استرداد البيانات 
})

function getData(data) {
    // console.log(data);
    data.forEach((element) => {
        var title = element.snippet.title;
        var videoId = element.snippet.resourceId.videoId;
        var description = element.snippet.description;
        var img = element.snippet.thumbnails.standard.url;
        document.getElementById("content").innerHTML += '<div class="card-header shadow-sm p-3 mb-5 bg-white rounded" style="cursor:pointer;" onclick="loadVideo(\'' + videoId + '\')" >' + title +
            '<br>' + description.substring(0, 50) + '</div>';
    });

}

/*
function getData(data) {
    console.log(data);
    data.forEach(element => {
        var title = element.snippet.title;
        var videoId = element.snippet.resourceId.videoId;
        var img = element.snippet.thumbnails.standard.url;
        var description = element.snippet.description;

        document.getElementById("content").innerHTML +=
            '<div class="card-header shadow p-3 mb-5 bg-white rounded" onclick="loadVideo(\'' + videoId + '\')"> ' + title + '</div>'

            ;

        ;
    });
}*/


function loadVideo(videoId) {
    document.getElementById("player").src = "https://www.youtube.com/embed/" + videoId + "?showinfo=0; rel=0;";


}




setInterval(function () {
    document.getElementById("player").style.height =
        document.getElementById("player").getBoundingClientRect().width * 0.5625 + "px";

}, 1000);


