import {useRouter} from 'next/router';
// useRouter is customized React hook created by Next team

// [newsId].js is a dynamic page

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send request to backend API to fetch news item with newsId

  return (
    <h1>Detail Page</h1>
  )
}

export default DetailPage;