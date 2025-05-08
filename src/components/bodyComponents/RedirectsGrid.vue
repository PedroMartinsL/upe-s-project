<template>
    <div id="grid-news">
        <div class="redirect-panel blue">
            oi
        </div>
        <div class="redirect-panel red">
            oi
        </div>
        <div class="redirect-panel green">
            oi
        </div>
        <div class="redirect-panel yellow">
            oi
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    #grid-news {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        width: 300px;
        height: 300px;
    }

    .redirect-panel {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid blue;
    }

    .blue {
        background-color: rgb(84, 134, 148);
    }
    .red {
        background-color: rgb(169, 73, 73);
    }
    .green {
        background-color: rgb(48, 125, 74);
    }
    .yellow {
        background-color: rgb(178, 198, 26);
    }
</style>