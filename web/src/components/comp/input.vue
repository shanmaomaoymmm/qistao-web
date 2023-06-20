<template>
  <div class="input">
    <div class="icon">
      <slot></slot>
    </div>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder" />
  </div>
</template>
<script lang="ts">
export default {
  name: 'input',
  props: ['placeholder', 'modelValue'],
  emits: ['update:modelValue'],
}
</script>
<style scoped>
.input {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
}

input {
  width: 100%;
  height: 100%;
  background-color: #fffe;
  border: none;
  outline: none;
  border-radius: 0.25rem;
  padding: 0 1rem 0 2rem;
  box-shadow: 0 0 0.125rem #0006 inset;
}

.icon {
  position: absolute;
  left: 0.5rem;
  font-size: 1rem;
  top: calc(50% - 0.8rem);
}
</style>