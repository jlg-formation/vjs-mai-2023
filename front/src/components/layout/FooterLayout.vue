<script setup lang="ts"></script>

<template>
  <footer>
    <RouterLink to="/legal"> Mentions légales </RouterLink>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: var(--eee);
  height: var(--height);
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
