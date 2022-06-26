module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            loader: "@svgr/webpack",
            options: {
                svgoConfig: {
                    plugins: [
                        {
                            name: "preset-default",
                            params: {
                                overrides: { removeViewBox: false },
                            },
                        },
                    ],
                },
            },
        });

        return config;
    },
};
