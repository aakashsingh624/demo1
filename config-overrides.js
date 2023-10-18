const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const projectName = require("./package.json").name;
const deps = require("./package.json").dependencies;

let shared = {};
Object.keys(deps).forEach((dep) => {
    shared[dep] = {
        singleton: true,
        requiredVersion: deps[dep],
    };
});

module.exports = (config, env) => {
    config.output.publicPath = "/";

    if (!config.plugins) {
        config.plugins = [];
    }

    const remoteHost = "http://localhost:3001/remoteEntry.js";
    config.plugins.unshift(
        new ModuleFederationPlugin({
            name: "Host",
            filename: "moduleEntry.js",
            remotes: {
                Remote: `Remote@${remoteHost}`,
                Host: "Host@http://localhost:3000/moduleEntry.js",
            },
            exposes: {
                "./store": "./src/store/index.tsx",
            },
            shared: {},
        })
    );

    return config;
};
