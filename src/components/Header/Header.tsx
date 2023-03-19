import Link from 'next/link';
import Image from 'next/image';
import { HeaderProps } from './Header.props';

import cn from 'classnames';
import styles from './Header.module.css';

export const Header: React.FC<HeaderProps> = ({ children }): JSX.Element => {
	return (
		<header className={cn(styles.header)}>
			<section className={cn(styles.topNav)}>
				<Image
					src={'/images/favicon.ico'}
					height={50}
					width={50}
					alt={'logo'}
				/>
				<nav>
					<ul className={cn(styles.linksList)}>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/events'>Events</Link>
						</li>
						<li>
							<Link href='/about-us'>About Us</Link>
						</li>
					</ul>
				</nav>
			</section>
			<h1 className={cn(styles.title)}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
			</h1>
		</header>
	);
};
