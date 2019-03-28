<template>
    <b-form @submit.prevent="$emit('login')">
        <b-form-group
            label="email"
            description="Los datos son privados">

            <b-form-input 
                type="email" 
                autocomplete="off" 
                v-model="user.email"
                v-validate="'required|email'"
                :state="validateState('email')"
                name="email"
                placeholder="Introduce el email admin@vue.com"></b-form-input>
            <b-form-invalid-feedback>
                {{ errors.first('email') }}
            </b-form-invalid-feedback>
            
        </b-form-group>

        <b-form-group
            label="password">

            <b-form-input 
                type="password" 
                autocomplete="off" 
                v-model="user.password"
                v-validate="'required|min:6|strength_password'"
                :state="validateState('password')"
                name="password"
                placeholder="Introduce el password @Password1"></b-form-input>
            <b-form-invalid-feedback>
                {{ errors.first('password') }}
            </b-form-invalid-feedback>
            
        </b-form-group>

        <b-button
            :disabled="errors.any() || !user.password"
            type="submit"
            variant="primary">Iniciar Sesion</b-button> 
    </b-form>
</template>

<script>
    import validateMixin from '@/mixins/validation'
    export default {
        mixins: [validateMixin],
        props: {
            user: {
                type: Object,
                required: true,
                validator: user => {
                    if(!user.hasOwnProperty('email') || !user.hasOwnProperty('password') ){
                        console.warn("Usuario no valido")
                        return false
                    }
                    return true
                }
            }
        }
    }
</script>
