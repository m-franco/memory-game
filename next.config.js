/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        API_URL: process.env.API_URL,
    },
    // Will be available on both server and client
    publicRuntimeConfig: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    env: {
        API_URL_2: process.env.API_URL,
    }

}

module.exports = nextConfig
