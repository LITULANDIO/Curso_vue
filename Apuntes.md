

## COMPUTED PROPERTIES

- Nos permite concatenar más de una varibale, y mostrarlas mediante un computed.

```javascript
 computed:{
        Names () {
            return `${this.name}  ${this.nick}`;
        }
```

## METHODS

- Nos permite agrupar instancias y agruparlas en una única función. Con la propiedad this podemos instanciar cualquier función.

```javascript
 methods:{
        hello (){
            alert(this.Names)
        }

    },
```

## DATA BINDING V-MODEL

- Con v-model podemos cambiar el valor de la variable en tiempo real.

```javascript

Vue.component('vmodel',{
    data () {
        return{
           framework: 'Vuejs 2'
        }
    },
        template: `
            <div>
                <h2>Trabajando con vmodel</h2>
                <input v-model="framework" />
                <p>El framework escogido es: {{ framework }}</p>
            </div>
        `
    })

```