<script setup lang="ts">
import Navbar from "./components/layout/navbar.vue";
import Simos from "./components/layout/list.vue"
import { Head } from "nuxt/dist/head/runtime/components";
</script>

<script lang="ts">
    export default {
    head () {
        return {
            meta: [
                {property:"og:type", content:"website"},
                {property:"og:title", content:"Simo."},
                {property:"og:description", content:"Simo. The simon says Social Media!"}

            ]
        }
    }
}
</script>

<template>
    <body class="bg-main-2-light dark:bg-main-2-dark transition duration-150 ease-in-out">
        <Simos/>
        <Navbar>
            Hello World
        </Navbar>
        <div class="top-fade-light dark:top-fade-dark">Simo.</div>
    </body>
</template>