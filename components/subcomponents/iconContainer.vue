<template>
    <div class="svgDiv">
        <slot></slot>
        <p
        :placeholder="placeholder"
        class="flex justify-center w-full mx-auto text-center text-white">{{ placeholder }}</p>
    </div>
</template>

<script>

export default {
props: [  "placeholder" ],

}
</script>

<style>
.svgDiv {
@apply flex flex-col w-1/3 my-8 md:w-1/3 lg:w-1/4 xl:w-1/4
}
</style>
