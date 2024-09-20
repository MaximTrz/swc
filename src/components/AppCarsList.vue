<template>
  <div class="cars-list">
    <div class="cars-list__header">
      <div class="cars-list__controls">
        <div class="cars-list__search">
          <div class="search-input">
            <input
              type="text"
              class="search-input__input"
              placeholder="Search VIN"
              v-model="searchQuery"
              @input="fetchCars"
            />
          </div>
        </div>
        <div class="cars-list__select">
          <div class="base-select">
            <label for="vehicles-per-page" class="base-select__label">
              Select vehicles per page:
            </label>
            <select
              id="vehicles-per-page"
              class="base-select__select"
              v-model.number="perPage"
            >
              <option value="9">9</option>
              <option value="18">18</option>
              <option value="27">27</option>
            </select>
          </div>
        </div>
      </div>
      <div class="cars-list__add-button">
        <AppBaseButton text="Add Vehicle" type="add" />
      </div>
    </div>
    <ul class="cars-list__items">
      <li
        class="cars-list__item"
        v-for="car in cars"
        :key="car.vin"
      >
        <AppCarCard
          :title="car.title"
          :vin="car.vin"
          :image="car.placeholder"
        />
      </li>
    </ul>
    <div class="cars-list__footer">
      <span class="cars-list__info">
        Showing {{ cars.length }} out of {{ total }}
      </span>
      <div class="cars-list__pagination">
        <div class="pagination">
          <button
            class="pagination__button"
            :disabled="page === 1"
            @click="page--"
          >
            &lt;
          </button>
          <span class="pagination__info">
            Page
            <span class="pagination__page">{{ page }}</span>
            of
            <span class="pagination__page">{{ lastPage }}</span>
          </span>
          <button
            class="pagination__button"
            :disabled="page === lastPage"
            @click="page++"
          >
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AppCarCard from './AppCarCard.vue'
import AppBaseButton from './buttons/AppBaseButton.vue'
export default {
  name: 'AppCarsList',
  components: {
    AppCarCard,
    AppBaseButton
  },
  data () {
    return {
      cars: [],
      searchQuery: '',
      perPage: 9,
      page: 1,
      totalCars: 0,
      lastPage: 0,
      total: 0
    }
  },
  watch: {
    page () {
      this.fetchCars()
    },
    perPage () {
      this.page = 1
      this.fetchCars()
    }
  },
  methods: {
    fetchCars () {
      axios
        .get('https://api.caiman-app.de/api/cars-test', {
          params: {
            search: this.searchQuery,
            per_page: this.perPage,
            page: this.page
          }
        })
        .then((response) => {
          this.cars = response.data.data
          this.totalCars = response.data.total
          this.lastPage = response.data.meta.last_page
          this.total = response.data.meta.total
        })
        .catch((error) => {
          console.error('Error fetching cars:', error)
        })
    }
  },
  mounted () {
    this.fetchCars()
  }
}
</script>

<style lang="scss">
.cars-list {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
  }

  &__controls {
    display: flex;
    align-items: center;
    width: 60%;
  }

  &__search{
    margin-right: 30px;
    flex-basis: 350px;
  }

  &__items {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 40px;
    padding: 20px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-top: 1px solid #ddd;
    background-color: #f8f8f8;

    &__info {
      font-size: 14px;
    }

    &__pagination {
      display: flex;
      align-items: center;

      &__pagination-info {
        margin: 0 10px;
        font-size: 14px;
      }

      &__pagination-button {
        padding: 10px 15px;
        margin: 0 5px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
