Vue.component('child-data', {
  data (){
    return{
      cmpName: 'Child Data cmp'
    }
  },

    template: `
      <div>
        <h2>Acceso a datos del cmp padre desde el cmp hijo</h2>
   
      </div>
        `
})