<script setup lang="ts">
import Navbar from "./components/layout/navbar.vue";
import Simos from "./components/list.vue"
</script>

<template>
    <body class="bg-main-2-light dark:bg-main-2-dark transition duration-150 ease-in-out">
        <Simos/>
        <Navbar>
            Hello World
        </Navbar>
    </body>
</template>