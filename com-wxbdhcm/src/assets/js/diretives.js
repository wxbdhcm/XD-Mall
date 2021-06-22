export default {
    bind:function(el,binding,vnode){
       
        // console.log(el,binding,vnode)
    },
    inserted:function(el,bind,vnodewsss){
        // console.log(el,bind,vnodewsss)
        el.focus
      },
    update:function(el,binding){
        el.style.width = binding.value +'px'
        el.style.position = 'fixed'
        el.style.top = binding.value + 'px'
        el.style.color  = 'red'
    }
    
}