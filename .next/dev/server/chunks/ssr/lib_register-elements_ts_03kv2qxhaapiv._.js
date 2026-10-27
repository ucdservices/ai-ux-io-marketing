module.exports = [
"[project]/lib/register-elements.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_@nvidia-elements_core_dist_0ob6siwzhavo0._.js",
  "server/chunks/ssr/node_modules_0mqf449l3li6b._.js",
  "server/chunks/ssr/lib_register-elements_ts_1w6rd18wtzz09._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/lib/register-elements.ts [app-ssr] (ecmascript)");
    });
});
}),
];