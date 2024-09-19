<template>
  <div class="car-card">
    <div class="car-card__header">
      <span class="car-card__menu-icon">•••</span>
    </div>
    <img class="car-card__image" src="../assets/mersedes.png" alt="Car Image" />
    <div class="car-card__content">
      <h3 class="car-card__title">Mercedes-Benz C-Class</h3>
      <p class="car-card__vin">WDB 140O321A333419</p>
      <div class="car-card__footer">
        <span class="car-card__status">
          <i class="car-card__check-icon">✔</i> 30/30
        </span>
        <span class="car-card__time-left">3 days left</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarCard'
}
</script>

<style lang="scss">
.car-card {
    background-color: #f8faff;
    border-radius: 12px;
    padding: 16px;
    position: relative;
    font-family: Arial, sans-serif;
    text-align: center;
    &:hover{
       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    &__header {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    &__menu-icon {
        font-size: 18px;
        color: #888;
        cursor: pointer;
    }

    &__image {
        width: 100%;
        max-width: 260px;
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
        color: #4caf50;
    }

    &__check-icon {
        margin-right: 4px;
    }

    &__time-left {
        font-size: 14px;
        color: #7a8ca1;
    }
}

</style>
