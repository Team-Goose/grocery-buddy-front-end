Vue.component('toolbar', {
    props: ['full-logo'],
    template: '<div id="toolbar" class="tb"><div id="tbcontent" class="tbc"><div style="width: 13%;"><a href="/"><img src="/assets/leaf_logo.png" style="height: 80%; margin-left: 30%; margin-top: 1%; margin-bottom: auto;"/></a></div><span class="tbspacer"></span><a href="/login" class="login">log in</a></div><div id="tblineContainer" class="tblcontainer"><div id="tbline" class="tbl"></div></div></div>',
    data () {
        return {};
    }
});

new Vue({
    el: '#toolbarContainer',
    data: {}
});