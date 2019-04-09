

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

## Emitir eventos a componentes padres con $emit

- Para emitir eventos a root, $emit(nombre del evento, variable)


Componente <emit>
```javascript

Vue.component('emit', {
    data() {
        return{
        carBrand: 'Toyota'
    }
},
 <p @click="$emit('show_car_brand', carBrand)">

```

index <root> Declaramos el componente e instanciamos el nombre del evento y a través del método que en data declaramos.
```javascript
     <emit @show_car_brand="showCarBrandFromEmitCmp"></emit>

     <script>
        new Vue({
          el: '#app',
          methods:{
            showCarBrandFromEmitCmp (carBrand){
              alert(carBrand)
            }
          }
      })
    </script>


```
## Acceso a datos del cmp padre al cmp hijo

- En el index o cmp padre
```javascript
     data () {
            return {
              appName: 'Iniciando con vuejs'
            }

```
- En el cmp hijo => para poder acceder al dato de un componente padre usamos $parent.dato
```javascript
Vue.component('parent-data', {

    template: `
      <div>
        <h2>Acceso a datos del cmp padre desde el cmp hijo</h2>
        <p>{{ $parent.appName }}</p>
      </div>
        `
})

```

## Acceso a datos del cmp hijo al cmp padre

- Para ello utiliaremos referncias => ref, en el componente instanciamos ref="cualquierNombre"
```html
<child-data ref="childData"></child-data>

```
- En el componente hijo:
```javascript
Vue.component('child-data', {
  data (){
    return{
      cmpName: 'Child Data cmp'
    }
  },
```
- En el componente padre, para acceder al dato del cmp hijo usaremos el hook mounted, creamos una variable, instanciamos con this.$refs.(nombre de la ref).dato_del_hijo
```javascript
  mounted (){
            const cmpName = this.$refs.childData.cmpName;
            console.log(cmpName);
          },

```

## Bucles con V-for

- Para iterar un array, o array de objetos, tenemos la directiva v-for

´´´javascript
<ul v-if="frameworks.length">
                <li v-for="(framework, index) in frameworks" :key="framework.id">
                    ({{ index }}) - {{ framework.name }}
                </li>
            </ul>

´´´

- index, es por si nos interesa saber el ínidice del array, :key con dos puntos identifica que es una variable

## Condicionales v-if v-else-if

```javascript
 <input v-model="age"/>
            <p v-if="age < 18 ">Menor de edad</p>
            <p v-else-if="age >= 18 && age < 30">Mayor de edad y menor de 30</p>
            <p v-else-if="age >= 30 && age < 65">30 años o más y menor de 65</p>
            <p v-else>Estás jubilado</p>

```