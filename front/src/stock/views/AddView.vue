<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('Truc')
const price = ref(0)
const qty = ref(1)

const router = useRouter()

const handleSubmit = (event: Event) => {
  console.log('event: ', event)
  console.log('submit')

  router.push('/stock')
}
</script>

<template>
  <main>
    <h1>Ajouter un article</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        <span>Nom</span>
        <input type="text" v-model="name" />
      </label>
      <label>
        <span>Prix</span>
        <input type="number" v-model="price" />
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" v-model="qty" />
      </label>
      <button class="primary">
        <font-awesome-icon icon="fa-solid fa-plus" />
        <span>Ajouter</span>
      </button>
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
