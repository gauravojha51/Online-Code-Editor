const first= document.querySelector('.codec')
const iframe= document.querySelector('iframe')
const button= document.querySelector('button')

button.addEventListener("click",function(){
    var html=first.textContent
    iframe.src="data:text/html;charset=utf-8," + encodeURI(html)
})

codec.addEventListener('keyup',function(){
    var html= first.textContent
    iframe.src="data:text/html;charset=utf-8," + encodeURI(html)
})

