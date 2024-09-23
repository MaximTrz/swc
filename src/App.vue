<template>
  <div class="layout">
    <aside class="layout__aside">
      <AppSidebar/>
    </aside>
    <header class="layout__header">
      <AppHeader/>
    </header>
    <main class="layout__main">
      <router-view />
    </main>
  </div>
</template>

<script>

import AppSidebar from '@/components/AppSidebar'
import AppHeader from '@/components/AppHeader'

import './styles/blocks/search-input.scss'
import './styles/blocks/base-select.scss'
import './styles/blocks/pagination.scss'

export default {
  name: 'AppLayout',
  components: {
    AppSidebar,
    AppHeader
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
  &__aside {
    grid-area: aside;
  }
  &__header {
    grid-area: header;
    background-color: #fff;
    padding: 15px 30px;
    border-bottom: 1px solid #eee;
  }
}

@media (max-width: 1024px) {
  .layout {
    grid-template-columns: auto;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      "header"
      "aside"
      "main";
  }
}

</style>
