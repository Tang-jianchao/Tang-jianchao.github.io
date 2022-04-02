(function(){
    
    // 传入id绑定事件
    window.$ = function(id){
        const dom = document.getElementById(id)
        return {
            click: (fn) => {
                dom.addEventListener('click', fn)
            }
        };
    }
}())