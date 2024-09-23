<template>
  <div class="car-card" @mouseleave="closeMenu">
    <div class="car-card__header">
      <span class="car-card__menu-icon" @click="toggleMenu">...</span>
      <div v-if="isMenuOpen" class="car-card__menu">
        <ul>
          <li @click="handleAction('edit')">Edit</li>
          <li @click="handleAction('delete')">Delete</li>
        </ul>
      </div>
    </div>
    <img class="car-card__image" :src="image" alt="Car Image" />
    <div class="car-card__content">
      <h3 class="car-card__title">{{ title }}</h3>
      <p class="car-card__vin">{{ vin }}</p>
      <div class="car-card__footer">
        <span class="car-card__status">
          30/30
        </span>
        <span class="car-card__time-left">{{ getData(created) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarCard',
  props: {
    title: {
      type: String,
      required: true
    },
    vin: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    created: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    },
    handleAction (action) {
      this.isMenuOpen = false
    },
    closeMenu () {
      this.isMenuOpen = false
    },
    getData (date) {
      let formattedDate = new Date(date * 1000)
      formattedDate = formattedDate.toLocaleDateString()
      return formattedDate
    }
  }
}
</script>

<style lang="scss">
.car-card {
  cursor: pointer;
  background-color: #f8faff;
  border-radius: 12px;
  padding: 30px 16px 16px 16px;
  position: relative;
  font-family: Arial, sans-serif;
  text-align: center;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &__header {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  &__menu-icon {
    font-size: 25px;
    padding: 0 5px 10px 5px;
    color: #888;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-15px);
  }

  &__menu {
    position: absolute;
    top: 35px;
    right: 15px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    ul {
      list-style: none;
      padding: 10px;
      margin: 0;
    }

    li {
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }

  &__image {
    width: auto;
    max-height: 142px;
    border-radius: 8px;
  }

  &__content {
    padding-top: 16px;
    text-align: left;
  }

  &__title {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #1a2b48;
  }

  &__vin {
    color: rgba(41, 49, 72, 0.6);
    font-size: 15px;
    font-weight: bold;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
    padding-bottom: 20px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }

  &__status {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    background-color: rgba(243, 246, 248, 1);
    padding: 10px;
    border-radius: 5px;
  }

  &__time-left {
    font-size: 15px;
    font-weight: bold;
    line-height: 16px;
    color: rgba(41, 49, 72, 0.6)
  }
}
</style>
