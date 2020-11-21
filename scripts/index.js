var cookiehtml = '<a href="/login" class="login">log in</a>';
window.onload = function(){
    if(document.cookie.id >= 0) cookiehtml = '<a href="/mylist" class="login">account</a>';
}

Vue.component('toolbar', {
    template: '<div id="toolbar" class="tb"><div id="tbcontent" class="tbc"><div style="width: 13%;"><a href="/"><img src="/assets/leaf_logo.png" style="height: 80%; margin-left: 30%; margin-top: 1%; margin-bottom: auto;"/></a></div><span class="tbspacer"></span>' + cookiehtml + '</div><div id="tblineContainer" class="tblcontainer"><div id="tbline" class="tbl"></div></div></div>',
    data () {
        return {};
    }
});

new Vue({
    el: '#toolbarContainer',
    data: {}
});