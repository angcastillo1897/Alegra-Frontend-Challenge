<template>
    <header class="bg-bkgNav">
        <nav class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 min-h-[72px] relative">

            <RouterLink class="flex items-center" to="/">
                <img src="../../assets/img/logo.svg" class="h-8 mr-2" alt="Alegra Logo" />
                <span class="text-xl font-semibold whitespace-nowrap text-content">Alegra</span>
            </RouterLink>
            <div class="flex gap-2 md:hidden">
                <BaseButton type="button" @click="toggleDark()" color="transparent">
                    <FontAwesomeIcon :icon="isDark ? faMoon : faSun" />
                </BaseButton>
                <BaseButton type="button" @click="toggleMenu">
                    <FontAwesomeIcon :icon="faBars" />
                </BaseButton>
    
            </div>

            <div :class="isOpen ? 'block absolute border-t-2' : 'hidden'"
                class="border-gray-200 w-full md:block md:w-auto left-0 top-[72px] bg-bkgNav" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-bkgNav gap-1">
                    <li>
                        <RouterLink class="block py-2 px-3 text-content hover:bg-bkgNavHover rounded" to="/"
                        @click="closeMenu">Inicio
                    </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="block py-2 px-3 text-content hover:bg-bkgNavHover rounded" to="/invoice"
                        @click="closeMenu">Facturas
                    </RouterLink>
                    </li>
                    <li class="hidden md:block">
                        <BaseButton type="button" @click="toggleDark()" color="transparent">
                            <FontAwesomeIcon :icon="isDark ? faMoon : faSun" />
                        </BaseButton>
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
import { faBars,faMoon,faSun } from '@fortawesome/free-solid-svg-icons'

import { useDark, useToggle } from '@vueuse/core'
import { useNavbar } from '@/composables/useNavbar'

const { isOpen, toggleMenu, closeMenu } = useNavbar()
const isDark = useDark({
    selector: 'html',
    attribute: 'data-theme',
    valueDark: 'dark',
    valueLight: 'light',
})
const toggleDark = useToggle(isDark)

</script>

<style scoped></style>
