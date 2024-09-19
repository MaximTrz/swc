<template>
  <div class="layout">
    <aside class="layout__aside">
      <div class="sidebar">
        <div class="sidebar__logo">Demo Test</div>
        <nav class="sidebar__nav">
          <ul class="sidebar__menu">
            <li class="sidebar__item">
              <a href="#" class="sidebar__link sidebar__link--profile">Profile</a>
            </li>
            <li class="sidebar__item">
              <a href="#" class="sidebar__link sidebar__link--vechicle sidebar__link--active ">Vehicles</a>
            </li>
            <li class="sidebar__item">
              <a href="#" class="sidebar__link sidebar__link--settings">Setting</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    <header class="layout__header">
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
    </header>
    <main class="layout__main">
        <AppCarsList/>
    </main>
  </div>
</template>

<script>
import AppCarsList from '@/components/AppCarsList.vue'
import AppAddButton from '@/components/buttons/AppAddButton.vue'
export default {
  name: 'AppLayout',
  components: {
    AppCarsList,
    AppAddButton
  }
}
</script>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.layout {
  min-height: 100vh;
  display: grid;
  max-width: 1440px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
  grid-template-rows: auto 1fr;
  grid-template-columns: 0.22fr 1fr;
  grid-template-areas:
    "aside header header"
    "aside main main";
}

.layout__aside {
  grid-area: aside;
}

.sidebar {
  background-color: #1e1e1e;
  color: #fff;
  height: 100%;
  padding: 20px 0;
  text-align: center;
  &__logo {
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 100px;
  }

  &__nav{
    padding: 0;
  }

  &__menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    font-weight: 500;
    margin-bottom: 15px;

  }

  &__link {
    position: relative;
    color: #ccc;
    text-decoration: none;
    font-size: 16px;
    display: block;
    text-align: center;

    padding: 15px 0 15px 0px;

    &--active{
      background-color: #2c2c2c;
      color: #fff;
      border-left: 2px solid red;
    }

    &--profile{
        &::before{
            background: url('../assets/user.svg') no-repeat center;
        }
    }

    &--vechicle{
        &::before{
            background: url('../assets/rim.svg') no-repeat center;
        }
    }

    &--settings{
        &::before{
            background: url('../assets/settings.svg') no-repeat center;
        }
    }

    transition: background-color 0.3s;
    &:hover {
      background-color: #3c3c3c;
    }
    &::before{
        background-size: contain;
        position: absolute;
        content: '';
        display: block;
        width: 30px;
        height: 30px;
        top: 50%;
        left: 40px;
        transform: translate(-50%, -50%);
        transition: background 0.3s ease;
    }
  }
}

.layout__header {
  grid-area: header;
  background-color: #fff;
  padding: 15px 30px;
  border-bottom: 1px solid #eee;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  &__username {
    font-size: 16px;
    color: #333;
  }

  &__profile {
    display: flex;
    align-items: center;

  }
}
</style>
