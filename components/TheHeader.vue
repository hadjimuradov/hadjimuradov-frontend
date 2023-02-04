<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__left">
          <div class="logo">
            <a class="logo__link" href="">Hadjimuradov</a>
          </div>
          <div class="navbar">
            <ul class="navbar__list">
              <li class="navbar__item">
                <a class="navbar__link" href="/blog">Блог</a>
              </li>
              <li class="navbar__item">
                <a class="navbar__link" href="/notes">Заметки</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="header__right">
          <color-mode />
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import ColorMode from "~/components/ColorMode.vue";
</script>

