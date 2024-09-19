<template>
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
</template>

<script>

export default {
  name: 'AppSidebar'
}

</script>

<style lang="scss">
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
</style>
