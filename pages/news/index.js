import Link from 'next/link';

// our-domain.com/news

function NewsPage() {
  return (
    <>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="/news/something-else">Celeste is financially abundant</Link>
        </li>
        <li>
          <Link href="/">Celeste embodies peace</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
