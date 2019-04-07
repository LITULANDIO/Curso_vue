

## COMPUTED PROPERTIES

- Nos permite concatenar más de una varibale, y mostrarlas mediante un computed.

```javascript
 computed:{
        Names () {
            return `${this.name}  ${this.nick}`;
        }
```

## METHODS

Nos permite agrupar instancias y agruparlas en una única función. Con la propiedad this podemos instanciar cualquier función.

```javascript
 methods:{
        hello (){
            alert(this.Names)
        }

    },
```