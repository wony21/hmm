var fnObj;

$(()=> {
    initView();
    initEvent();
});

function initView() {

}

function initEvent() {
    $('#btn-enter').on('click', fnObj.enterIntro);
}

fnObj = {
    enterIntro: function () {
        console.log('goto intro');
        window.location.href = '/intro';        
    }
}