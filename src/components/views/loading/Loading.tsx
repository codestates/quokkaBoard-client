import React from 'react';
import styles from './sections/styles.module.css';

function Loading() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.circle} />
				<div className={styles.circle} />
				<div className={styles.circle} />
				<div className={styles.shadow} />
				<div className={styles.shadow} />
				<div className={styles.shadow} />
				<span>Loading</span>
			</div>
		</div>
	);
}

export default Loading;
