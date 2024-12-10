const nextConfig = {
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
    experimental: {
        turbo: {
            rules: {
                "*.scss": {
                    loaders: ["sass-loader"],
                    as: "*.css",
                },
            },
        }
    },
    // sassOptions: {
    //     silenceDeprecations: ["legacy-js-api"], // 👈 HERE
    // }
};


export default nextConfig;
