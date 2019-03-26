<template>
    <div class="container">
        <h2 class="text-center text-muted">{{ appName }}</h2>
        <button class="btn btn-success btn-block" @click="$store.commit('increment', 1)">Incrementar</button>
        <div class="alert alert-secondary text-center mt-3">
            <!--{{ $store.state.counter }}-->
            {{ counter }}
        </div>
        <button class="btn btn-danger btn-block" @click="decrement(1)">Decrementar</button>
    </div>
</template>


<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        computed:{
            ...mapState(['counter', 'appName'])
        },
        methods:{
            ...mapMutations(['increment', 'decrement'])
        }
    }
</script>

