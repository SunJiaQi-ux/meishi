function rem(){
    document.documentElement.style.fontSize=document.documentElement.clientWidth/7.4+"px"
}
rem();
window.onresize=rem;