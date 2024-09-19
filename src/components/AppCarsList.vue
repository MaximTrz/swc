<template>
  <div class="cars-list">
    <div class="cars-list__header">
      <div class="cars-list__controls">
        <div class="cars-list__search">
            <input type="text" class="cars-list__search-input" placeholder="Search VIN" />
        </div>
        <div class="cars-list__select-container">
            <label for="vehicles-per-page" class="cars-list__label">
                Select vehicles per page:
            </label>
            <select id="vehicles-per-page" class="cars-list__select">
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="27">27</option>
            </select>
        </div>
      </div>
      <div class="cars-list__add-button"><AppBaseButton text="Add Vechicle" type="add"/></div>
    </div>
    <ul class="cars-list__items">
      <li class="cars-list__item" v-for="index in 9" :key="index">
        <AppCarCard />
      </li>
    </ul>
    <div class="cars-list__footer">
      <span class="cars-list__info">Showing 9 out of 256</span>
      <div class="cars-list__pagination">
        <button class="cars-list__pagination-button" disabled></button>
        <span class="cars-list__pagination-info">Page 1 of 10</span>
        <button class="cars-list__pagination-button"></button>
      </div>
    </div>
  </div>
</template>

<script>
import AppCarCard from './AppCarCard.vue'
import AppBaseButton from './buttons/AppBaseButton.vue'
export default {
  name: 'AppCarsList',
  components: {
    AppCarCard,
    AppBaseButton
  }
}
</script>

<style lang="scss">
.cars-list {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  &__search{
    position: relative;
    &::after{
        position: absolute;
        content: "";
        display: block;
        width: 30px;
        height: 30px;
        background: url('../assets/zoom.svg') no-repeat center;
        background-size: cover;
        top: 50%;
        right: -2px;
        transform: translate(-50%, -50%);
        transition: background 0.3s ease;
    }
  }

  &__search-input{
    position: relative;
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 10px;
    padding: 12px 30px 12px 12px;
    outline: none;
    font-size: 16px;
    font-weight: 400;
  }

  &__controls {
    display: flex;
    align-items: center;
  }

  &__select-container {
    display: flex;
    align-items: center;
    margin-right: 10px;

    &__label {
      margin-right: 5px;
    }

    &__select {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
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
