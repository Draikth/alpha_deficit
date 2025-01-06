import Link from 'next/link';

export const metadata = {
  title: 'Gigs',
  description: 'Alpha Defizit Band Page',
};

export default function ShowsPage() {
  return (
    <div>
      <h2>Come to our Gigs!</h2>
      <div>
        <h3>Upcoming Shows!</h3>
        <section>List of upcoming shows and links to the details</section>
      </div>
      <div>
        <Link href="/contact" className="nav-link">
          <h3>Book us!</h3>
        </Link>
        <section>Get in touch with us to arrange a booking.</section>
      </div>
      <div>
        <h3>Past Shows</h3>
        <section>List of past shows and links to the details</section>
      </div>
    </div>
  );
}
