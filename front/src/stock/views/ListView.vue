<script setup lang="ts">
import type { Article } from '@/interfaces/Article'
import { useArticleStore } from '@/stores/articles'
import { ref } from 'vue'

const articleStore = useArticleStore()

const selectedArticles = ref(new Set<Article>())

const isDeleting = ref(false)
const errorMsg = ref('')

const handleSelect = (a: Article) => {
  if (selectedArticles.value.has(a)) {
    selectedArticles.value.delete(a)
    return
  }
  selectedArticles.value.add(a)
}

const handleDelete = async () => {
  try {
    isDeleting.value = true
    errorMsg.value = ''
    const ids = [...selectedArticles.value].map((a) => a.id)
    await articleStore.remove(ids)
    selectedArticles.value.clear()
  } catch (err) {
    console.log('err: ', err)
    if (err instanceof Error) {
      errorMsg.value = err.message
    }
  } finally {
    isDeleting.value = false
  }
}
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Rafraîchir">
          <font-awesome-icon icon="fa-solid fa-rotate-right" />
        </button>
        <RouterLink :to="$route.path + '/add'" class="button" title="Ajouter">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </RouterLink>
        <button
          title="Supprimer"
          :hidden="selectedArticles.size === 0"
          @click="handleDelete()"
          :disabled="isDeleting"
        >
          <font-awesome-icon
            :icon="'fa-solid ' + (isDeleting ? 'fa-circle-notch' : 'fa-trash-can')"
            :spin="isDeleting"
          />
        </button>
      </nav>
      <div class="error">
        {{ errorMsg }}
      </div>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="a in articleStore.articles"
            :key="a.id"
            @click="handleSelect(a)"
            :class="{ selected: selectedArticles.has(a) }"
          >
            <td class="name">{{ a.name }}</td>
            <td class="price">{{ a.price }} €</td>
            <td class="qty">{{ a.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped lang="scss">
div.content {
  display: flex;
  flex-flow: column;

  nav {
    display: flex;
    gap: 0.3em;
  }

  div.error {
    height: 2em;
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  table {
    border: 0.1em solid var(--bbb);

    border-radius: 0.3em;
    border-collapse: separate;
    border-spacing: 0;
    overflow: hidden;

    td,
    th {
      padding: 0.5em 1em;
    }

    thead {
      background-color: var(--bbb);
    }

    tbody {
      cursor: pointer;
      tr:nth-child(even) {
        background-color: var(--eee);
      }

      tr:hover {
        background-color: var(--ddd);
      }

      tr.selected {
        background-color: var(--ccc);
      }

      td.price,
      td.qty {
        text-align: right;
      }
    }
  }
}
</style>
