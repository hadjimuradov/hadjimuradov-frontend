// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        // SCSS file in the project
        '~/assets/style/main.scss'
    ],
    modules: ['@nuxtjs/color-mode'],
    buildModules: ['@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            Roboto: true,
            'Josefin+Sans': true,
            'Roboto+Mono': true,
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
                ital: [100]
            },
        },
        download: true
    }
})
