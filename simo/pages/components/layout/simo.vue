<template>
    <div class="simo-mobile md:simo-md lg:simo-lg xl:simo-xl 2xl:simo-2xl">
        <p class="simo-author-light dark:simo-author-dark">By: {{post.author}}</p>
        <h3 class="simo-task-light dark:simo-task-dark">{{post.task}}</h3>
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