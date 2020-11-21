var form = new Vue({
    el: "#form",
    data: {
        un: "",
        pw: "",
        pw2: "",
    }
});

function submit(){
    if(form.pw != form.pw2){
        alert("Your passwords must match!");
        return;
    }
    console.log(form.un + ", " + form.pw + ", " + form.pw2);

    var result;
    var xhttp = new XMLHttpRequest();
    var data = {
        username: form.un,
        pass: form.pw
    };
    data = JSON.stringify(data);
    xhttp.open("POST", "http://198.58.101.98/account/create");
    xhttp.responseType = "json";
    xhttp.onload = function(){
        result = xhttp.response;
    }
    xhttp.send(data);
    xhttp.open("GET", "https://198.58.101.98/login/" + form.un + "/" + form.pw);
    xhttp.onload = function(){
        result = xhttp.response;
    }
    xhttp.send();
    if(result) document.cookie = result.id;
    else document.cookie = undefined;
    // console.log(result);
    // console.log(document.cookie);
    // debugger;

    //as long as result doesn't say no
    window.location.href = "/mylist";
}