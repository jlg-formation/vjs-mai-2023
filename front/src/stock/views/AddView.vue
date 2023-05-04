<script setup lang="ts"></script>

<template>
  <main>
    <h1>Ajouter un article</h1>
    <form>
      <label>
        <span>Nom</span>
        <input type="text" />
      </label>
      <label>
        <span>Prix</span>
        <input type="number" />
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" />
      </label>
      <button class="primary">Ajouter</button>
    </form>
  </main>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-flow: column;
  gap: 0.5em;

  width: 100%;
  max-width: 25em;

  label {
    display: flex;
    flex-flow: column;

    input {
      border: 0.1em solid var(--aaa);
      border-radius: 0.3em;
      padding: 0.5em 1em;
    }
  }

  button {
    margin-top: 3em;
  }
}
</style>
