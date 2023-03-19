import MainLayout from '@/src/components/layout/Main-layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
}
