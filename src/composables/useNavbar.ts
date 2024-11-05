import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useNavbar() {
    const isOpen = ref(false);

    const toggleMenu = () => {
        isOpen.value = !isOpen.value;
    };

    const closeMenu = () => {
        isOpen.value = false;
    };

    const handleResize = () => {
        if (window.innerWidth >= 768 && isOpen.value) {
            closeMenu();
        }
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
    });

    return {
        isOpen,
        toggleMenu,
        closeMenu,
    };
}