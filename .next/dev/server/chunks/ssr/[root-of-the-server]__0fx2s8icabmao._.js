module.exports = [
(()=>{"use strict";return[
"[project]/app/opengraph-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/opengraph-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alt"],
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/", params, "opengraph-image", false);
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + '?' + "2728889d91ac341a"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    return [
        getImageMetadata(imageModule, '')
    ];
}
}),
"[project]/app/opengraph-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alt",
    ()=>alt,
    "contentType",
    ()=>contentType,
    "default",
    ()=>OpenGraphImage,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/og.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$hero$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/hero.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/site.ts [app-rsc] (ecmascript)");
;
;
;
;
const alt = 'ai-ux.io: UX Designer with AI teammates';
const size = {
    width: 1200,
    height: 630
};
const contentType = 'image/png';
function OpenGraphImage() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 80,
            background: '#f2f3f5',
            color: '#1a1d21',
            fontFamily: 'Satoshi, system-ui, sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 28,
                    margin: 0,
                    opacity: 0.7
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name
            }, void 0, false, {
                fileName: "[project]/app/opengraph-image.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: 56,
                    fontWeight: 600,
                    lineHeight: 1.15,
                    marginTop: 24,
                    maxWidth: 900
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$hero$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hero"].heading
            }, void 0, false, {
                fileName: "[project]/app/opengraph-image.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/opengraph-image.tsx",
        lineNumber: 12,
        columnNumber: 7
    }, this), {
        ...size
    });
}
}),
"[project]/content/hero.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hero",
    ()=>hero
]);
const hero = {
    heading: 'UX Designer with AI teammates.',
    body: 'User-centred design with specialist AI teammates—for research synthesis, journey mapping, prototyping, and code. They draft; I set direction, check against evidence, and sign off. The same discipline shapes agentic products people can trust.',
    primaryCta: 'Connect on LinkedIn',
    secondaryCta: 'See how the team works',
    secondaryHref: '#team',
    run: {
        title: 'A run, start to finish.',
        caption: 'Illustrative run. AI teammates draft; every output passes a human gate.',
        steps: [
            {
                step: 'Brief',
                owner: 'Vijay',
                human: true,
                status: 'Done'
            },
            {
                step: 'Research synthesis',
                owner: 'Research Synthesiser',
                human: false,
                status: 'Done'
            },
            {
                step: 'Journey map',
                owner: 'Journey Mapper',
                human: false,
                status: 'Done'
            },
            {
                step: 'Accessibility check',
                owner: 'Accessibility Auditor',
                human: false,
                status: 'Done'
            },
            {
                step: 'Prototype build',
                owner: 'Cursor agent',
                human: false,
                status: 'Running'
            },
            {
                step: 'Review and sign-off',
                owner: 'Vijay',
                human: true,
                status: 'Next'
            }
        ]
    }
};
}),
"[project]/content/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTENT_UPDATED",
    ()=>CONTENT_UPDATED,
    "contact",
    ()=>contact,
    "shift",
    ()=>shift,
    "site",
    ()=>site
]);
const CONTENT_UPDATED = '2026-10-27';
const site = {
    name: 'ai-ux.io',
    url: 'https://ai-ux.io',
    locale: 'en-GB',
    person: {
        name: 'Vijay Kandhalu',
        jobTitle: 'Agentic AI UX Lead',
        url: 'https://ai-ux.io/'
    },
    links: {
        linkedIn: 'https://www.linkedin.com/in/vijaykandhalu/',
        cursor: 'https://cursor.com/@ucdops',
        vijay: 'https://vijay.ai/',
        uxengineer: 'https://www.uxengineer.ai/',
        interaction: 'https://interaction.dev/',
        ucdBots: 'https://ucdbots.com',
        ucdAgent: 'https://ucdagent.com'
    },
    footer: {
        copyright: '© 2026 Vijay Kandhalu'
    },
    metadata: {
        title: 'Vijay Kandhalu: Agentic AI UX Lead | ai-ux.io',
        description: 'UX lead who orchestrates AI teammates, and designs and builds agentic AI products people can trust. User-centred, accessible, built in code.',
        ogTitle: 'UX Designer with AI teammates.'
    },
    knowsAbout: [
        'Agentic AI UX',
        'AI teammates',
        'Human-in-the-loop design',
        'Approval gates',
        'User-centred design',
        'Interaction design',
        'Service design',
        'User research',
        'Prototyping',
        'GOV.UK Prototype Kit',
        'WCAG 2.2 AA',
        'Next.js',
        'AI gateway',
        'Cursor',
        'Claude'
    ]
};
const contact = {
    heading: 'Hiring for agentic AI UX?',
    body: 'My experience, roles and recommendations are on LinkedIn.',
    primaryCta: 'Connect on LinkedIn'
};
const shift = {
    heading: 'Agentic AI changes UX twice.',
    cards: [
        {
            title: 'Designing for agents',
            body: 'Users now hand tasks to software that acts on their behalf. They need to see what it\'s doing, check its work and stay in control.'
        },
        {
            title: 'Designing with agents',
            body: 'AI teammates can draft research themes, flows and working code in minutes. Someone has to direct them, check the output and own the result.'
        }
    ],
    closing: 'The role needs both: a designer who builds agentic experiences, and a lead who works with AI teammates every day.'
};
}),
]})(),
"[externals]/next/dist/server/app-render/module-loading/track-module-loading.external.js [external] (next/dist/server/app-render/module-loading/track-module-loading.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/module-loading/track-module-loading.external.js", () => require("next/dist/server/app-render/module-loading/track-module-loading.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/app/opengraph-image--metadata.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/opengraph-image--metadata.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0fx2s8icabmao._.js.map