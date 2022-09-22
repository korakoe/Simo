<template>
    <div class="simo">
        <p class="simo-author-light dark:simo-author-dark"> By: {{post.author}} </p>
        <h3 class="sim0-task-light dark:simo-task-dark"> {{post.task}} </h3>
        <div class="simo-image-container">
            <img :src="post.sourceImage" class="simo-image">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: Object
        }
    }

</script>