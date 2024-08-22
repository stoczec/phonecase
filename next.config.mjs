/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// domains: ['utfs.io'], // deprecated
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'utfs.io',
				port: '',
			},
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
}

export default nextConfig
