<template>
    <button :class="computedClasses" :type="type" :disabled="disabled" @click="handleClick">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// props
const {
    type = 'button',
    size = 'medium',
    color = 'primary',
    disabled = false,
    fullWidth = false
} = defineProps<{
    type?: 'button' | 'submit' | 'reset';
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'not_found';
    disabled?: boolean;
    fullWidth?: boolean;
}>();


const computedClasses = computed(() => {
    const baseClasses = 'font-bold rounded transition duration-200 h-10';
    const sizeClasses = {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
    };
    const colorClasses = {
        primary: 'bg-teal-500 text-white hover:bg-teal-700 focus:ring-2 focus:ring-teal-200',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-200',
        success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-gray-200',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-gray-200',
        not_found: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-gray-200',
    };

    return [
        baseClasses,
        sizeClasses[size],
        colorClasses[color],
        fullWidth ? 'w-full' : '',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ].join(' ');
});

// emit click
const emit = defineEmits<{
    (e: 'click', event: Event): void;
}>();

const handleClick = (event: Event) => {
    if (!disabled) {
        emit('click', event);
    }
};
</script>