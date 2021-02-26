<template>
	<div>
        <form @submit.prevent="handleSubmit">

            <div class="mb-3">
                <label required for="email" class="form-label"> Email </label>
                <input type="email" v-model="credentials.email" id="email" aria-describedby="email" required class="form-control">
            </div>

            <div class="mb-3">
                <label required for="password" class="form-label"> Password </label>
                <input type="password" v-model="credentials.password" id="password" aria-describedby="password" required class="form-control">
            </div>

            <p v-if="loginFailed" class="error-message"> Something went wrong </p>
            <button type="submit" class="btn btn-primary"> Log in </button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'login',
    data() {
        return {
            loginFailed: false,
            credentials: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async handleSubmit() {
            this.loginFailed = false;
            try {
                await this.login(this.credentials);
                this.$router.push('/');
            } catch {
                this.loginFailed = true;
            }
        },
        ...mapActions('auth', ['login'])
    }
}
</script>

<style scoped>
.error-message {
    color: red;
}
</style>