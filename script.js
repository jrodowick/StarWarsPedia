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
                <h3>Title: {{ movie.title }}, Released on {{ movie.release_date }}</h3>
                <p>Directed by {{ movie.director }}</p>
                <p>Produced by {{ movie.producer }}</p>
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
    }

  },
  beforeMount() {
    this.getData();
  },
})
