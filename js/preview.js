var preview = document.getElementById("preview");
var image = document.getElementById("image");
var head = document.getElementById("head");
var price = document.getElementById("price");
var searchParams = new URLSearchParams(window.location.search);
var descriptions = [
    ["chicken burger","These chicken burgers are made with crispy seasoned chicken breast fillets.I just halve chicken breasts to create two thin steaks or you can buy chicken breast already cut into steaks at the store."]
   
]

var des = "description";
descriptions.forEach(element=>{
    element[0]==searchParams.get("head").toLowerCase()?des=element[1]:"";
});

image.innerHTML = "<img src='"+searchParams.get("img")+"'>";
head.innerHTML = "<h3>Meal: "+searchParams.get("head")+"</h3>";
price.innerHTML = "<h3>Price: "+searchParams.get("price")+"</h3>";
preview.innerText = des;