"use strict";
/**
 * Distributed with Ultraviolet and compatible with most configurations.
 */
const stockSW = "/uv-sw.js";

/**
 * List of hostnames that are allowed to run serviceworkers on http:
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

const uv_search = document.getElementById("uv-search");
/**
 * Global util
 * Used in 404.html and index.html
 */
async function registerSW() {
  if (
    location.protocol !== "https:" &&
    !swAllowedHostnames.includes(location.hostname)
  )
    throw new Error("Make sure your tab URL include https://");
  
  if (!navigator.serviceWorker) 
    throw new Error("Your browser sadly doesn't support service workers.");

  // Ultraviolet has a stock `sw.js` script.
  await navigator.serviceWorker.register(stockSW, {
    scope: __uv$config.prefix,
  });
}