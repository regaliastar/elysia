// 通信标志符 msg.text
export const Signal = {
  addPageRSS: 'addPageRSS', // util.content发送，适用于页面本身是RSS的场景
  RSSinPage: 'RSSinPage', // content发送，页面内包含的所有RSS
  getAllRSS: 'getAllRSS', // popup发送，从background得到所有RSS，包括页面本身和页面内
};
