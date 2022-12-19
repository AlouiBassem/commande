import Api from "../Api";

const ARTICLE_API="/article"

const fetchArticles=async()=> {
return await Api.get(ARTICLE_API);
}

const fetchArticleByCat=async(catId)=> {
    return await Api.get(ARTICLE_API + '/' + catId);
    }
export const ArticleService = {
    fetchArticles,
    fetchArticleByCat,
    }