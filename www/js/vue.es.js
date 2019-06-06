'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello',
      tabs: {
        'Tab 1': {
          title: 'Awesome Title',
          body:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!',
        },
        'Tab 2': {
          title: 'This is great',
          body:
            'Lorem ipsasdfasdfasd alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!',
        },
        'Tab 3': {
          title: "Look I'm a title!",
          body:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam aliasdfasdfaas architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!',
        },
        'Tab 4': {
          title: 'LOREM IPSUM?',
          body:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!',
        },
      },
      activeTab: 'Tab 1',
    },
    computed: {
      tabContent() {
        return this.tabs[this.activeTab]
      },
    },
    methods: {
      setTabActive(tab) {
        this.activeTab = tab
      },
    },
    components: {
      TabContent: {
        props: {
          data: Object,
        },
      },
    },
  })
})
