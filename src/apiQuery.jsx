export async function getTopNews(Country, Catagory, Keyword) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        Country || "us"
      }&category=${Catagory || "general"}&q=${Keyword || ""}` + //default is general news in the us
        `&pageSize=20&apikey=b769c52cc3f54f09a5ca1d9f3571742d`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function getAllNews(Language, Keyword, SortBy, domains) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?language=${Language || "en"}` +
        `&${domains ? `domains=${domains}` : "domains=bbc.co.uk"}${
          Keyword ? `q=${Keyword}&` : ""
        }` +
        `&sortBy=${
          SortBy || "publishedAt"
        }&apiKey=b769c52cc3f54f09a5ca1d9f3571742d` +
        `&apikey=b769c52cc3f54f09a5ca1d9f3571742d`
    ); //default is latest news from the bbc in english
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
