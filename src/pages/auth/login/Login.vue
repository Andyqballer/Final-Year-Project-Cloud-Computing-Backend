<template>
    <div class=' w-full h-[100svh] flex flex-col items-center justify-center bg-[#F8F8F8]'>
        <div
            class='maxContainer 4xl:w-[70%] xl:w-[80%] lg:w-[85%] w-[100%] 4xl:h-[75%] xl:h-[85%] lg:h-[90%] h-full bg-[#fff] flex flex-col items-center justify-center shadow-md'>
            <div
                class='4xl:w-[60%] 2xl:w-[70%] xl:w-[65%] lg:w-[70%] w-[75%] xl:h-[80%] lg:h-[85%] h-[90%] mx-auto flex items-center justify-center 4xl:gap-[2rem] 3xl:gap-[3rem] 2xl:gap-[2rem] gap-[0.2rem]'>
                <div class='4xl:w-[45%] 3xl:w-[40%] 2xl:w-[50%] w-[50%] md:block hidden'>
                    <div class="w-[70%] pb-[2rem] mx-auto 4xl:text-[2rem] 2xl:text-[1.9rem] xl:text-[1.7rem] text-[1.2rem] font-bold">
                        Cloud Computing
                    </div>
                    <div
                        class='4xl:w-[350px] 3xl:w-[300px] 2xl:w-[350px] xl:w-[280px] w-[200px] 4xl:h-[400px] 3xl:h-[350px] 2xl:h-[350px] xl:h-[300px] h-[230px]'>
                        <img class='w-full h-full' src="../../../assets/img/clouding.jpg" alt="Signup Image" />
                    </div>
                </div>
                <div class='lg:max-w-full h-fit max-w-[400px] lg:w-[45%] md:w-[50%] sm:w-[60%] xs:w-[80%] ss:w-[90%] w-[95%]'>
                    <div
                        class='xs:text-[1.5rem] text-[1.2rem] pb-[1rem] font-semibold uppercase text-center'>
                        Welcome back
                    </div>
                    <div class="w-full pt-[0.5rem] pb-[1.5rem] flex justify-center items-center gap-[2rem]">
                        <button @click="isAdmin = false" class="px-[1rem] py-[0.4rem]" :class="isAdmin === false ? 'bg-[#4A55A2] text-white' : 'border border-[#4A55A2] text-black'">Regular user</button>
                        <button @click="isAdmin = true" class="px-[1rem] py-[0.4rem]" :class="isAdmin === true ? 'bg-[#4A55A2] text-white' : 'border border-[#4A55A2] text-black'">Admin</button>
                    </div>
                    <form @submit.prevent="login">

                        <div class='w-full mb-0 lg:pb-0 md:pb-[2rem] pb-[1rem]'>
                            <fwb-input
                                class="mb-0 3xl:py-[1.3rem] 2xl:py-[1rem] xl:py-[1rem] lg:py-[0.6rem] rounded-none outline-none border-none"
                                v-model="formValues.email" type='email' label="Email" placeholder="Enter your email"
                                required />
                        </div>
                        <div class='w-full mb-0 lg:pb-0 pb-[0.5rem] flex flex-col'>
                            <fwb-input
                                class="mb-0 3xl:py-[1.3rem] 2xl:py-[1rem] xl:py-[1rem] lg:py-[0.6rem] rounded-none outline-none border-none"
                                v-model="formValues.password" type='password' label="Password"
                                placeholder="Enter your password" required />
                        </div>
                        <div @click="forgotPassword"
                            class='3xl:text-[1rem] xl:text-[0.8rem] text-[0.7rem] text-blue-800 font-medium text-right 4xl:pb-[3rem] xl:pb-[2.5rem] lg:pb-[2rem] pb-[1.5rem]'>
                            Forgot Password?
                        </div>
                        <div class='w-full'>
                            <ButtonLoader size="lg" label="Login" :isLoading="isLoading" />
                            <!-- <fwb-button class="w-full bg-[#4A55A2] rounded-none text-white 3xl:py-[1.1rem] 2xl:py-[1rem] xl:py-[1rem] lg:py-[0.6rem] xs:py-[0.8rem] py-[0.6rem]">
                                Login
                            </fwb-button> -->
                        </div>
                    </form>            
                    <div class='py-[2rem] text-center '>
                        <div
                            class='3xl:text-[1.1rem] xl:text-[1rem] lg:text-[0.8rem] text-[0.7rem] text-gray-500 font-medium'>
                            Don't have an account?
                            <router-link to="/register" class='text-blue-800 cursor-pointer font-medium'>Sign
                                up</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FwbInput } from 'flowbite-vue'
import ButtonLoader from '../../../elements/ButtonLoader.vue';
import Toast from "../../../helpers/Toast";
import axios from 'axios'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    components: {
        FwbInput,
        ButtonLoader,
    },
    data() {
        return {
            isAdmin: false,
            message: "",
            isLoading: false,
            formValues: {
                username: "",
                password: ""
            },
            socialForm: {
                auth_code: ""
            }
        };
    },
    mounted() {
        if (localStorage.getItem('isLoggedIn')) {
            this.$store.dispatch('getUserProfile')
            document.location.href = "/"
        }
    },
    methods: {
        async login(e) {
            e.preventDefault();
            //Show progress indicator

            this.isLoading = true;
            const base_url = await this.$store.state.base_url;
            const config = {
                headers: { "Content-Type": "application/x-www-form-urlencoded", "accept": "application/json" },
            };
            axios
                .post(base_url + `/auth/login/`, this.formValues, config)
                .then((response) => {
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("aut", this.encodeToken(response.data.tokens["access_token"]));
                    localStorage.setItem("rut", this.encodeToken(response.data.tokens["refresh_token"]));
                    if (response.data.data.businesses.length > 0) {
                        let business = response.data.data.businesses[0];
                        localStorage.setItem("business_name", business.name);
                        localStorage.setItem("business_uuid", business.uuid);
                    }
                    
                    this.$store.state.userProfile = response.data.data;
                    this.isLoading = false;
                    Toast.makeToast("success", response.data.message);
                    response.data.data.businesses.length < 1 ? document.location.href = "/business" : document.location.href = "/dashboard"
                })
                .catch((err) => {
                    this.isLoading = false;
                    Toast.makeToast("danger", err.response.data.message);
                });
        },

        encodeToken(token) {
            return window.btoa(this.$store.state.randString + token + this.$store.state.randString);
        }
    },

}
</script>

<style scoped></style>