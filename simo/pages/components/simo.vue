<template>
    <div class="simo">
        <p class="simo-author"> By: {{post.author}} </p>
        <h3 class="simo-task"> {{post.task}} </h3>
        <img :src="post.sourceImage" class="simo-image"> -->
        <p class="simo-likes"> {{post.likes}} </p>
    </div>
</template>

<script>
    export default {
        props: {
            post: Object
        }
    }

</script>

<style>
    .simo {
        background-color: #040009;
        border-radius: 2rem;
        margin: 4rem;
        
    }

    .simo-author {
        color: #332652;
    }

    .simo-task {
        color: white;
    }

    .simo-likes {
        color: #ff005d;
    }

</style>