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
    xhttp.open("POST", "https://buddyapi.jackmal.com");
    xhttp.responseType = "json";
    xhttp.onload = function(){
        result = xhttp.response;
    }
    xhttp.send(data);

    //as long as result doesn't say no
    window.location.href = "/mylist";
}