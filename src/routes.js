import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "/"
        },
        {
            path: "/config",
            name: "config"
        },
        {
            path: "/result",
            name: "result"
        }
    ]
});
