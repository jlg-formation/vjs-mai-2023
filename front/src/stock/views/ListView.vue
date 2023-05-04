<script setup lang="ts">
import { useArticleStore } from '@/stores/articles'

const articleStore = useArticleStore()

setTimeout(() => {
  console.log('hello')
  articleStore.articles.push({ id: 'a4', name: 'Truc', price: 1, qty: 2 })
}, 2000)
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
        <button title="Supprimer">
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
          <tr v-for="a in articleStore.articles" :key="a.id">
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
