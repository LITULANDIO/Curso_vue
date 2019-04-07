Vue.component('vmodel-checkboxes',{
    data () {
        return{
            frameworks: []
        }
    },
    template: `
    <div>
      <h2>Vmodel con arrays</h2>
      <input type="checkbox" id="vuejs2" value="Vuejs 2" v-model="frameworks"/>
      <label for="vuejs2">Vuejs 2</label>
      <input type="checkbox" id="react" value="Reactjs" v-model="frameworks"/>
      <label for="React">React</label>
      <input type="checkbox" id="angular 2" value="Angular 2" v-model="frameworks"/>
      <label for="vuejs2">Angular 2</label>
      <input type="checkbox" id="Polymer" value="Polymer" v-model="frameworks"/>
      <label for="polymer">Polymer</label>
      <p>Frameworks seleccionados: {{ frameworks }}</p>
    </div>
      `
})