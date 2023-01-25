//////////////////////////////////////////////////
// Tabs
//////////////////////////////////////////////////
const tabs = [
    {
        text: "Dev",
        icon: "mdi-code-braces"
    },
    {
        text: "Contact",
        icon: "mdi-account-box"
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

        // Force GitHub Pages to update by changing the line below.
        const forceUpdate = true; // This variable has no impact in the code.

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

                case 'Escape':
                    this.isArtDialogActive = false;
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
            contact: contact,
            socials: socials
        }
    }
});

// Force page update.