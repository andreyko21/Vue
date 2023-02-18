<template>
    <header class="header">
        <div class="container">
            <nav class="navigation">
                <a class="logo" href="">
                    <img src="@/assets/img/svg/logo.svg" alt="">
                    VAC
                </a>
                <div class="menuBlock">
                    <div class="buttonsBlock">
                        <button class="button buttonInventory button-unbackground">Inventory</button>
                        <button class="button buttonRequest button-background">Request a car</button>
                    </div>
                    <div @click="show" class="burgerMenu" :class="{active: burgerMenuB}">
                        <span></span>
                    </div>
                </div>
                <div class="rightMenuBlock" :class="{ active: burgerMenuB }">
                    <div class="linksBlock">
                        <a class="rightMenu__link inventory" href="">Inventory</a>
                        <a class="rightMenu__link" href="">Contact us</a>
                        <a class="rightMenu__link" href="">About VAC</a>
                        <a class="rightMenu__link" href="">Loan Rates</a>
                        <a class="rightMenu__link" href="">Video</a>
                        <a class="rightMenu__link" href="">Blog</a>
                        <a class="rightMenu__link" href="">Calculate</a>
                    </div>
                    <div class="socialBlock">
                        <a class="socialLink instagram icon purpleBg" target="_blank" href="https://www.instagram.com/"></a>
                        <a class="socialLink youtube icon purpleBg" target="_blank" href="https://www.youtube.com/"></a>
                        <a class="socialLink facebook icon purpleBg" target="_blank" href="https://www.facebook.com/"></a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
export default ({
    data() {
        return {
            burgerMenuB: false,
        }
    },
    methods: {
        show() {
            this.burgerMenuB = !this.burgerMenuB;
            document.body.classList.toggle('scroll');
        },
    },
})

</script>

<style lang="sass">
    @import '@/assets/scss/header.scss'
</style>
