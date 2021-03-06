Vue.component('nav-item', {
  data: function() {
    return {
      hash: '#'
    }
  },
  props: ['name'],
  template: '<li><a class="nav-link" :href="hash + name">{{name}}</a></li>'
})

Vue.component('film', {
  data: function() {
    return {

    }
  },
  props:['movie'],
  template: `
            <div class="film">
              <div>
                <h3>Title: {{ movie.title }}</h3>
                <p>Directed by {{ movie.director }}</p>
                <p>Produced by {{ movie.producer }}</p>
                <p>Released on {{ movie.release_date }}</p>
              </div>
            </div>
            `
})

var app = new Vue({
  el: '#app',
  data: {
    films: [],
    people: [],
    species: [],
    planets: [],
    vehicles: [],
    starships: [],
    apis: ['films','people','species','planets','vehicles','starships'],
  },
  methods: {
    getData: function() {
      Promise.all(this.apis.map(api => {
        return fetch('https://swapi.co/api/' + api).then(resp => resp.json())
      })).then(results => {
        console.log(results)
        this.films = results[0],
        this.people = results[1],
        this.species = results[2],
        this.planets = results[3],
        this.vehicles = results[4],
        this.starships = results[5]
      })
    },
    hideHome: function() {
      $('#home').css({'display':'none'})
    },
    showHome: function() {
      $('#home,#search').css({'display':'block'})
    },
    scrollTo: function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(event.target.hash).offset().top
      }, 1000);
      if(!$('#home').is(':visible'))
      {
        this.showHome();
      }
      else {
        {
          this.hideHome();
        }
      }

    }
  },
  beforeMount() {
    this.getData();
  },
})
