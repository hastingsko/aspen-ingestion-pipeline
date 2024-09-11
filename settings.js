require('dotenv').config();
module.exports = {
    httpAdminRoot: "/red",
    httpNodeRoot: "/api",
    userDir: "./",
    flowFile: "flows.json",
    functionGlobalContext: {
        crypto: require('crypto'),
        CryptoJS: require('crypto-js')
    },
    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.NODE_RED_USERNAME,
            password: process.env.NODE_RED_PASSWORD,
            permissions: "*"
        }]
    },

    // Theme Customization
    editorTheme: {
        page: {
            title: "Stratis Data Pipeline.",
            favicon: "/absolute/path/to/favicon.ico",
            css: "/public/styles/login-custom.css",
            scripts: ["/absolute/path/to/custom-script.js"]
        },
        header: {
            title: "Stratis Data Pipeline",
            image: "/absolute/path/to/logo.png"
        },
        palette: {
            editable: true
        },
        login: {
            image: "/public/Okay.jpg"
        },
    },

    // Optional Global Context
    functionGlobalContext: {},

    // Logging (optional)
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};
