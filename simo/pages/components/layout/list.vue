<template>
    <div class="scrolling-component" ref="scrollComponent">
        <post-component 
        v-for="(post, index) in simos"
        :post='post'
        :key='index'/>
    </div>
</template>

<script>
    import getSimos from '~~/api/get_simos'
    import PostComponent from './simo.vue'
    import { ref, onMounted, onUnmounted } from 'vue'

    export default {
        components: {
            PostComponent
        },
        setup() {
            const simos = ref(getSimos(10))
            const scrollComponent = ref(null)

            const loadMoreSimos = () => {
                let newSimos = getSimos(10)
                simos.value.push(...newSimos)
            }

            onMounted(() => {
                window.addEventListener("scroll", handleScroll)
            })

            const handleScroll = (e) => {
                let element = scrollComponent.value
                if (element.getBoundingClientRect().bottom < window.innerHeight + 100) {
                    loadMoreSimos()
                }
            }

            return {
                simos,
                scrollComponent
            }
        }
    }


</script>