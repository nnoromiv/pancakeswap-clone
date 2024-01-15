/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['daisyui.com'], // Add the hostname here
        remotePatterns: [{
            hostname: 'daisyui.com/images/stock/'
        }]
    }
}

module.exports = nextConfig
