export const mixin = {
    data() {
        return {
          mixinName:'mixin'
        }
      },
      methods:{
        mixinMethods(){
          console.log("its mixin methods")
        }
      }
}