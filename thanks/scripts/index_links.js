var listDiv = document.getElementById("links_list");
var listPanel = document.getElementById("links_panel");
var title = document.getElementById("links_title");
/* var img = document.createElement("img");
img.setAttribute("src", "imgs/random_photos/"+randomNum(1,6)+".jpg");
//img.setAttribute("width", "100px");
img.style.display = "none";
document.body.appendChild(img);
img.onload = function () {
    {
        var canvas = document.createElement("canvas");
        canvas.style.display = "none";
        document.body.appendChild(canvas);
        StackBlur.image(img, canvas, 10, false);
        listPanel.style.backgroundRepeat = "no-repeat";
        listPanel.style.backgroundSize = "cover";
        listPanel.style.backgroundPosition = "center";
        listPanel.style.backgroundImage = "url('" + canvas.toDataURL() + "')";

        title.style.color="white";
    }
}; */
listPanel.style.backgroundRepeat = "no-repeat";
listPanel.style.backgroundSize = "cover";
listPanel.style.backgroundPosition = "center";
listPanel.style.backgroundImage = "url('" + "imgs/random_photos/"+randomNum(1,6)+".jpg" + "')";
for (var i = 0; i < adArray.length; i++) {
    var obj = adArray[i];
    var item = document.createElement("div");
    item.setAttribute("class", "aditem mdui-ripple");
    item.setAttribute("onclick", "javascript:window.open('" + obj.link + "')");
    item.style.backgroundColor = window.matchMedia('(prefers-color-scheme: dark)').matches ? "#171717B5" : "#D0D0D0B5";
    item.style.color = window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "black";

    item.innerHTML = "<p><img align='middle' style='margin:10px' src='" + obj.icon + "' width='30px height='30px'><b style='font-size: medium;vertical-align: middle;'>" + obj.name + "</b></p><p>" + obj.description + "</p><div style='text-align: right;'>" + obj.link_name + " ▶</div>";

    listDiv.appendChild(item);
}
title.style.color="white";