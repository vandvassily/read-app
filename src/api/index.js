import axios from '../axios';
export function getBookList() {
  return axios.get('api/booklists');
}

/**
 * 获取分类书籍
 * @param {Object} obj 请求参数对象
 */
function getCategoryList(obj) {
  let params = {
    gender: obj.gender || 'male',
    type: obj.type || 'hot',
    major: obj.major || '奇幻',
    minor: obj.minor || '',
    start: obj.start || 0,
    limit: obj.limit || 20
  };
  return axios.get('api/category-info', { params: params });
}

/**
 * 获取首页2个分类书籍数据
 * @param {Object} obj 请求参数对象
 */
export function getHomeCategoryList(obj) {
  return Promise.all([getCategoryList(obj.category1), getCategoryList(obj.category2)]);
}
