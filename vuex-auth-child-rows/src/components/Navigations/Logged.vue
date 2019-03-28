<template>
    <b-nav tabs>
        <b-nav-item exact to="/secret">Pagina Secreta</b-nav-item>
        <b-nav-item exact to="/secret/notes">Notas Secreta</b-nav-item>
        <b-nav-item @click="_logout">Cerrar Sesion</b-nav-item>
    </b-nav>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        methods: {
            ...mapMutations('auth', ['logout']),
            _logout(){
                this.logout()
                this.$router.push('/login')
            }
        }
    }
</script>
