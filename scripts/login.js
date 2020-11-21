var form = new Vue({
    el: "#form",
    data: {
        un: "",
        pw: ""
    }
})

function submit(){
    console.log(form.un + ", " + form.pw);

    var result;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://buddyapi.jackmal.com/login/" + form.un + "/" + form.pw);
    xhttp.responseType = "json";
    xhttp.onload = function(){
        result = xhttp.response;
    }
    xhttp.send();
    if(result) document.cookie = "id=" + result.id;
    else document.cookie = undefined;
    console.log(document.cookie);
    // debugger;

    window.location.href = "/mylist";
}