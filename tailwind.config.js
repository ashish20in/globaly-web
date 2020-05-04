module.exports = {
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        fontFamily: {
            sans: ["Work Sans"],
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1660px",
        },
        borderWidth: {
            default: "1px",
            "0": "0",
            "2": "2px",
            "4": "4px",
        },
        extend: {
            colors: {
                brandPrimary: {
                    500: "#D60707",
                },
                brandSecondary: {
                    700: '#2B1528',
                    600: "#341C32",
                    500: "#3D213B",
                    400: "#5A4258",
                },
                brandSuccess: {
                    500: "#4CC97E",
                },
                brandGray: {
                    500: "#333333",
                },
            },
        },
    },
    variants: {},
    plugins: [],
}