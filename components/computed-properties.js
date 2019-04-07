Vue.component('computed-properties',{
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
    template: `
    <div>
        <h2>Computed propertis</h2>
        <p>{{ Names }}</p>
    </div>
    `
})


