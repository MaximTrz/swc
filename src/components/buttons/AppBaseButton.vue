<template>
  <button :class="buttonClass" @click="rotateButton">
      <span class="base-button__text">
        <template v-if="!alterText">
          {{ text }}
        </template>
        <span v-else>Хочу на собеседование</span>
      </span>
  </button>
</template>

<script>
export default {
  name: 'AppBaseButton',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'add'
    }
  },
  data () {
    return {
      isRotated: false,
      alterText: false
    }
  },
  computed: {
    buttonClass () {
      return {
        'base-button': true,
        [`base-button--${this.type}`]: this.type,
        rotate: this.isRotated
      }
    }
  },
  methods: {
    rotateButton () {
      if (!this.isRotated & !this.alterText) {
        this.isRotated = true
        this.alterText = true
        setTimeout(() => {
          this.isRotated = false
        }, 1000)
        setTimeout(() => {
          this.alterText = false
          this.isRotated = true
        }, 2000)
        setTimeout(() => {
          this.isRotated = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss">
.base-button {
  background-color: #ff4858;
  border: 1px solid #ff4858;
  outline: none;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 1px;
  white-space: nowrap;
  color: #fff;
  padding: 10px 15px 10px 65px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  .base-button__text {
      position: relative;
      text-transform: uppercase;
      &::before {
          padding: 0;
          font-size: 35px;
          position: absolute;
          display: flex;
          font-weight: normal;
          justify-content: center;
          align-items: center;
          content: "+";
          width: 25px;
          height: 25px;
          background-size: cover;
          top: 50%;
          left: -40px;
          transform: translate(-50%, -50%);
          transition: background 0.3s ease;
      }
  }

  &:hover {
      background-color: #fff;
      color: #ff4858;
  }
}

.rotate {
animation: rotate 1s;
}

@keyframes rotate {
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
}
</style>
