<template>
    <FwbToast :type="type" closable>
    {{message}} 
  </FwbToast>
</template>
<script>
import { FwbToast } from 'flowbite-vue'
export default {
    name: "ToastMessage",
    components: {
        FwbToast,
    },
    props: {
        message: String,
        type: {
            type: String,
            default: "success" // empty, warning, success, danger
        },
    }
}
</script>