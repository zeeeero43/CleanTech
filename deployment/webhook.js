const http = require('http');
const crypto = require('crypto');
const { exec } = require('child_process');

const secret = 'IhrWebhookSecret123!'; // Ändern Sie dies zu einem sicheren Secret
const port = 3001;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/webhook') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            const signature = req.headers['x-hub-signature-256'];
            const expectedSignature = 'sha256=' + crypto
                .createHmac('sha256', secret)
                .update(body)
                .digest('hex');
            
            if (signature === expectedSignature) {
                console.log('Webhook received, starting deployment...');
                
                exec('/home/deploy/deploy.sh', (error, stdout, stderr) => {
                    if (error) {
                        console.error('Deployment failed:', error);
                        res.statusCode = 500;
                        res.end('Deployment failed');
                    } else {
                        console.log('Deployment successful:', stdout);
                        res.statusCode = 200;
                        res.end('Deployment successful');
                    }
                });
            } else {
                res.statusCode = 401;
                res.end('Unauthorized');
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(port, () => {
    console.log(`Webhook server running on port ${port}`);
});