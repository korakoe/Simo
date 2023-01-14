<script>
    import DarkToggle from "$lib/darkToggle.svelte";

</script>
<DarkToggle />
<img src="/favicon.png" alt="Simo." width="25" />
<div id="nav">
    <ul>
        <li><h1 class=LandingTitle>Simo.</h1></li>
        <li><span class=LandingWhite>The <span class=LandingBlue>Simon Says </span> Social Media.</span></li>
        <br>
        <li><span class=DescWhite>Every day you get <span class=DescRed>5</span> chances to be <span class=DescRed>Simon.</span> 
        <li><span class=DescWhite>What will you tell your friends to do?</span></li>
        <li><span><a class="go-to-app" href="/app">Go to app.</a> <a class="learn-more" href="/about">Learn More.</a></span></li>
    </ul>
</div>

<style>
    #nav {
        width: 100%;
        height: 100%;
    }

    #nav ul {
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }


    .LandingTitle {
        font-size: 70px;
        margin-bottom: -1rem;
        color: #FF008A;
        font-family: 'Reem Kufi Ink', sans-serif;
        font-weight: bold;
    }

    .LandingWhite {
        color: rgb(0, 0, 0);
        font-family: 'Reem Kufi Ink', sans-serif;
        font-weight: bold;
        transition: 0.3s
    }

    :global(html.dark) .LandingWhite {
            color: rgb(255, 255, 255);
            font-family: 'Reem Kufi Ink', sans-serif;
            font-weight: bold;
            transition: 0.3s
        }

    .LandingBlue {
        color: #20A4F3;
        font-family: 'Reem Kufi Ink', sans-serif;
        font-weight: bold;
    }

    .DescWhite {
        color: rgb(0, 0, 0);
        font-family: 'Reem Kufi Ink', sans-serif;
        transition: 0.3s
    }

    :global(html.dark) .DescWhite {
        color: rgb(255, 255, 255);
        font-family: 'Reem Kufi Ink', sans-serif;
        transition: 0.3s
    }

    .DescRed {
        color: #FF008A;
        font-family: 'Reem Kufi Ink', sans-serif;
    }

    

	:global(html) {
		background-color: #ffffff;
		color: #0084f6;
		transition: background-color 0.3s
	}
	:global(html.dark) {
		background-color: #000000;
		color: #bfc2c7;
	}

    ul {
        list-style-type: none;
        
    }

    .go-to-app {
        margin-top: 1rem;
        margin-right: 1rem;
        margin-left: 0rem;
        background-color: #FF008A;
        border: none;
        border-radius: 2rem;
        color: white;
        padding: 5px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-family: 'Reem Kufi Ink', sans-serif;
        font-weight: bold;
        font-size: 15px;
        transition: 0.3s
    }

    .go-to-app:hover{
        -webkit-box-shadow:0px 0px 28px 0px rgba(255,0,136,1);
        -moz-box-shadow: 0px 0px 28px 0px rgba(255,0,136,1);
        box-shadow: 0px 0px 28px 0px rgba(255,0,136,1);
        transform: scale(1.1);
        transition: 0.3s
    }

    .learn-more {
        margin-top: 1rem;
        margin-right: 1rem;
        margin-left: 0rem;
        background-color: #00000000;
        border: 3px solid #FF008A;
        border-radius: 2rem;
        color: #000000;
        padding: 3px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-family: 'Reem Kufi Ink', sans-serif;
        font-weight: bold;
        font-size: 15px;
        transition: 0.3s
    }

    :global(html.dark) .learn-more {
        margin-top: 1rem;
        margin-right: 1rem;
        margin-left: 0rem;
        background-color: #00000000;
        border: 3px solid #FF008A;
        border-radius: 2rem;
        color: #00000000;
        padding: 3px 25px;
        color: #ffffff;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-family: 'Reem Kufi Ink', sans-serif;
        font-weight: bold;
        font-size: 15px;
    }

    .learn-more:hover {
        -webkit-box-shadow:0px 0px 28px 0px rgba(255,0,136,1);
        -moz-box-shadow: 0px 0px 28px 0px rgba(255,0,136,1);
        box-shadow: 0px 0px 28px 0px rgba(255,0,136,1);
        color: #FF008A;
        transform: scale(1.1);
        transition: 0.3s
    }

    :global(html.dark) .learn-more:hover {
        -webkit-box-shadow:0px 0px 28px 0px rgba(255,0,136,1);
        -moz-box-shadow: 0px 0px 28px 0px rgba(255,0,136,1);
        box-shadow: 0px 0px 28px 0px rgba(255,0,136,1);
        color: #FF008A;
        transform: scale(1.1);
        transition: 0.3s
    }

</style>