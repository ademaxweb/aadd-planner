<template>
  <header class="container mx-auto py-8">
    <nav>
      <ul>
        <li><NuxtLink to="/index" class="header__link">Главная</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>

<script lang="ts" setup>

</script>

<style>
  .header__link {
    @apply text-2xl
  }
</style>