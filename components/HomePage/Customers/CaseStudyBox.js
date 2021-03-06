import BlueButton from "../../shared/BlueButton";

const CaseStudyBox = () => (
    <div className="-mt-34 mb-16 mx-4 sm:mx-0">
        <div className="mx-auto p-4 sm:max-w-md w-full sm:h-18 rounded-md shadow-gray-xl bg-white flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="mx-auto sm:mx-0 mb-4 sm:mb-0 px-4">
                <svg viewBox="0 0 400 136.76" height="36"><g transform="matrix(6.4378 0 0 6.4378 4 4)"><g><g><path fill="#000" d="m9.57 6.24h-3.1a3.73 3.73 0 0 0-1.63 0.29v-6.53h-4.84v20h4.83v-8.07a1.29 1.29 0 0 1 1.3-1.29h2.81a1.29 1.29 0 0 1 1.3 1.29v8.07h4.84v-8.7c0-3.66-2.44-5.06-5.5-5.06zm46.48 0v8.07a1.29 1.29 0 0 1-1.29 1.29h-2.82a1.29 1.29 0 0 1-1.3-1.29v-8.07h-4.83v8.47c0 3.47 2.19 5.29 5.51 5.29h4.73c3 0 4.84-2.15 4.84-5.26v-8.5zm-27.28 8.07a1.29 1.29 0 0 1-1.3 1.29h-2.81a1.29 1.29 0 0 1-1.3-1.29v-8.07h-4.83v8.47c0 3.47 2.22 5.29 5.47 5.29h4.73c3 0 4.84-2.15 4.84-5.26v-8.5h-4.8zm8.52 5.69h4.84v-20h-4.84z"></path></g></g></g></svg>
            </div>
            <BlueButton classes="justify-center" title="Read Case Study" destinationUrl="/case-studies/hulu" />
        </div>
    </div>
)

export default CaseStudyBox;
