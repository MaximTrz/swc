<template>
  <div class="language-selector">
    <div class="language-selector__flag" :class="currentFlagClass"></div>
    <select class="language-selector__select" v-model="selectedLanguage">
      <option v-for="language in languages" :key="language.code" :value="language.code" class="language-selector__option">
        {{ language.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedLanguage: 'en',
      languages: [
        { code: 'en', name: 'En', flagClass: 'language-selector__flag--en' },
        { code: 'ptb', name: 'Ptb', flagClass: 'language-selector__flag--ptb' },
        { code: 'de', name: 'De', flagClass: 'language-selector__flag--de' }
      ]
    }
  },
  computed: {
    currentFlagClass () {
      const language = this.languages.find(lang => lang.code === this.selectedLanguage)
      return language ? language.flagClass : ''
    }
  }
}
</script>

<style lang="scss">
.language-selector {
  display: flex;
  align-items: center;
  &__select {
    outline: none;
    border: none;
    padding: 5px;
  }
  &__flag {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 0px;
    background-size: cover;
    background-position: center;
  }
  &__flag--en {
    background-image: url('../assets/flags/uk.svg');
  }

  &__flag--ptb {
    background-image: url('../assets/flags/portugal.svg');
  }

  &__flag--de {
    background-image: url('../assets/flags/germany.svg');
  }
}

</style>
