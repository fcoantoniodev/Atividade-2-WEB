const app = Vue.createApp({
    data() {
        return {
            form: {
                title:"",
                descricao:"",
                quartos:"",
                vagas: "",
                areaT:"",
                areaC:"",
                local:"",
                preco:"",
                url:""

            },
            lista: []
        }
    },

    methods: {
        submitForm(e){
            e.preventDefault();
            this.creatElement();
            this.salvarAnuncio();
        },

        creatElement(){
            this.lista.push(this.form)
            
            
        },
        salvarAnuncio(){
            var lista_anuncios = JSON.parse(localStorage.getItem('lista_anuncios') || '[]');
            lista_anuncios.push(this.form);
            localStorage.setItem("lista_anuncios", JSON.stringify(lista_anuncios));
    },

         getLocalStorage(){
            var listaAnuncios = JSON.parse(localStorage.getItem("lista_anuncios"));
            this.lista = listaAnuncios ?   listaAnuncios: [];
}
}
});