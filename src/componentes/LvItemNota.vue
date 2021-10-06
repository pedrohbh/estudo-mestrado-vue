<template>
    <li>
        <span>{{ nota.conteudo }}</span>
    </li>
</template>

<script>
export default {
    name: 'lv-item-nota',
    props: {
        nota: {
            type: Object,
            required: true
        }
    },
}
</script>