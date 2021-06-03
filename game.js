

var cardContatiner = document.getElementById("cardViewer");

var buffer = "";

cardData.forEach(card => {
    var row = "<div><p><b>Title:</b> ";
    row += card['title'];
    row += "<br><b>Description:</b> ";
    row += card['description'];
    row += "<br><b>Type:</b> ";
    row += card['type'];
    row += "<br><b>Number:</b> ";
    row += card['number'];
    row += "<br><b>Image:</b> <img src='";
    row += card['imageSrc'];
    row += "' width='200px' height='200px'>"
    

    row += "</p></div>";
    buffer += row;
});

cardContatiner.innerHTML = buffer;

