//////////////////////////////////////////////////
// Tabs
//////////////////////////////////////////////////
const tabs = [
    {
        text: "Dev",
        icon: "mdi-code-braces"
    },
    {
        text: "Art",
        icon: "mdi-brush"
    },
    {
        text: "Contact",
        icon: "mdi-account-box"
    }
];


//////////////////////////////////////////////////
// Dev Projects
//////////////////////////////////////////////////
const devProjects = [
    {
        title: 'Battle transition shaders (old Pokémon style)',
        engine: {
            name: 'Godot',
            icon: 'img/godot.png',
            website: 'https://godotengine.org/'
        },
        repo: 'https://github.com/flaviofs/godot-pokemon-transitions',
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
        repo: 'https://github.com/FlavioFS/godot-platformer-state-machine',
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
        repo: 'https://github.com/FlavioFS/godot-mad-stone',
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
        repo: 'https://github.com/FlavioFS/slot-test-client',
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
        repo: 'https://github.com/FlavioFS/5-minute-dungeon-tts-mod',
        imgs: [
            'https://i.postimg.cc/DytgN5dZ/tts-setup.gif',
            'https://i.postimg.cc/bvR9sPXD/tts-boss.gif',
            'https://i.postimg.cc/2ShwNv2x/tts-next.gif',
            'https://i.postimg.cc/fbsvzLPQ/tts-draw.gif'

        ]
    }
];


//////////////////////////////////////////////////
// Art Projects
//////////////////////////////////////////////////
const artProjects = [
    {
        title: 'Enpitsu, the art bender',
        description: "Original character concept I've submitted to DeviantArt's Artist Avatar Challenge.",
        expanded: false,
        date: '2021/02/28',
        thumb: 'https://i.postimg.cc/T3vxjSfL/enpitsu-insta8.png',
        imgs: [
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23a9f1a3-e872-448d-8b4d-9413eaef12c7/def6uq9-5bd670b7-8853-4c29-84ff-b2bad66b7b3a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjNhOWYxYTMtZTg3Mi00NDhkLThiNGQtOTQxM2VhZWYxMmM3XC9kZWY2dXE5LTViZDY3MGI3LTg4NTMtNGMyOS04NGZmLWIyYmFkNjZiN2IzYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.x25uj2JNtpOp_rwSJ71XZSHkYVbCWX5ozC-t1QOcu4k'
        ],
    },
    {
        title: 'Pink Ribbon',
        description: 'Style and structure research.',
        expanded: false,
        date: '2021/01/09',
        imgs: [
            'https://cdna.artstation.com/p/assets/images/images/033/706/738/large/flavio-freitas-flaf-pink-ribbon.jpg?1610372052'
        ]
    },
    {
        title: 'Lumiel, the light elf',
        description: 'My first look into this original character concept.',
        expanded: false,
        date: '2021/01/07',
        imgs: [
            'https://cdnb.artstation.com/p/assets/images/images/033/586/747/large/flavio-freitas-flaf-lumiel.jpg?1610025593',
            'https://cdnb.artstation.com/p/assets/images/images/033/586/753/large/flavio-freitas-flaf-lumiel2.jpg?1610025613'
        ]
    },
    {
        title: 'Goblin head sculpt',
        description: 'A 3D character modelling practice session.',
        expanded: false,
        date: '2020/10/02',
        thumb: 'https://i.postimg.cc/3NT572Yx/0001.png',
        imgs: [
            'https://i.postimg.cc/tTcdbmXW/goblin-ps.gif'
        ]
    }
];


//////////////////////////////////////////////////
// Contact
//////////////////////////////////////////////////
const contact = {
    software: [
        {
            name: "Krita",
            icon: "img/krita.png",
            link: "https://krita.org/"
        },
        {
            name: "Photoshop",
            icon: "img/photoshop.png",
            link: "https://www.adobe.com/br/products/photoshop.html/"
        },
        {
            name: "Blender",
            icon: "img/blender.png",
            link: "https://www.blender.org/"
        },
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
const social = [
    {
        name: 'GitHub',
        icon: 'img/github.svg',
        link: 'https://www.github.com/FlavioFS/'
    },
    {
        name: 'ArtStation',
        icon: 'img/artstation.svg',
        link: 'https://www.artstation.com/flaf'
    },
    {
        name: 'DeviantArt',
        icon: 'img/deviantart.svg',
        link: 'https://www.deviantart.com/flafdraws'
    },
    {
        name: 'Instagram',
        icon: 'img/instagram.svg',
        link: 'https://www.instagram.com/flafdraws/'
    }
];


//////////////////////////////////////////////////
// Vue
//////////////////////////////////////////////////
new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            dark: true
        }
    }),
    computed: {
        isMobile: () => {
            return window.isMobile();
        },
        isArtPieceSelected: () => {
            return (this.currentArtProject !== undefined) && (this.currentArtProject.imgs.length > 0);
        }
    },
    methods: {
        onArtProjectClick: function (projectIndex) {
            try {
                this.currentArtProject = this.artProjects[projectIndex];
                this.isArtDialogActive = true;
            } catch (error) {
                this.isArtDialogActive = false;
            } finally {
                this.currentArtIndex = 0;
            }
        },
        incrementArtIndex: function () {
            if (this.currentArtProject.imgs !== undefined && this.currentArtIndex < this.currentArtProject.imgs.length - 1) {
                this.currentArtIndex++;
            }
        },
        decrementArtIndex: function () {
            if (this.currentArtProject.imgs !== undefined && this.currentArtIndex > 0) {
                this.currentArtIndex--;
            }
        },
        saveTab: function (tabIndex) {
            localStorage.setItem("tabIndex", tabIndex);
        },
        backToTop: function () {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    },
    mounted() {
        try {
            const tabIndex = parseInt(localStorage.getItem("tabIndex"));
            if (tabIndex >= 0 && tabIndex < this.tabs.length) {
                this.tabIndex = tabIndex;
            }
        } catch (error) {
            console.log(error);
        }

        window.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'ArrowRight':
                    this.incrementArtIndex();
                    break;

                    case 'ArrowLeft':
                    this.decrementArtIndex();
                    break;
            
                default:
                    break;
            }
        });
    },
    data() {
        return {
            isReady: false,
            tabIndex: 0,
            isArtDialogActive: false,
            currentArtProject: undefined,
            currentArtIndex: 0,
            tabs: tabs,
            devProjects: devProjects,
            artProjects: artProjects,
            contact: contact,
            social: social
        }
    }
});

// Force page update.