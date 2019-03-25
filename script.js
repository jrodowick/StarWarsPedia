var app = new Vue({
  el: '#app',
  data: {
    message: "Star Wars Encyclopedia",
    response: {},
    seen: false
  },
  methods: {
    getData: function(choice) {
      fetch('https://swapi.co/api/' + choice)
      .then(data => data.json())
      .then(results => {
        console.log(results)
        app.response = results
      })
    },
    hideMenu: function(event) {
      let $li = $('li')
      $li.each(function(index) {
        $(this).delay(100 * index).animate({
          opacity: 0.0,
          paddingLeft: '+=200'
        });
      });
      this.getData(event.target.textContent.toLowerCase())
      this.showHome();
    },
    showHome: function() {
      app.seen = true;
    },
    hideHome: function() {
      app.seen = false;
      let $li = $('li')
      $li.each(function(index) {
        $(this).delay(100 * index).animate({
          opacity: 1.0,
          paddingLeft: '-=200'
        });
      });

    }
  },
})
