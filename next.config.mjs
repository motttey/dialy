/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'motttey.github.io',
                port: '',
                pathname: '**',
            },
        ],
    }
};

export default nextConfig;
