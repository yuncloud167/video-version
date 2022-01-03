$(function() {
    $('.vip').textillate({
        loop: false,
        autoStart: true,
        initialDelay: 1200,
        minDisplayTime: 2000,
        in: {
            effect: 'fadeInDown',
            // set the delay factor applied to each consecutive character
            delayScale: 1.5,
            // set the delay between each character
            delay: 100,
            // randomize the character sequence
            shuffle: false,
        },
        out: {
            effect: 'fadeOutDown',
            delayScale: 1.5,
            delay: 100,
            shuffle: false,
        }
    });
});

/*$('.vip').textillate({
    // the default selector to use when detecting multiple texts to animate
    selector: '.texts',

    // enable looping
    loop: true,

    // sets the minimum display time for each text before it is replaced
    minDisplayTime: 2000,

    // sets the initial delay before starting the animation
    // (note that depending on the in effect you may need to manually apply
    // visibility: hidden to the element before running this plugin)
    initialDelay: 1200,

    // set whether or not to automatically start animating
    autoStart: true,

    // custom set of 'in' effects. This effects whether or not the
    // character is shown/hidden before or after an animation
    inEffects: [],

    // custom set of 'out' effects
    outEffects: ['hinge'],

    // in animation settings
    in: {
        // set the effect name
        effect: 'fadeInLeftBig',

        // set the delay factor applied to each consecutive character
        delayScale: 1,

        // set the delay between each character
        delay: 100,

        // set to true to animate all the characters at the same time
        sync: false,

        // randomize the character sequence
        // (note that shuffle doesn't make sense with sync = true)
        shuffle: false,

        // reverse the character sequence
        // (note that reverse doesn't make sense with sync = true)
        reverse: false,

        // callback that executes once the animation has finished
        callback: function() {}
    },

    // out animation settings.
    out: {
        effect: 'hinge',
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: false,
        reverse: false,
        callback: function() {}
    },

    // callback that executes once textillate has finished
    callback: function() {},

    // set the type of token to animate (available types: 'char' and 'word')
    type: 'char'
});*/