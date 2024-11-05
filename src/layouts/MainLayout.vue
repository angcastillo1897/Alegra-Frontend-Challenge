<template>
    <div class="min-h-screen flex flex-col bg-gray-300">
        <MainNavbar />
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import MainNavbar from '@/components/ui/MainNavbar.vue';
</script>

<style lang="scss" scoped></style>