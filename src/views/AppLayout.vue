<template>
  <div class="layout">
    <aside class="layout__aside">
      <AppSidebar/>
    </aside>
    <header class="layout__header">
      <AppHeader/>
    </header>
    <main class="layout__main">
        <AppCarsList/>
    </main>
  </div>
</template>

<script>
import AppCarsList from '@/components/AppCarsList.vue'
import AppSidebar from '@/components/AppSidebar'
import AppHeader from '@/components/AppHeader'

export default {
  name: 'AppLayout',
  components: {
    AppCarsList,
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
}

.layout__aside {
  grid-area: aside;
}

.layout__header {
  grid-area: header;
  background-color: #fff;
  padding: 15px 30px;
  border-bottom: 1px solid #eee;
}

</style>
