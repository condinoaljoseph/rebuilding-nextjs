import SubscribeForm from "./SubscribeForm";


const Newsletter = () => (
    <section className="mx-auto px-8 py-16 x-lg:px-4 x-lg:py-100 max-w-5xl w-full text-center sm:text-left">
        <div className="my-8 flex flex-col sm:flex-row items-center justify-between lg:px-2">
            <div className="sm:w-7/12">
                <h2 className="mb-3 text-32 font-bold tracking-tight leading-38 text-gray-900">Next.js is getting better every day — don’t miss out on all the action.</h2>
                <h3 className="text-gray-700 leading-7">Join the Next.js newsletter and stay updated on new releases and features, guides, and case studies.</h3>
            </div>
            <SubscribeForm />
        </div>
    </section>
)


export default Newsletter;
