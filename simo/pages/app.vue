<script setup lang="ts">
import Navbar from "./components/layout/navbar.vue";
</script>

<template>
    <head>
        <link rel="manifest" href="manifest.json" />
    </head>
    <body class="bg-main-2-light dark:bg-main-2-dark transition duration-150 ease-in-out">
        <Navbar>
            Hello World
        </Navbar>
    </body>
</template>