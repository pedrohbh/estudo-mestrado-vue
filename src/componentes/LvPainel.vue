<template>
  <span>Painel logado com {{ $store.state.usuario.nome }}</span>
  <button @click="sair">Sair</button>
  <hr />
  <lv-nova-nota></lv-nova-nota>
</template>

<script>
import LvNovaNota from "./LvNovaNota.vue";
export default {
  name: "lv-painel",
  components: {
    LvNovaNota,
  },
  methods: {
    sair() {
      this.$store.dispatch("logarUsuario", { id: 0, nome: "", email: "" });
      this.$router.replace("/");
    },
  },
};
</script>
