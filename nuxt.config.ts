export default {
  mode: "spa",
  env: {},
  head: {
    title: "books_rental",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js TypeScript project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ],
    script: [
      { src:"https://code.jquery.com/jquery-3.4.0.min.js" }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  modules: [
    "@nuxtjs/axios",
    "bootstrap-vue/nuxt"
  ],
  plugins: ["~/plugins/initStore"],
  axios: {}
}
