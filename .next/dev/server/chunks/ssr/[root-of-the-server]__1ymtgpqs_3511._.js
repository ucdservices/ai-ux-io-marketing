module.exports = [
(()=>{"use strict";return[
"[project]/components/elements-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementsProvider",
    ()=>ElementsProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$track$2d$dynamic$2d$import$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/track-dynamic-import.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ElementsProvider({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        void /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$track$2d$dynamic$2d$import$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackDynamicImport"])(__turbopack_context__.A("[project]/lib/register-elements.ts [app-ssr] (ecmascript, async loader)"));
    }, []);
    return children;
}
}),
"[project]/components/theme-sync.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeSync",
    ()=>ThemeSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function readScheme() {
    const pref = document.querySelector('nve-preferences-input[name="theme"]');
    const scheme = pref?.value?.['color-scheme'];
    if (scheme === 'light' || scheme === 'dark' || scheme === 'auto') {
        return scheme;
    }
    return 'auto';
}
function applyTheme(scheme) {
    const root = document.documentElement;
    if (scheme === 'dark') {
        root.dataset.theme = 'dark';
    } else if (scheme === 'light') {
        root.dataset.theme = 'light';
    } else {
        delete root.dataset.theme;
    }
}
function ThemeSync() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const stored = localStorage.getItem('vc-theme');
            if (stored === 'dark' || stored === 'light') {
                applyTheme(stored);
            }
        } catch  {
        /* ignore */ }
        const sync = ()=>applyTheme(readScheme());
        const timer = window.setTimeout(sync, 0);
        document.addEventListener('change', sync);
        document.addEventListener('input', sync);
        const pref = document.querySelector('nve-preferences-input[name="theme"]');
        const observer = pref ? new MutationObserver(sync) : null;
        if (pref && observer) {
            observer.observe(pref, {
                attributes: true,
                attributeFilter: [
                    'value'
                ]
            });
        }
        return ()=>{
            window.clearTimeout(timer);
            document.removeEventListener('change', sync);
            document.removeEventListener('input', sync);
            observer?.disconnect();
        };
    }, []);
    return null;
}
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/track-dynamic-import.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "trackDynamicImport", {
    enumerable: true,
    get: function() {
        return _trackdynamicimport.trackDynamicImport;
    }
});
const _trackdynamicimport = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/module-loading/track-dynamic-import.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/next/dist/server/app-render/module-loading/track-dynamic-import.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "trackDynamicImport", {
    enumerable: true,
    get: function() {
        return trackDynamicImport;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _isthenable = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/is-thenable.js [app-ssr] (ecmascript)");
const _trackmoduleloadingexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/module-loading/track-module-loading.external.js [external] (next/dist/server/app-render/module-loading/track-module-loading.external.js, cjs)");
function trackDynamicImport(modulePromise) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!(0, _isthenable.isThenable)(modulePromise)) {
        // We're expecting `import()` to always return a promise. If it's not, something's very wrong.
        throw new _invarianterror.InvariantError('`trackDynamicImport` should always receive a promise. Something went wrong in the dynamic imports transform.');
    }
    // Even if we're inside a prerender and have `workUnitStore.cacheSignal`, we always track the promise globally.
    // (i.e. via the global `moduleLoadingSignal` that `trackPendingImport` uses internally).
    //
    // We do this because the `import()` promise might be cached in userspace:
    // (which is quite common for e.g. lazy initialization in libraries)
    //
    //   let promise;
    //   function doDynamicImportOnce() {
    //     if (!promise) {
    //       promise = import("...");
    //       // transformed into:
    //       // promise = trackDynamicImport(import("..."));
    //     }
    //     return promise;
    //   }
    //
    // If multiple prerenders (e.g. multiple pages) depend on `doDynamicImportOnce`,
    // we have to wait for the import *in all of them*.
    // If we only tracked it using `workUnitStore.cacheSignal.trackRead()`,
    // then only the first prerender to call `doDynamicImportOnce` would wait --
    // Subsequent prerenders would re-use the existing `promise`,
    // and `trackDynamicImport` wouldn't be called again in their scope,
    // so their respective CacheSignals wouldn't wait for the promise.
    (0, _trackmoduleloadingexternal.trackPendingImport)(modulePromise);
    return modulePromise;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React;
}),
"[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/is-thenable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isThenable", {
    enumerable: true,
    get: function() {
        return isThenable;
    }
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
}
}),
]})(),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/module-loading/track-module-loading.external.js [external] (next/dist/server/app-render/module-loading/track-module-loading.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/module-loading/track-module-loading.external.js", () => require("next/dist/server/app-render/module-loading/track-module-loading.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ymtgpqs_3511._.js.map