<template>
    <div class="header">
        <div class="header__logo">Vechicles</div>
        <div class="header__actions">
          <div class="header__button"><AppAddButton/></div>
          <div class="header__profile">
            <img src="../assets/Photo.jpg" alt="User" class="header__avatar" />
            <span class="header__username">John Doe</span>
          </div>
        </div>
      </div>
</template>

<script>
import AppAddButton from '@/components/buttons/AppAddButton.vue'
export default {
  name: 'AppHeader',
  components: {
    AppAddButton
  }
}

</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  &__logo{
    font-size: 32px;
    font-weight: 700;
  }

  &__actions {
    display: flex;
    align-items: center;
  }

  &__button {
    margin-right: 20px;
  }

  &__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 17px;
    margin-right: 10px;
  }

  &__username {
    font-size: 15px;
    font-weight: bold;
    line-height: 22px;
    color: rgba(41, 49, 72, 1);
  }

  &__profile {
    display: flex;
    align-items: center;

  }
}
</style>
