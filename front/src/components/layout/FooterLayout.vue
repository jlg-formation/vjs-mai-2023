<script setup lang="ts">
import { useArticleStore } from '@/stores/articles'

const articleStore = useArticleStore()
</script>

<template>
  <footer>
    <RouterLink to="/legal"> Mentions légales </RouterLink>
    <span>Nbr Articles: {{ articleStore.size }}</span>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: var(--eee);
  height: var(--height);
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
