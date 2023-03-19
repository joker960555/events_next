import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MainLayoutProps } from './Main-layout.props';

import cn from 'classnames';
import styles from './Main-layout.module.css';

const MainLayout: React.FC<MainLayoutProps> = ({ children }): JSX.Element => {
	return (
		<>
			<Header />
			<main className={cn(styles.main)}>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;
