<template>
  <input type="text" v-model="conteudo" />
  <input
    @click="criar"
    type="submit"
    :value="estado"
    :disabled="estado != 'Criar'"
  />
</template>
<script>
import Nota from "../servicos/notas";

export default {
  name: "lv-nova-nota",
  data() {
    return { estado: "Criar", conteudo: "" };
  },
  methods: {
    criar() {
      if (this.conteudo != "") {
        this.estado = "Carregando...";
        Nota.criar(this.campos)
          .then((resposta) => {
            if (resposta.data.sucesso) {
              this.conteudo = "";
              this.emitter.emit("atualizacao");
            }
            this.estado = "Criar";
          })
          .catch((e) => {
            console.log(e);
            this.estado = "Criar";
          });
      }
    },
  },
  computed: {
    campos() {
      return {
        conteudo: this.conteudo,
        usuario_id: this.$store.state.usuario.id,
      };
    },
  },
};
</script>
