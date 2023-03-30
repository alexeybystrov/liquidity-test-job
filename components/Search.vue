<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="8">
      <v-text-field
        class="mt-16 mb-4"
        hide-details="auto"
        prepend-inner-icon="mdi-magnify"
        outlined
        @input.native="fillSuggestionList($event.target.value)"
      />

      <v-card class="overflow-auto" max-height="calc(100vh - 250px)">
        <v-list v-if="suggestions.characters.length">
          <v-list-item style="background-color: silver">
            Characters
          </v-list-item>
          <v-list-item
            v-for="(item, i) in suggestions.characters"
            :key="`${item.name}-${i}`"
          >
            {{ item.name }}
          </v-list-item>
          <v-list-item class="justify-end" dense>
            <v-btn to="/characters" nuxt plain> View All </v-btn>
          </v-list-item>
        </v-list>

        <v-list v-if="suggestions.films.length">
          <v-list-item style="background-color: silver"> Films </v-list-item>
          <v-list-item
            v-for="(item, i) in suggestions.films"
            :key="`${item.title}-${i}`"
          >
            {{ item.title }}
          </v-list-item>
          <v-list-item class="justify-end" dense>
            <v-btn to="/films" nuxt plain> View All </v-btn>
          </v-list-item>
        </v-list>

        <v-list v-if="suggestions.starships.length">
          <v-list-item style="background-color: silver">
            Starships
          </v-list-item>
          <v-list-item
            v-for="(item, i) in suggestions.starships"
            :key="`${item.name}-${i}`"
          >
            {{ item.name }}
          </v-list-item>
          <v-list-item class="justify-end" dense>
            <v-btn to="/starships" nuxt plain> View All </v-btn>
          </v-list-item>
        </v-list>

        <v-list v-if="suggestions.vehicles.length">
          <v-list-item style="background-color: silver"> Vehicles </v-list-item>
          <v-list-item
            v-for="(item, i) in suggestions.vehicles"
            :key="`${item.name}-${i}`"
          >
            {{ item.name }}
          </v-list-item>
          <v-list-item class="justify-end" dense>
            <v-btn to="/vehicles" nuxt plain> View All </v-btn>
          </v-list-item>
        </v-list>

        <v-list v-if="suggestions.species.length">
          <v-list-item style="background-color: silver"> Species </v-list-item>
          <v-list-item
            v-for="(item, i) in suggestions.species"
            :key="`${item.name}-${i}`"
          >
            {{ item.name }}
          </v-list-item>
          <v-list-item class="justify-end" dense>
            <v-btn to="/species" nuxt plain> View All </v-btn>
          </v-list-item>
        </v-list>

        <v-list v-if="suggestions.planets.length">
          <v-list-item style="background-color: silver"> Planets </v-list-item>
          <v-list-item
            v-for="(item, i) in suggestions.planets"
            :key="`${item.name}-${i}`"
          >
            {{ item.name }}
          </v-list-item>
          <v-list-item class="justify-end" dense>
            <v-btn to="/planets" nuxt plain> View All </v-btn>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { searchStarWars } from '~/api/swapi';
import debounce from '~/utils/debounce';

const SUGGESTIONS_PER_CATEGORY = 3;
const GET_SUGGESTIONS_DELAY = 200;

const resourcesMap = {
  characters: 'people',
  films: 'films',
  starships: 'starships',
  vehicles: 'vehicles',
  species: 'species',
  planets: 'planets',
};

export default {
  data() {
    return {
      suggestions: {
        characters: [],
        films: [],
        starships: [],
        vehicles: [],
        species: [],
        planets: [],
      },
    };
  },

  methods: {
    fillSuggestionList: debounce(function (text) {
      if (!text.trim()) {
        this.clearSuggestions();
        return;
      }

      Object.keys(this.suggestions).forEach((element) => {
        this.getSuggestion(element, text);
      });
    }, GET_SUGGESTIONS_DELAY),

    async getSuggestion(element, text) {
      const res = await searchStarWars(resourcesMap[element], 1, text);
      this.suggestions[element] = res.results.slice(
        0,
        SUGGESTIONS_PER_CATEGORY
      );
    },

    clearSuggestions() {
      Object.keys(this.suggestions).forEach((element) => {
        this.suggestions[element] = [];
      });
    },
  },
};
</script>
