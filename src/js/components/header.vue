<template>
    <header>
        <ul>
            <li>
                <a href="#" @click.stop.prevent="changeLocale('ro')">RO</a>
            </li>
            <li>
                <a href="#" @click.stop.prevent="changeLocale('en')">EN</a>
            </li>
            <li>
                <a href="#" @click.stop.prevent="changeLocale('ja')">JA</a>
            </li>
        </ul>
    </header>
</template>

<script>

    export default {
        name: 'AppHeader',
        props: {},
        mounted: function () {
        },
        
methods:{
    changeLocale: function (locale){
        Util.i18n_locale(locale);
    }
}

    };
</script>

<style scoped lang='scss'></style>