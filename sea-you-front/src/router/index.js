import Router from 'vue-router'
import Vue from 'vue'

import Home from '@/views/Home'
import Admin from '@/views/Admin'
import Game from '@/views/Game'
import GameAdmin from '@/views/GameAdmin'
import GameAdminSingle from '@/views/GameAdminSingle'
import Player from '@/views/Player'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [{
            component: Home,
            path: '/',
        },
        {
            component: Game,
            path: '/game/:id',
        },
        {
            component: Player,
            path: '/player',
        },
        {
            component: Admin,
            path: '/admin',
        },
        {
            component: GameAdmin,
            path: '/admin/game/:id',
        },
        {
            component: GameAdminSingle,
            path: '/admin/game/waiting/:id',
        }
    ]
})

export default router