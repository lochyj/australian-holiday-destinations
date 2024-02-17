<script>
    import { onMount } from 'svelte'

    // We need this function to get the actual height of an element, that includes the border, the margin and the box shadow.
    function getAbsoluteHeight(el) {
        var styles = window.getComputedStyle(el);
        var margin = parseFloat(styles['marginTop']) +
                    parseFloat(styles['marginBottom']);

        return Math.ceil(el.offsetHeight + margin);
    }

    onMount(() => {
        var prevScrollpos = window.scrollY;

        /* Get the header element and it's position */
        var headerDiv = document.querySelector(".header");
        var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

        window.onscroll = function() {
            var currentScrollPos = window.scrollY;
            var delta = prevScrollpos - currentScrollPos

            /* if scrolling down, let it scroll out of view as normal */
            if (delta < 0.5){
                headerDiv.classList.remove("fixedToTop");
                headerDiv.style.top = `${-getAbsoluteHeight(headerDiv)}px`;
            }
            /* otherwise if we're scrolling up, fix the nav to the top */
            else {
                headerDiv.classList.add("fixedToTop");
                headerDiv.style.top = "10px";
            }

            prevScrollpos = currentScrollPos;
        }
    })

</script>

<div class="wrapper">

    <div class="header acrylic fixedToTop">
        <a href="/" style="grid-column: 2;" class="acrylic">links!</a>
        <a href="/" style="grid-column: 3;" class="acrylic">links!</a>
    </div>

    <div class="content">
        <h1>Motive</h1>
        <p>Why did we choose this topic?</p>
    </div>

</div>

<style>
    @import "/global.css";

    .header {
        color: var(--colour-primary);

        position: fixed;
        width: calc(100vw - 20px);

        top: 10px;
        left: 10px;
        right: 10px;

        display: grid;
        grid-template-columns: 1fr max-content max-content max-content max-content max-content 1fr;

        padding: 5px 10px;
        border-radius: 15px;

        transition: all 0.2s ease-in-out;
    }

    .header > a {
        margin: 10px 5px;
        color: var(--color-main);
        padding: 5px 10px;
        border-radius: 9999px;
        font-weight: 600;
    }

    .content {
        height: max-content;
        transition: all 0.2s ease-in-out;
        margin: 10px;
        margin-top: 5.5rem;
        align-items: center;
        text-align: center;
    }

    .header.fixedToTop {
        position: fixed;
        top: 10px;
    }
</style>
