import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

const components = []
const directives = [
    VueAwesomeSwiper,
    VueLazyload
]
const install = (Vue) => {
    if (install.installed) {
        return
    }

    components.forEach(component => {
        Vue.component(component.name, component)
    })
    directives.forEach(directive => {
        Vue.use(directive)
    })

    const EventBus = new Vue();
    Object.defineProperties(Vue.prototype, {
        $bus: {
            get() {
                return EventBus
            }
        }
    })
}
export default {
    install
}
