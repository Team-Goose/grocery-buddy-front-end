var form = new Vue({
    el: "#form",
    data: {
        un: "",
        pw: ""
    }
})

function submit(){
    console.log(form.un + ", " + form.pw);
    window.location.href = "/mylist";
}