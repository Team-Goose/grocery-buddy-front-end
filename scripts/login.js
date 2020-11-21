var form = new Vue({
    el: "#form",
    data: {
        un: "",
        pw: ""
    }
})

function submit(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      
    fetch("http://198.58.101.98/login/deuce/pass", requestOptions)
        .then(response => response.text())
        .then((result) => {
            console.log(result);
            // let temp = JSON.parse(result);
            // document.cookie = "id=" + temp.id;
            // console.log(document.cookie);
            // debugger;
        })
        .catch((error) => {
            console.log('error', error);
            document.cookie = undefined;
        })
        .finally(function(){
            window.location.href = "/mylist";
        });
}