import {__dirname, path, checkCredentials} from '../../../index.js';
export default async function (fastify, opts, done) {
    fastify.get('/admin/referals', async (req, res) => {
        const user = await checkCredentials(req, res);
        if (!['admin'].some(i => i == user.role) || user.banned.status) res.redirect('https://gamermatch.gg');
        res.type('text/html');
        return res.sendFile('referals.html', path.join(__dirname, 'admin'));
    });
}
