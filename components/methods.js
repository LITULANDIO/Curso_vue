Vue.component('methods',{
    data () {
        return{
            name: 'Carles',
            nick: 'El chato'
        }
    },
    computed:{
        Names () {
            return `${this.name} ${this.nick}`;
        }
    },
    methods:{
        hello (){
            alert(this.Names)
        }

    },
    template: `
    <div>
        <h2>Ejecutar métodos con vuejs</h2>
        <p @click="hello">Ejecutar aquí el método Hello : )</p>
    </div>
    `
})


