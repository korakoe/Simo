<script lang="ts">
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

    <button on:click={handleSwitchDarkMode} class="align-images">
        <img src ="/dark.svg" alt="Dark Mode" class="dark-symbol img1"/>
        <img src ="/light.svg" alt="Light Mode" class="light-symbol img2"/>
    </button>

    <style>
        button {
            position: fixed;
            top: 0%;
            right: 0%;
            background-color: #00000000;
            color: #000000;
            border: none;
            border-radius: 4px;
            padding: 0.5rem;
            text-transform: uppercase;
            
        }
        :global(html.dark) button {
            color: #ffffff;
        }

        .dark-symbol {
            display: block;
        }

        :global(html.dark) .dark-symbol {
            display: none;
        }

        .light-symbol {
            display: none;
        }

        :global(html.dark) .light-symbol {
            display: block;
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(108deg) brightness(104%) contrast(104%);
        }


        .img1 {
            z-index: 1;
            width: 25px;
        }

        .img2 {
            z-index: 2;
            width: 25px;
        }

        .align-images {
            display: flex; 
            justify-content:center;
        }


    </style>