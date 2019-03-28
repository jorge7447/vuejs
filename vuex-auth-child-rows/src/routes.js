export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/Login.vue')
    },
    {
        path: '/secret',
        component: () => import('./views/Secret/Secret.vue'),
        meta: { requiresAuth: true },
        children: [        
        {
            path: 'notes',
            component: () => import('./views/Secret/Notes.vue')
        },
        ]
    }
]