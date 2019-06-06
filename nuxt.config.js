// ของใหม่ export default{ }
module.exports = {
  mode: "spa",
  render: {
    resourceHints: false
  },
  router: {
    mode: "hash"
  },

  build: {
    vendor: [
      "vuetify", // ชื่อ packag
      "axios"
    ]
  },
  plugins: ["~/plugins/vuetify.js", "~/plugins/axios.js"],
  head: {
    title: "EEC-DEMO",
    meta: [
      { charset: "utf8" },
      { "http-equiv": "X-UA-Compatible", content: "IE-edge" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      { rel: "shortcut icon", href: "icons/favicon.png" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icons/favicon.png"
      },
      { rel: "apple-touch-icon", href: "/icons/favicon.png" },
      /// { rel: 'stylesheet', type: 'text/css', href: '/css/fontawesome-all.min.css'},
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
      }
    ]
  }
};
