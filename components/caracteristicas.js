var tarjetas = new Vue({
    el: '#tarjetas',
    data: {
        listaProducto: []
    },
    methods: {
        getUsuario(){
            axios
            .get('http://localhost:5000/Productos')
            .then(response => {
                console.log(response.data);
                this.listaProducto = response.data;
            })
            .catch(e => console.log("catch",e));    
        }
    },
    mounted() {
        this.getUsuario();                
    },
})