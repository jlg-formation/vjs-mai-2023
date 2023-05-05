<script setup lang="ts">
import type { Article } from '@/interfaces/Article'
import { useArticleStore } from '@/stores/articles'
import { ref } from 'vue'

const articleStore = useArticleStore()

const selectedArticles = ref(new Set<Article>())

const handleSelect = (a: Article) => {
  if (selectedArticles.value.has(a)) {
    selectedArticles.value.delete(a)
    return
  }
  selectedArticles.value.add(a)
}

const handleDelete = async () => {
  const ids = [...selectedArticles.value].map((a) => a.id)
  await articleStore.remove(ids)
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
        <button title="Supprimer" :hidden="selectedArticles.size === 0" @click="handleDelete()">
          <font-awesome-icon icon="fa-solid fa-trash-can" />
        </button>
      </nav>
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
  gap: 2em;

  nav {
    display: flex;
    gap: 0.3em;
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
