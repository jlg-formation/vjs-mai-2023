<script setup lang="ts">
import type { NewArticle } from '@/interfaces/Article'
import { useArticleStore } from '@/stores/articles'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const name = ref('Truc')
const price = ref(0)
const qty = ref(1)

const isAdding = ref(false)
const errorMsg = ref('')

const router = useRouter()
const route = useRoute()
const articleStore = useArticleStore()

const handleSubmit = async () => {
  try {
    isAdding.value = true
    errorMsg.value = ''
    const newArticle: NewArticle = {
      name: name.value,
      price: price.value,
      qty: qty.value
    }
    await articleStore.add(newArticle)
    const parentPath = route.matched[0].path
    router.push(parentPath)
  } catch (err) {
    console.log('err: ', err)
    if (err instanceof Error) {
      errorMsg.value = err.message
    }
  } finally {
    isAdding.value = false
  }
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
      <div class="error">
        {{ errorMsg }}
      </div>
      <button class="primary" :disabled="isAdding">
        <font-awesome-icon
          :icon="'fa-solid ' + (isAdding ? 'fa-circle-notch' : 'fa-plus')"
          :spin="isAdding"
        />
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

  div.error {
    height: 3em;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
