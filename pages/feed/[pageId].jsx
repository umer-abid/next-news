export const Feed = ({ pageNumber, articles }) => {
  debugger;
  console.log(articles);
  return <>Hello Feed is there</>;
};

export const getServerSideProps = async (pageContext) => {
  debugger;
  const pageNumber = pageContext.query.pageId;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.Next_Public_News_Key}`,
      },
    }
  );
  const apiJson = await apiResponse.json;
  console.log("api data  is looks like ", apiJson);
  const { articles } = apiJson;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};
export default Feed;
