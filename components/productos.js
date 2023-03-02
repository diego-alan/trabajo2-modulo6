    var productos = new Vue({
              el: '#productos',
              data: {
                
                precioEstilos: "background: orangered; color: white; font-weight: bold",       
                producto:
                            {
                              id:1,
                              imagen: "https://ae01.alicdn.com/kf/Sc3cc58f2a441419f970cc01f9e5358fbw/Dron-LU3-MAX-GPS-8K-HD-profesional-con-c-mara-Dual-card-n-autoestabilizador-Motor-sin.jpg_Q90.jpg_.web",
                              nombre: "Dron LU3 MAX GPS 8K HD",
                              descripcion: "Dron LU3 MAX GPS 8K HD profesional con <b>cámara Dual</b>,cardán autoestabilizador, Motor sin escobillas para evitar obstáculos, cuadricóptero plegable",
                              precio:"620",
                              colores:["red","blue","black","yellow"] 
                            },

                pedido:
                           {
                              id:null,
                              cantidad: 1,
                              color:null
                           },           
                        methods: {
                          miClick(texto){
                            alert(texto);
                          }
                        },
                        }
                    
      
        });
