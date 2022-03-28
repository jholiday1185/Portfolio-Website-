
function showNavDrop() {

        document.getElementById("project-dropdown").classList.toggle("show");
}


window.onclick = function(e) {
    if (!e.target.matches(".dropbtn")) {
        var myDropdown = document.getElementById("project-dropdown");
        if (myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show");
                }
    }
}


function smartSearch() {
    // Dedlare variables 
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("my-projects");
    li = document.getElementsByTagName("li");

    //loop through list items and hide items that dont match query
    for(i=0; i < li.length; i++ ) {

        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }else {
            li[i].style.display = "none";
        }
    }
}