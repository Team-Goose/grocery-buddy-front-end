var form = new Vue({
    el: "#form",
    data: {
        em: "",
        un: "",
        pw: "",
        pw2: "",
    }
})

function submit(){
    console.log(form.em + ", " + form.un + ", " + form.pw + ", " + form.pw2);
}