module.exports = {
    name  : "Whirlwind Double Punch",
    style : "stagger",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : false,
    },
    
    hits : "same",
    
    height : "low",
    type   : "horizontal",

    frames : {
        startup   : 16,
        advantage : {
            hit   : 8,
            guard : 4,
        },
    },

    modifiers : [ "double" ],
};
    
