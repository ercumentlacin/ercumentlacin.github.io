import React from 'react';

const MEDIUM_API_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ercumentlacin';

const useFetch = (url = MEDIUM_API_URL) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);

    let mounted = true;

    if (mounted) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }

    return () => {
      mounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
