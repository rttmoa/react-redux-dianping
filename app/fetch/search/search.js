import { get } from '../get'





export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    const result = get('/api/search/' + page + '/' + cityName + '/' + category + keywordStr) //   /api/search/0/北京/all/UserName长
    return result
}