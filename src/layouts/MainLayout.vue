<template>
    <div class="min-h-screen flex flex-col bg-bkg overflow-y-hidden">
        <MainNavbar />
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import MainNavbar from '@/components/ui/MainNavbar.vue';
</script>

<style lang="scss" scoped></style>