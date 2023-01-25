//////////////////////////////////////////////////
// Dev Projects
//////////////////////////////////////////////////
const devProjects = [
    {
        title: 'Parsec Soda - Open Source Game Streaming App',
        engine: {
            name: 'VS2019',
            icon: 'img/vs2019.png',
            website: 'https://visualstudio.microsoft.com/'
        },
        language: {
            name: 'C++',
            icon: 'img/cpp.png',
            website: 'https://isocpp.org/'
        },
        repos: [
            { href: 'https://github.com/FlavioFS/ParsecSoda' }
        ],
        imgs: [
            'https://i.ytimg.com/vi/u929KNLovj0/maxresdefault.jpg',
            'https://i.postimg.cc/jShk85BQ/plug.gif',
            'https://i.postimg.cc/gjPf36qZ/audio.gif'
        ]
    },
    {
        title: 'Battle transition shaders (old Pokémon style)',
        engine: {
            name: 'Godot',
            icon: 'img/godot.png',
            website: 'https://godotengine.org/'
        },
        repos: [
            { href: 'https://github.com/flaviofs/godot-pokemon-transitions' }
        ],
        imgs: [
            'https://i.postimg.cc/bvzMSHv3/preview1.gif',
            'https://i.postimg.cc/SsRvDSC9/preview2.gif',
            'https://i.postimg.cc/yNvGmggB/preview3.gif'
        ]
    },
    {
        title: 'Player Finite Multi-State Machine (2D platformer) + Skin Selector ',
        engine: {
            name: 'Godot',
            icon: 'img/godot.png',
            website: 'https://godotengine.org/'
        },
        repos: [
            { href: 'https://github.com/FlavioFS/godot-platformer-state-machine' }
        ],
        imgs: [
            'https://i.postimg.cc/pL97fXQn/preview.gif',
            'https://i.postimg.cc/kGsrp1D6/extra.gif'
        ]
    },
    {
        title: 'Multi-state enemy behavior (Smashing stone)',
        engine: {
            name: 'Godot',
            icon: 'img/godot.png',
            website: 'https://godotengine.org/'
        },
        repos: [
            { href: 'https://github.com/FlavioFS/godot-mad-stone' }
        ],
        imgs: [
            'https://i.postimg.cc/9Mc7h0J4/preview.gif'
        ]
    },
    {
        title: 'Client data analytics (2 separated repos: client & server)',
        engine: {
            name: 'Cocos Creator',
            icon: 'img/cocos.png',
            website: 'https://www.cocos.com/en/creator'
        },
        repos: [
            {
                name: "Client Source",
                href: 'https://github.com/FlavioFS/slot-test-client'
            },
            {
                name: "Server Source",
                href: 'https://github.com/FlavioFS/slot-test-server'
            }
        ],
        imgs: [
            'https://i.postimg.cc/mDpZwm1Z/slot-client.gif',
            'https://i.postimg.cc/cHZzcfPV/slotserverdemo.gif'
        ]
    },
    {
        title: 'Complete Android game from scratch',
        engine: {
            name: 'Unity',
            icon: 'img/unity.png',
            website: 'https://unity.com/'
        },
        store: {
            icon: 'img/google-play.png',
            link: 'https://play.google.com/store/apps/details?id=com.MeronSoda.DontDrop'
        },
        imgs: [
            'https://cdnb.artstation.com/p/assets/images/images/011/523/497/large/flavio-sousa-grafico-de-recursos2.jpg?1530020062',
            'https://cdnb.artstation.com/p/assets/images/images/011/523/777/large/flavio-sousa-1.jpg?1530021096',
            'https://cdnb.artstation.com/p/assets/images/images/011/523/519/large/flavio-sousa-2.jpg?1530020190',
            'https://cdna.artstation.com/p/assets/images/images/011/523/520/large/flavio-sousa-3.jpg?1530020194',
            'https://cdnb.artstation.com/p/assets/images/images/011/523/523/large/flavio-sousa-4.jpg?1530020198',
            'https://cdnb.artstation.com/p/assets/images/images/011/523/599/large/flavio-sousa-5.jpg?1530020468',
            'https://cdna.artstation.com/p/assets/images/images/011/523/624/large/flavio-sousa-6.jpg?1530020563',
            'https://cdnb.artstation.com/p/assets/images/images/011/523/635/large/flavio-sousa-7.jpg?1530020591',
            'https://cdnb.artstation.com/p/assets/images/images/011/523/683/large/flavio-sousa-8.jpg?1530020746'
        ]
    },
    {
        title: '2D Sea shader - 1 Quad',
        engine: {
            name: 'Unity',
            icon: 'img/unity.png',
            website: 'https://unity.com/'
        },
        imgs: [
            'https://i.postimg.cc/m2tzXJjx/water-shader1.gif',
            'https://i.postimg.cc/Y2XLxM1f/water-shader2.gif',
            'https://i.postimg.cc/Y0y42zpy/water-shader3.gif'
        ]
    },
    {
        title: '5 Minute Dungeon mod (Tabletop Simulator)',
        engine: {
            name: 'Lua',
            icon: 'img/lua.png',
            website: 'https://www.lua.org/'
        },
        store: {
            icon: 'img/steam.svg',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1934822334'
        },
        repos: [
            { href: 'https://github.com/FlavioFS/5-minute-dungeon-tts-mod' }
        ],
        imgs: [
            'https://i.postimg.cc/DytgN5dZ/tts-setup.gif',
            'https://i.postimg.cc/bvR9sPXD/tts-boss.gif',
            'https://i.postimg.cc/2ShwNv2x/tts-next.gif',
            'https://i.postimg.cc/fbsvzLPQ/tts-draw.gif'

        ]
    }
];


//////////////////////////////////////////////////
// Contact
//////////////////////////////////////////////////
const contact = {
    channels: [
        {
            icon: 'mdi-email',
            value: 'flafcodes@gmail.com'
        },
        {
            icon: 'mdi-discord',
            value: 'flafdraws#5176'
        }
    ],
    software: [
        {
            name: "Unity",
            icon: "img/unity.png",
            link: "https://unity.com/"
        },
        {
            name: "Godot",
            icon: "img/godot.png",
            link: "https://godotengine.org/"
        },
        {
            name: "C++",
            icon: "img/cpp.png",
            link: "https://isocpp.org/"
        },
        {
            name: "Python",
            icon: "img/python.png",
            link: "https://www.python.org/"
        },
        {
            name: "VS",
            icon: "img/vs2019.png",
            link: "https://visualstudio.microsoft.com/"
        },
        {
            name: "Blender",
            icon: "img/blender.png",
            link: "https://www.blender.org/"
        },
        {
            name: "Clip Studio",
            icon: "img/csp.png",
            link: "https://www.clipstudio.net/en/"
        },
        {
            name: "Photoshop",
            icon: "img/photoshop.png",
            link: "https://www.adobe.com/br/products/photoshop.html/"
        },
        {
            name: "Krita",
            icon: "img/krita.png",
            link: "https://krita.org/"
        },
        {
            name: "Illustrator",
            icon: "img/illustrator.png",
            link: "https://www.adobe.com/br/products/illustrator.html/"
        },
        {
            name: "Aseprite",
            icon: "img/aseprite.png",
            link: "https://www.aseprite.org/"
        },
        {
            name: "Pyxel Edit",
            icon: "img/pyxeledit.png",
            link: "https://www.pyxeledit.com/"
        }
    ]
};


//////////////////////////////////////////////////
// Social
//////////////////////////////////////////////////
const socials = [
    {
        name: 'Linktree',
        icon: 'img/linktree.svg',
        href: 'https://linktr.ee/flafcodes'
    },
    {
        name: 'Youtube',
        icon: 'img/youtube.svg',
        href: 'https://www.youtube.com/channel/UCapMpIUiBHFIHJHYFVC0S7g?sub_confirmation=1?sub_confirmation=1'
    },
    {
        name: 'GitHub',
        icon: 'img/github.svg',
        href: 'https://www.github.com/FlavioFS'
    },
    {
        name: 'Discord',
        icon: 'img/discord.svg',
        href: 'https://discord.gg/6RjwckWUhk'
    }
    // {
    //     name: 'Twitter',
    //     icon: 'img/twitter.svg',
    //     href: 'https://www.twitter.com/flafcodes/'
    // },
    // {
    //     name: 'Instagram',
    //     color: 'pink-5',
    //     icon: 'img/instagram.svg',
    //     href: 'https://www.instagram.com/flafcodes/'
    // },
];