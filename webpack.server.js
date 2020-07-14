const path = require("path")

module.exports = {
    // Inform webpack we're building for node
    target: "node",

    // Root file:
    entry: "./src/index.js",

    // Where to put the output
    output: {
        filename: "bundle.js",
        // __dirname is a reference to the current working directory
        path: path.resolve(__dirname, "build")
    },

    // Tell webpack to run babel on every file
    module: {
        rules: [
            {
                // Only run babel over js file
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: [
                    "react",
                    "stage-0",
                    ["env", {targets: {browsers: ["last 2 versions"]}}]
            ]
        }
        ]
    }
}