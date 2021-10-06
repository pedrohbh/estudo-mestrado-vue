<template>
  <li>
    <button @click="apagar()">Apagar</button>
    <span>{{ nota.conteudo }}</span>
  </li>
</template>

<script>
import Nota from "./../servicos/notas";
export default {
  name: "lv-item-nota",
  props: {
    nota: {
      type: Object,
      required: true,
    },
  },
  methods: {
    apagar() {
      if (confirm("Deseja realmente apagar a anotação?"))
        Nota.apagar(this.nota.id)
          .then((r) => {
            console.log(r);
            this.emitter.emit("atualizacao");
          })
          .catch((e) => {
            console.log(e);
            alert("Erro ao apagar");
          });
    },
  },
};
</script>