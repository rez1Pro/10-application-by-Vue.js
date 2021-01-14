import { onMounted, onUnmounted } from 'vue';
export default function useWindowEvent(eventName , handler){ 
    onMounted(() => window.addEventListener(eventName, handler));
    onUnmounted(() => window.removeEventListener(eventName, handler));
}
