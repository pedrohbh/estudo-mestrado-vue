<template>
  <ul style="text-align: left">
    <lv-item-nota v-for="(nota, ch) in notas" :key="ch" :nota="nota">
    </lv-item-nota>
  </ul>
</template>

