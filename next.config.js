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
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/projects': { page: '/projects' },
            '/projects/chat:-node.js-socket.io-jquery-and-many-other-amazing-techonologies': { page: '/projects/[pid]', query: { pid: 'chat:-node.js-socket.io-jquery-and-many-other-amazing-techonologies' } },
            '/projects/massage': { page: '/projects/[pid]', query: { pid: 'massage' } },
            '/projects/hiking': { page: '/projects/[pid]', query: { pid: 'hiking' } }
        };
    }
};
