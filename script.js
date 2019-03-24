var app = new Vue({
  el: '#app',
  data: {
    message: "Star Wars Encyclopedia",
    response: {}
  },
  methods: {
    getData: function() {
      fetch('https://swapi.co/api/people/')
      .then(data => data.json())
      .then(results => {
        console.log(results.results)
        app.response = results.results
      })
    }
  },
  beforeMount() {
    this.getData();
  }
})
