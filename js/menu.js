

function showMeal(element){
    var path = element.querySelector("img").src;
    var head = element.querySelectorAll("div span")[0].innerHTML;
    var price = element.querySelectorAll("div span")[1].innerHTML;
    //window.location.href = "preview.html?img="+path+"&head="+head+"&price="+price;
    window.location.href = "preview.html?img="+path+"&head="+head+"&price="+price;
}