// ==UserScript==
// @name         Bing rewards 锁区
// @version      V1.0.0
// @description  将 Bing rewards 锁区，避免到处跑，需配合代理配置使用。cn.bing.com 和 rewards.bing.com 请强制使用直连。
// @namespace    com.qhy04
// @author       qhy040404
// @match        https://*.bing.com/*
// @exclude      https://rewards.bing.com/*
// @license      GNU GPLv3
// @icon         https://www.bing.com/favicon.ico
// @run-at       document-end
// ==/UserScript==

"use strict";
var isCn = true;
function getHost() {
  return isCn ? "cn.bing.com" : "www.bing.com";
}

let oldOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
  if (window.location.host !== getHost()) {
    if (url.indexOf("/rewardsapp/reportActivity") !== -1) {
      console.log("Rewards report blocked");
      return;
    }
  }
  return oldOpen.call(this, method, url, async, user, password);
};

addEventListener("DOMContentLoaded", function () {
  let promo_headers = document.getElementsByClassName("promo_cont");
  for (let i = 0; i < promo_headers.length; i++) {
    let a = promo_headers[i].getElementsByTagName("a")[0];
    a.href = a.href?.replace("https://www.bing.com/", `https://${getHost()}/`);
  }

  let checkin_a = document.getElementsByClassName("dailycheckin_ref")[0];
  if (checkin_a) {
    checkin_a.href = checkin_a.href?.replace(
      "https://www.bing.com/",
      `https://${getHost()}/`
    );
  }
});
