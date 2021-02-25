<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="first-name" class="form-label"> First name </label>
                <input v-model="userData.first_name" type="text" required class="form-control" id="first-name" aria-describedby="first-name">
            </div>

            <div class="mb-3">
                <label for="last-name" class="form-label"> Last name </label>
                <input id="last-name" required v-model="userData.last_name" type="text" aria-describedby="last-name"  class="form-control">
            </div>

            <div class="mb-3">
                <label for="email" class="form-label"> Email </label>
                <input id="email" required  v-model="userData.email" type="email" aria-describedby="email"  class="form-control">
            </div>

            <div class="mb-3">
                <label for="password" class="form-label"> Password </label>
                <input id="password" required  v-model="userData.password" type="password" aria-describedby="password"  class="form-control">
            </div>

            <div class="mb-3">
                <label for="password_confirmed" class="form-label"> Confirm password </label>
                <input id="password_confirmed" required  v-model="userData.password_confirmed" type="password" aria-describedby="password_confirmed"  class="form-control">
            </div>

            <div class="mb-3">
                <label for="accepted_terms_and_conditions" class="form-label"> I accept the terms and conditions </label>
                <input id="accepted_terms_and_conditions" v-model="userData.accepted_terms_and_conditions" required type="checkbox" aria-describedby="accepted_terms_and_conditions"  class="form-control">
            </div>

            <p v-if="registerFailed" class="error-message"> Something went wrong </p>
            <button type="submit" class="btn btn-primary"> Register </button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'register',
    data() {
        return {
            registerFailed: false,
            userData: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmed: '',
                accepted_terms_and_conditions: false
            }
        };
    },
    methods: {
        async handleSubmit() {
            this.registerFailed = false;
            try {
                await this.register(this.userData);
                this.$router.push('/');
            } catch {
                this.registerFailed = true;
            }
        },
        ...mapActions('auth', ['register'])
    }
}
</script>

<style scoped>
.error-message {
  color: red;
}
</style>