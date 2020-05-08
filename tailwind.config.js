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
            xl: "1280px",
            exl: "1660px",
        },
        borderWidth: {
            default: "1px",
            "0": "0",
            "2": "2px",
            "4": "4px",
        },
        boxShadow: {
            custom: '0px 4px 60px rgba(207, 207, 207, 0.45)',
        },
        extend: {
            colors: {
                brandPrimary: {
                    700: "#8B0505",
                    600: "#B60606",
                    500: "#D60707",
                    400: "#DC2C2C",
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
    variants: {
        borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
    },
    plugins: [],
}