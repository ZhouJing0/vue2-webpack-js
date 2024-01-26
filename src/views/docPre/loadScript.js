/*
 * @Author: zhoujing zj15224306878@163.com
 * @Date: 2024-01-04 17:40:32
 * @LastEditors: zhoujing zj15224306878@163.com
 * @LastEditTime: 2024-01-04 17:40:48
 * @FilePath: /vue2-webpack-js/src/views/docPre/loadScript.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const loadScript = async (url, id) =>
  new Promise((resolve, reject) => {
    try {
      if (document.getElementById(id)) {
        if (window.DocsAPI) return resolve(null);
 
        const intervalHandler = setInterval(() => {
          if (!window.DocsAPI) return;
 
          clearInterval(intervalHandler);
 
          return resolve(null);
        }, 500);
      } else {
        const script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("id", id);
 
        script.onload = resolve;
        script.onerror = reject;
 
        script.src = url;
        script.async = true;
 
        document.body.appendChild(script);
      }
    } catch (e) {
      console.error(e);
    }
  });
 
export default loadScript;