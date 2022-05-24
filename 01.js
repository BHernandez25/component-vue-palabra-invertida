 const app = new Vue({
     el: "#app",
     data: {
        fondo:'bg-warning',
        color: false

     },
     methods: {

        }
 })
 const app2 = new Vue({
   el: "#app2",
   data: {
      mensaje:"Hola mundo",
      contador:0
   },
      computed:{
      invertido(){
         return this.mensaje.split('').reverse().join('');
      },
      color(){
         return {
            'bg-success':this.contador<=10,
            'bg-warning':this.contador>10 && this.contador<20,
            'bg-danger':this.contador>=20
         }
      }

   },


   methods: {

      }
})



