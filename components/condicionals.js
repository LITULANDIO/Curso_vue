Vue.component('condicionals', {
    data(){
        return{
            age:10
        }
    },
    template:`
        <div>
            <h2>Condicionales con v-if</h2>
            <input v-model="age"/>
            <p v-if="age < 18 ">Menor de edad</p>
            <p v-else-if="age >= 18 && age < 30">Mayor de edad y menor de 30</p>
            <p v-else-if="age >= 30 && age < 65">30 años o más y menor de 65</p>
            <p v-else>Estás jubilado</p>
        </div>
    `
})