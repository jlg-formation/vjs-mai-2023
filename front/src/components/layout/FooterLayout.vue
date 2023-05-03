<script setup lang="ts"></script>

<template>
  <footer>
    <a href="#"> Mentions légales </a>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: #eee;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
