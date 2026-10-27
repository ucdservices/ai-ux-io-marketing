(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/elements-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementsProvider",
    ()=>ElementsProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function ElementsProvider({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElementsProvider.useEffect": ()=>{
            void __turbopack_context__.A("[project]/lib/register-elements.ts [app-client] (ecmascript, async loader)");
        }
    }["ElementsProvider.useEffect"], []);
    return children;
}
_s(ElementsProvider, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ElementsProvider;
var _c;
__turbopack_context__.k.register(_c, "ElementsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme-sync.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeSync",
    ()=>ThemeSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeSync.useEffect": ()=>{
            try {
                const stored = localStorage.getItem('vc-theme');
                if (stored === 'dark' || stored === 'light') {
                    applyTheme(stored);
                }
            } catch  {
            /* ignore */ }
            const sync = {
                "ThemeSync.useEffect.sync": ()=>applyTheme(readScheme())
            }["ThemeSync.useEffect.sync"];
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
            return ({
                "ThemeSync.useEffect": ()=>{
                    window.clearTimeout(timer);
                    document.removeEventListener('change', sync);
                    document.removeEventListener('input', sync);
                    observer?.disconnect();
                }
            })["ThemeSync.useEffect"];
        }
    }["ThemeSync.useEffect"], []);
    return null;
}
_s(ThemeSync, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ThemeSync;
var _c;
__turbopack_context__.k.register(_c, "ThemeSync");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=components_0apkkzulz7iy4._.js.map