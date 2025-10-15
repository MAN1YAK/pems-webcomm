import React from 'react'
import styles from './dataTable.module.css';

const features = [
  'Real-Time Monitoring',
  'Cloud Data Storage',
  'Alerts & Notification',
  'Data Analytics',
  'Reports',
  'Predictive Insight',
  'Support',
];

export default function DataTable() {
  return (
    <div className={styles.table}>
      <div className={styles['table-cell']}></div>
      <div className={`${styles['table-cell']} ${styles.plattform}`}>
        <h3>Platform</h3>
        <a href="#" className={styles.btn}>Register now</a>
      </div>

      {features.map((feature, idx) => (
        <React.Fragment key={idx}>
          <div className={`${styles['table-cell']} ${styles['cell-feature']}`}>
            {feature}
          </div>
          <div className={styles['table-cell']}>
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <title>check_blue</title>
              <path
                d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z"
                fill="limegreen"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
