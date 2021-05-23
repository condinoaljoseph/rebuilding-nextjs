import Header from "../../shared/Header";
import Feature from "./Feature";


const FEATURES = [
    {
        title: 'Image Optimization',
        description: '&lt;Image&gt; and Automatic Image Optimization with instant builds.',
        destinationUrl: '/docs/basic-features/image-optimization',
    },
    {
        title: 'Internationalization',
        description: 'Built-in Domain & Subdomain Routing and Automatic Language detection.',
        destinationUrl: '/docs/advanced-features/i18n-routing',
    },
    {
        title: 'Next.js Analytics',
        description: 'A true lighthouse score based on real visitor data & page-by-page insights',
        destinationUrl: '/analytics',
    },
    {
        title: 'Zero Config',
        description: 'Automatic compilation and bundling. Optimized for production from the start.',
        destinationUrl: '/docs/getting-started',
    },
    {
        title: 'Hybrid: SSG and SSR',
        description: 'Pre-render pages at build time (SSG) or request time (SSR) in a single project.',
        destinationUrl: '/docs/basic-features/data-fetching',
    },
    {
        title: 'Incremental Static Regeneration',
        description: 'Add and update statically pre-rendered pages incrementally after build time.',
        destinationUrl: '/docs/basic-features/data-fetching#incremental-static-regeneration',
    },
    {
        title: 'TypeScript Support',
        description: 'Automatic TypeScript configuration and compilation.',
        destinationUrl: '/docs/basic-features/typescript',
    },
    {
        title: 'Fast Refresh',
        description: 'Fast, reliable live-editing experience, as proven at Facebook scale.',
        destinationUrl: '/docs/basic-features/fast-refresh',
    },
    {
        title: 'File-system Routing',
        description: 'Every component in the <code class="text-xs leading-5 text-black font-Menlo">`pages`</code> directory becomes a route.',
        destinationUrl: '/docs/routing/introduction',
    },
    {
        title: 'API Routes',
        description: 'Optionally create API endpoints to provide backend functionality.',
        destinationUrl: '/docs/api-routes/introduction',
    },
    {
        title: 'Built-in CSS Support',
        description: 'Create component-level styles with CSS modules. Built-in Sass support.',
        destinationUrl: '/docs/basic-features/built-in-css-support',
    },
    {
        title: 'Code-splitting and Bundling',
        description: 'Optimized bundle splitting algorithm created by the Google Chrome team.',
        destinationUrl: '/docs',
    },
]


const Features = () => (
    <section className="mx-auto px-4 sm:px-8 x-lg:px-4 py-16 x-lg:py-100 max-w-5xl w-full">
        <Header
            classes="mt-4 mb-12"
            title="Why Next.js"
            description="The world’s leading companies use and love Next.js"
        />
        <div className="grid grid-cols-6 gap-6">
            {FEATURES.map((feat, index) =>
                <Feature
                    key={index}
                    title={feat.title}
                    description={feat.description}
                    destinationUrl={feat.destinationUrl}
                />
            )}
        </div>
        <p className="hidden x-lg:block my-10 text-sm text-center"><strong>And more: </strong>Support for <a className="text-blue-500 hover:text-blue-400 hover:underline transition-colors duration-200" href="/docs/basic-features/environment-variables">environment variables</a>, <a className="text-blue-500 hover:text-blue-400 hover:underline transition-colors duration-200" href="/docs/advanced-features/preview-mode">preview mode</a>, <a className="text-blue-500 hover:text-blue-400 hover:underline transition-colors duration-200" href="/docs/api-reference/next/head">custom <code className="text-xs leading-5 font-Menlo">`head`</code> tags</a>, <a className="text-blue-500 hover:text-blue-400 hover:underline transition-colors duration-200" href="/docs/basic-features/supported-browsers-features#polyfills">automatic polyfills</a>, and more.</p>
    </section>
)


export default Features;
