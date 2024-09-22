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
        <span class="car-card__time-left">3 days left</span>
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
    max-height: 135px;
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
    font-size: 14px;
    color: #7a8ca1;
    margin: 4px 0;
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
    font-size: 14px;
    background-color: rgba(243, 246, 248, 1);
    padding: 10px;
    border-radius: 5px;
  }

  &__time-left {
    font-size: 14px;
    color: #7a8ca1;
  }
}
</style>
