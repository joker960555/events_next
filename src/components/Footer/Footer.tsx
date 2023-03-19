import { FooterProps } from './Footer.props';
import { format } from 'date-fns';

import cn from 'classnames';
import styles from './Footer.module.css';

export const Footer: React.FC<FooterProps> = ({
	children,
	...props
}): JSX.Element => {
	return (
		<footer className={cn(styles.footer)} {...props}>
			<p>
				Events All Over The World © 2020 - {format(new Date(), 'yyyy')} All
				rights reserved
			</p>
		</footer>
	);
};
