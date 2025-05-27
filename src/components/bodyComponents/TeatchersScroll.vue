<template>
    <div class="professorPerfil">
        <img src="../../assets/teatchersList/professor.png" alt="professor-foto">
    <h2>{{ professor.name }}</h2>
    </div>
</template>

<script>
    export default {
        props: ['professor']
    }
</script>

<style scoped>
    img {
        height: 60px;
    }
</style>