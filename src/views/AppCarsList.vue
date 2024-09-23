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
          :title="String(car.title)"
          :vin="String(car.vin)"
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
            @click="changePage(-1)"
          >
          </button>
          <span class="pagination__info">
            <span class="pagination__page">{{ page }}</span>
             <span class="pagination__text">of</span>
            <span class="pagination__page">{{ lastPage }}</span>
          </span>
          <button
            class="pagination__button --next"
            :disabled="page === lastPage"
            @click="changePage(1)"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AppCarCard from '@/components/AppCarCard.vue'
import AppBaseButton from '@/components/buttons/AppBaseButton.vue'
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
    },
    searchQuery () {
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
    },
    changePage (increment) {
      const nextPage = this.page + increment
      this.page = (nextPage > 0 && nextPage <= this.lastPage) ? nextPage : this.page
    }
  },
  mounted () {
    this.fetchCars()
  }
}
</script>

<style lang="scss">
.cars-list {
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  height: 100%;
  justify-content: space-between;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  &__controls {
    display: flex;
    flex-basis: 700px;
    align-items: center;
  }

  &__search{
    margin-right: 30px;
    flex-basis: 350px;
  }

  &__items {
    list-style: none;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 35px;
    padding: 0 20px 20px 20px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 50px 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
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

@media (max-width: 1024px) {
  .cars-list {
    &__header {
      display: block;
    }

    &__controls {
      display: block;
    }
    &__search{
      margin: 0;
      margin-bottom: 20px;
    }
    &__select{
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
    }
    &__add-button{
      display: flex;
      justify-content: center;
    }
  }
}

</style>
