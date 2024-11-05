<template>
    <header class="bg-white">
        <nav class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 min-h-[72px] relative">

            <RouterLink class="flex items-center" to="/">
                <img src="../../assets/img/logo.svg" class="h-8 mr-2" alt="Alegra Logo" />
                <span class="text-xl font-semibold whitespace-nowrap">Alegra</span>
            </RouterLink>

            <BaseButton type="button" @click="toggleMenu" class="md:hidden">
                <FontAwesomeIcon :icon="faBars" />
            </BaseButton>

            <div :class="isOpen ? 'block absolute border-t-2' : 'hidden'"
                class="border-gray-200 w-full md:block md:w-auto left-0 top-[72px] bg-white" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white gap-1">
                    <li>
                        <RouterLink class="block py-2 px-3 text-black hover:bg-gray-200 rounded" to="/"
                            @click="closeMenu">Inicio
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="block py-2 px-3 text-black hover:bg-gray-200 rounded" to="/invoice"
                            @click="closeMenu">Facturas
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BaseButton from '@/components/common/BaseButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { useNavbar } from '@/composables/useNavbar'

const { isOpen, toggleMenu, closeMenu } = useNavbar()

</script>

<style scoped></style>
