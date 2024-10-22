/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects() {
		return [
			{
				source: '/',
				destination: 'https://github.com/third-land/assets',
				permanent: true,

			},
		];
	}
};

module.exports = nextConfig;
