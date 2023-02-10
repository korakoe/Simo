<script>
    import "../app.css";
    import { browser } from '$app/environment';

let darkMode = true;

function handleSwitchDarkMode() {
    darkMode = !darkMode;

    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    darkMode
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
}



if (browser) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        handleSwitchDarkMode();
    });
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
        darkMode = true;
    } else {
        document.documentElement.classList.remove('dark');
        darkMode = false;
    }
}
</script>

<slot />

