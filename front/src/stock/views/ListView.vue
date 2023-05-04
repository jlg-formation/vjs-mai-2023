<script setup lang="ts"></script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button>Rafraîchir</button>
        <RouterLink to="./add" class="button">Ajouter</RouterLink>
        <button>Supprimer</button>
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
          <tr>
            <td class="name">Tournevis</td>
            <td class="price">3.50 €</td>
            <td class="qty">450</td>
          </tr>
          <tr>
            <td class="name">Pelle</td>
            <td class="price">2.50 €</td>
            <td class="qty">23</td>
          </tr>
          <tr>
            <td class="name">Rateau</td>
            <td class="price">10.00 €</td>
            <td class="qty">100</td>
          </tr>
          <tr>
            <td class="name">Marteau</td>
            <td class="price">4.60 €</td>
            <td class="qty">8</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
