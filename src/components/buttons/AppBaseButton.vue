<template>
    <button :class="buttonClass">
        <span class="base-button__text">{{ text }}</span>
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
  computed: {
    buttonClass () {
      return {
        'base-button': true,
        [`base-button--${this.type}`]: this.type
      }
    }
  }
}
</script>

<style lang="scss">
.base-button {
    background-color: #ff4858;
    border: 1px solid #ff4858;
    color: #fff;
    padding: 10px 15px 10px 40px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease, color 0.3s ease;

    .base-button__text {
        position: relative;
        &::before {
            position: absolute;
            content: "";
            display: block;
            width: 25px;
            height: 25px;
            background-size: cover;
            top: 50%;
            left: -20px;
            transform: translate(-50%, -50%);
            transition: background 0.3s ease;
        }
    }

    &--add .base-button__text::before {
        background: url('../../assets/plus.svg') no-repeat center;
    }

    &:hover {
        background-color: #fff;
        color: #ff4858;

        &.base-button--add .base-button__text::before {
            background: url('../../assets/plus-hover.svg') no-repeat center;
        }

    }
}
</style>
