import styles from './landing.module.scss';

export default function NewsCard({ title, content }) {
  return (
    <div className={styles.newsCard}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
