import { AboutUsProps } from './about-us.props';

import styles from './about-us.module.css';
import cn from 'classnames';

export const AboutUs: React.FC<AboutUsProps> = (): JSX.Element => {
	return (
		<div className={styles.about_us}>
			<h1>About us Page</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
				magnam voluptates similique adipisci natus. Suscipit error facere soluta
				ipsam dolorem laboriosam corporis sint. Nihil atque similique voluptas
				est, blanditiis ullam. Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. Provident eaque earum impedit minus enim id, maiores
				voluptate blanditiis quisquam temporibus! Nobis corrupti ipsum
				reprehenderit voluptatum vel dolorem optio at accusamus?
			</p>
			<ul className={cn(styles.about_us_list)}>
				<li>
					<h2>More about us</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Praesentium ullam quisquam iusto odio autem a officia nesciunt velit
						itaque sunt adipisci ex numquam culpa veritatis, mollitia tempora
						sequi. Dolores, quam?
					</p>
				</li>
				<li>
					<h3>Finally about</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sit
						dolore a dolorem possimus delectus fuga officia praesentium
						quibusdam, laboriosam doloremque qui perferendis consequuntur
						deserunt rerum rem, fugiat libero. Obcaecati?
					</p>
				</li>
			</ul>
		</div>
	);
};
