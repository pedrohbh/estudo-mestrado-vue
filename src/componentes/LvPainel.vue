<template>
  <span>Painel logado com {{ $store.state.usuario.nome }}</span>
  <button @click="sair">Sair</button>
</template>

<script>
export default {
  name: "lv-painel",
  methods: {
    sair() {
      this.$store.dispatch("logarUsuario", { id: 0, nome: "", email: "" });
      this.$router.replace("/");
    },
  },
};
</script>
