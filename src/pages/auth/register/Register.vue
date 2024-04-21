<template>
    <div class='z-10 w-full h-[100svh] overflow-hidden flex flex-col items-center justify-center bg-[#F8F8F8]'>
        <div
            class='maxContainer 4xl:w-[70%] xl:w-[80%] lg:w-[85%] w-[100%] 4xl:h-[75%] xl:h-[95%] lg:h-[90%] h-full bg-[#fff] flex flex-col items-center justify-center shadow-md'>
            <div
                class='4xl:w-[60%] 2xl:w-[70%] xl:w-[80%] lg:w-[70%] w-[75%] xl:h-[80%] lg:h-[85%] h-[90%] mx-auto flex items-center justify-center 4xl:gap-[2rem] 3xl:gap-[3rem] 2xl:gap-[2rem] gap-[0.2rem]'>
                <div class='4xl:w-[45%] 3xl:w-[40%] 2xl:w-[50%] w-[50%] md:block hidden'>
                    <div class="w-[70%] pb-[2rem] mx-auto 4xl:text-[2rem] 2xl:text-[1.9rem] xl:text-[1.7rem] text-[1.2rem] font-bold">
                        Cloud Computing
                    </div>
                    <div
                        class='4xl:w-[350px] 3xl:w-[300px] 2xl:w-[350px] xl:w-[280px] w-[200px] 4xl:h-[400px] 3xl:h-[350px] 2xl:h-[350px] xl:h-[300px] h-[230px]'>
                        <img class='w-full h-full' src="../../../assets/img/clouding.jpg" alt="Signup Image" />
                    </div>
                </div>
                    <div
                        class=' h-fit lg:max-w-full max-w-[400px] lg:w-[45%] md:w-[50%] sm:w-[60%] xs:w-[80%] ss:w-[90%] w-[95%] overflow-auto'>
                        <div class='md block xs:text-[1.5rem] text-[1.2rem] pb-[1rem] font-semibold uppercase text-center'>
                            Sign up with us
                        </div>
                        <div class="w-full pb-[1.5rem] flex justify-center items-center gap-[2rem]">
                            <button @click="isAdmin = false" class="px-[1rem] py-[0.4rem]" :class="isAdmin === false ? 'bg-[#4A55A2] text-white' : 'border border-[#4A55A2] text-black'">Regular user</button>
                            <button @click="isAdmin = true" class="px-[1rem] py-[0.4rem]" :class="isAdmin === true ? 'bg-[#4A55A2] text-white' : 'border border-[#4A55A2] text-black'">Admin</button>
                        </div>
                        <form class='w-[95%] mx-auto' @submit.prevent="signup">
                            <div class='w-full mb-0 3xl:pb-[2rem] 2xl:pb-[1.5rem] xl:pb-[1rem] md:pb-[0.8rem] pb-[1rem]'>
                                <fwb-input class="mb-0 rounded-none outline-none border-none" id="first_name"
                                    v-model="formValues.username" label="Username" placeholder="Enter your username"
                                    type='text' size="md" required />
                            </div>
                            <div class='w-full mb-0 3xl:pb-[2rem] 2xl:pb-[1.5rem] xl:pb-[1rem] md:pb-[0.8rem] pb-[1rem]'>
                                <fwb-input class="mb-0 rounded-none outline-none border-none" v-model="formValues.email"
                                    type='email' label="Email" placeholder="Enter your email" size="md" required />
                            </div>
                            <div
                                class='w-full mb-0 3xl:pb-[2rem] 2xl:pb-[1.5rem] xl:pb-[1rem] md:pb-[0.8rem] pb-[1rem] flex flex-col'>
                                <fwb-input class="mb-0  rounded-none outline-none border-none" v-model="formValues.password"
                                    type='password' label="Password" placeholder="Enter your password" size="md" required />
                            </div>
                            <div
                                class='w-full mb-0 3xl:pb-[2rem] 2xl:pb-[1.5rem] xl:pb-[1rem] md:pb-[0.8rem] pb-[1rem] flex flex-col'>
                                <fwb-input class="mb-0  rounded-none outline-none border-none" v-model="formValues.role"
                                    type='text' label="Role" placeholder="Enter your Role" size="md" required />
                            </div>
                            <div class='w-full 3xl:pt-[2rem] 2xl:pt-[1.5rem] xl:pt-[1.5rem] md:pt-[0.8rem] pt-[1rem]'>
                                <ButtonLoader size="lg" label="Register" :isLoading="isLoading" />
                                <!-- <fwb-button
                                    class="w-full bg-[#4A55A2] rounded-none text-white 3xl:py-[1.5rem] 2xl:py-[1rem] xl:py-[0.9rem] lg:py-[0.6rem] xs:py-[0.8rem] py-[0.6rem]">
                                    Register
                                </fwb-button> -->
                            </div>
                        </form>
                        <div class='2xl:pt-[2rem] xl:pt-[1.2rem] pt-[1rem] flex justify-center items-center gap-[1rem]'>
                            <div class='lg:w-[2rem] w-[1rem] lg:h-[0.15rem] xs:h-[1.3px] h-[1px] bg-gray-300'></div>
                            <div
                                class='3xl:text-[1.2rem] xl:text-[1rem] lg:text-[0.8rem] xs:text-[.8rem] text-[0.7rem] text-gray-600'>
                                Or </div>
                            <div class='lg:w-[2rem] w-[1rem] lg:h-[0.15rem] xs:h-[1.3px] h-[1px] bg-gray-300'></div>
                        </div>
                        
                        <div class='text-center '>
                            <div
                                class='3xl:text-[1.1rem] xl:text-[1rem] lg:text-[0.8rem] text-[0.7rem] text-gray-500 font-medium'>
                                Have an account?
                                <router-link to="/login" class='text-blue-800 cursor-pointer font-medium'>Login</router-link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import {  reactive, toRefs } from 'vue'
import { FwbInput } from 'flowbite-vue'
import { useRouter } from 'vue-router';
import ButtonLoader from '../../../elements/ButtonLoader.vue';
import apiService from '../../../services/api.service'
import Toast from "../../../helpers/Toast";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Register',
    components: {
        FwbInput,
        ButtonLoader,
    },
    data() {
        return {
            isAdmin: false,
        };
    },
    mounted() {
        if (localStorage.getItem('isLoggedIn')) {
            this.$store.dispatch('getUserProfile')
            document.location.href = "/dashboard"
        }
    },
    methods: {
        checkAdmin() {
            this.isAdmin = !this.isAdmin
        },
        async callback(response) {
            let socialForm = {
                "auth_token": response.credential
            }
            this.isLoading = true;
            apiService.post("/auth/google/register/", socialForm)
                .then((response) => {
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("aut", this.encodeToken(response.data.tokens["access_token"]));
                    localStorage.setItem("rut", this.encodeToken(response.data.tokens["refresh_token"]));
                    this.$store.state.userProfile = response.data.data;
                    // Stop progress indicator
                    this.isLoading = false;
                    // this.$router.push("/dashboard");
                    document.location.href = "/"
                    Toast.makeToast("success", response.data.message);
                })
                .catch((error) => {
                    this.isLoading = false;
                    Toast.makeToast("danger", error.response.data.message);
                });
        },
        encodeToken(token) {
            return window.btoa(this.$store.state.randString + token + this.$store.state.randString);
        }
    },
    setup() {
        const router = useRouter();
        const state = reactive({
            formValues: {
                username: '',
                email: '',
                password: '',
                role: '',
            },
            isLoading: false
        })

        function signup() {
            //Show progress indicator
            state.isLoading = true;

            apiService.post(`/auth/register/`, state.formValues)
                .then((response) => {
                    state.isLoading = false;
                    console.log(response.data);
                    Toast.makeToast("success", response.data.message);
                    router.push("/login");
                })
                .catch((err) => {
                    state.isLoading = false;
                    console.log(err.response);
                    state.message = err.response.data.message;
                    Toast.makeToast("danger", err.response.data.message);
                });
        }

        return {
            ...toRefs(state),
            signup
        }
    },

}
</script>

<style scoped></style>