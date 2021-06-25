<template>
    <section class="background_littoral">
        <header-app />
        <div class="wrapper-center">
            <div class="interface-center">
                <img class="logo logo-h-medium" src="@/assets/img/logo_blanc.png" alt="">
                <register-form v-if="register"/>
                <login-form v-else/>
                <p v-if="register">Vous possédez déjà un compte ? <a @click="register = !register">Se connecter</a></p>
                <p v-else class="">Vous n'avez pas encore de compte ? <a @click="register = !register">Créer un compte</a></p>
            </div>
        </div>
    </section>
</template>

<script>

import LoginForm from '@/components/forms/LoginForm'
import RegisterForm from '@/components/forms/RegisterForm'
import Header from '@/components/Header'


export default {
    components: {
        'header-app': Header,
        "login-form": LoginForm,
        "register-form": RegisterForm
    },
    data (){
        return {
            register: false
        }
    },
} 
</script>
