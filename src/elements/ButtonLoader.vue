<template>
    <fwb-button class="bg-[#4A55A2] rounded-none" :size="size" :color="color" :class="width" :disabled="isLoading" type="submit">
        <div class="items-center inline-flex">
            <span>{{ label }}</span>
            <span class="ml-4">
                <fwb-spinner size="5" color="green" v-show="isLoading" />
            </span>
        </div>
    </fwb-button>
</template>

<script>
import { FwbSpinner, FwbButton } from 'flowbite-vue'
// import { Button } from 'flowbite-vue';
export default {
    name: "ButtonLoader",
    components: {
        FwbSpinner,
        FwbButton
    },
    props: {
        label: String,
        isLoading: Boolean,
        color: {
            type: String,
            default: "default"
        },
        width: {
            type: String,
            default: "w-full"
        },
        size: {
            type: String,
            default: "lg"
        }
    }
}
</script>