filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


/******************* function to chat *************************** */
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  /****************************************************************** */

  var i = 0;
  var txt = '1 kilograms shoulder of lamb - 75 gm ghee -  4 clove - 30 gm garlic paste - 30 gm poppy seed paste - teaspoon saffron - 1 1/2 teaspoon coriander powder - 1 teaspoon powdered turmeric - 1 litre water - 15 gm flaked almonds - salt as required'; 
  var speed = 50;
  
  function typeWriter() {
    if (i < txt.length) {
     document.getElementById("demo").innerHTML += txt.charAt(i);
     i++;
  
      setTimeout(typeWriter, speed);
    }
  
  }