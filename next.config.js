const projects = require("./util/projects.json");

module.exports = {
    webpack: (config, { }) => {
        // extends next.js' default webpack configuration
        // for reading as strings the markdown (.md) files
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });
        return config;
    },
/*     exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/projects': { page: '/projects' },
            '/projects/chat:-node.js-socket.io-jquery-and-many-other-amazing-techonologies': { page: '/projects/[pid]', query: { pid: 'chat:-node.js-socket.io-jquery-and-many-other-amazing-techonologies' } },
            '/projects/massage': { page: '/projects/[pid]', query: { pid: 'massage' } },
            '/projects/hiking': { page: '/projects/[pid]', query: { pid: 'hiking' } }
        };
    }, */
    exportPathMap: function () {
        // we fetch our list of projects, this allow us to dynamically generate the exported pages
        const projectList = projects;

        // tranform the list of projects into a map of pages with the pathname `/projects/:id`
        const pages = projectList.reduce(
            (pages, project) =>
                Object.assign({}, pages, {
                    [`/projects/${project.slug}`]: {
                        page: '/projects/[pid]',
                        query: { pid: project.slug }
                    }
                }),
            {}
        )

        // combine the map of project pages with the home
        return Object.assign({}, pages, {
            '/': { page: '/' },
            '/projects': { page: '/projects' }
        })
    }
};
