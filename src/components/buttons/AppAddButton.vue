<template>
    <button class="add-button">+</button>
</template>

<script>
export default {
  name: 'AppAddButton'
}
</script>

<style lang="scss">
    .add-button{
        border: 1px solid #ff4858;
        color: #ff4858;
        background-color: #fff;
        font-size: 25px;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
        &:hover{
            background-color: #ff4858;
            color: #fff;
        }
    }
</style>
