import styles from './landing.module.scss';
import NewsCard from './NewsCard';

export default function LandingPage() {
  const newsArticles = [
    {
      id: '1',
      title: 'Band Announces New Album',
      content: 'Check out the new album released this year!',
    },
    {
      id: '2',
      title: 'Tour Dates Announced',
      content: 'The band will be touring next summer in Europe.',
    },
    {
      id: '3',
      title: 'New Music Video Released',
      content: 'Watch our latest music video on YouTube!',
    },
  ];

  return (
    <div>
      <h1>Alpha Defizit</h1>
      <h2>Welcome to the Alpha Defizit Band Page</h2>
      <div className={styles.landingPage}>
        <div className={styles.main}>
          <main>
            <div>place holder for landing page image</div>
          </main>
        </div>
        <div className={styles.sidebar}>
          <h2>News</h2>
          <section>
            {newsArticles.map((article) => (
              <NewsCard
                key={`news-${article.id}`}
                title={article.title}
                content={article.content}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
