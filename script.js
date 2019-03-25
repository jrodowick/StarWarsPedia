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
    },
    hideMenu: function(event) {
      let $li = $('li')
      $li.each(function(index) {
        $(this).delay(100 * index).animate({
          opacity: 0.0,
          paddingLeft: '+=200'
        })
      })
    }
  },
  beforeMount() {
    this.getData();
  }
})
