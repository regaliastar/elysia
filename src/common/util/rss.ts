// 判断当前页面是否为 RSS，如https://mikanani.me/RSS/MyBangumi?token=fDVi4MEBQwniH4j18RTtCgH6BoxbKA1kpdVrb9bsYCY%3d
export const isRssPage = () => {
  const node = document.getElementsByTagName('rss');
  if (node.length) return true;
  return false;
};
