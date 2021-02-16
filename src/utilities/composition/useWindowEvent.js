import { onMounted, onUnmounted } from "vue";
export default function useWindowEvent(handleEvent, eventName) {
    onMounted(() => window.addEventListener(eventName, handleEvent));
    onUnmounted(() => window.removeEventListener(eventName, handleEvent));
    return
}