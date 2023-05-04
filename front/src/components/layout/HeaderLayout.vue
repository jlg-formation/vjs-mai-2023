<script setup lang="ts"></script>

<template>
  <header>
    <RouterLink to="/">
      <img src="/logo.svg" alt="Logo" />
      <span>Gestion Stock</span>
    </RouterLink>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: var(--eee);
  height: var(--height);
  padding: 0 0.5em;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.5em;

    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }

    span {
      font-weight: bold;
      font-size: 1.3em;
    }

    img {
      height: 2.5em;
    }
  }
}
</style>
