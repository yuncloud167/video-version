window.scrollTo(0, 0)
window.onload = function() {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function() {
        return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements(".selector", {
        scrollY: {
            translateY: [
                ["elInY", "elOutY"],
                [30, -30]
            ]
        }
    });

    // Add animation bindings to elements
    lax.addElements(".selector2", {
        scrollY: {
            translateY: [
                ["elInY", "elOutY"],
                [50, -50],
            ],
        }
    });

    lax.addElements(".right", {
        scrollY: {
            translateX: [
                ["elInY", "elOutY"],
                [1000, "-screenWidth-3000"]
            ]
        }
    });

    lax.addElements(".left", {
        scrollY: {
            translateX: [
                ["elInY", "elOutY"],
                [-4000, "screenWidth-1000"]
            ]
        }
    });

    lax.addElements(".right2", {
        scrollY: {
            translateX: [
                ["elInY", "elOutY"],
                [0, "-screenWidth-3000"]
            ]
        }
    });
}