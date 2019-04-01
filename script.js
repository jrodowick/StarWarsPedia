var app = new Vue({
  el: '#app',
  data: {
    title: "Star Wars Encyclopedia",
    response: {},
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
      let $current = event.currentTarget
      let $li = $('li').not($current).addClass('hidden')
      let $selected = $('li:not(.hidden)')
      $li.each(function(index) {
        $(this).delay(100 * index).animate({
          opacity: 0.0,
          paddingLeft: '+=200',
        }, 1250, function() {
          $li.css({'display':'none'})
        });
      });
      $selected.append('<a v-on:click="showMenu" id="home" href="#" style="display:none">Home</a>')
      $('#home').fadeIn(4000).css({'margin-left':'50px'})

      this.getData(event.target.textContent.toLowerCase())
      document.getElementById(event.target.textContent.toLowerCase()).style.display = "block";

    },
    loadMenu: function() {
      $('li').each(function(index) {
        $(this).delay(100 * index).fadeIn(2000);
      });
    },
    showMenu: function() {
      $li = $('li')
      $li.each(function(index) {
        $(this).delay(100 * index).animate({
          opacity: 1.0,
          paddingLeft: '-=200',
        }, 1250, function() {
          $li.css({'display':'none'})
        });
      });
    }

  },
  mounted() {
    $('li').on('click', this.hideMenu);
    this.loadMenu();
  },
})
