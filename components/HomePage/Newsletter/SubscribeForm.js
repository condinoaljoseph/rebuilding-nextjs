import { useRef } from "react"

const SubscribeForm = () => {
    const inputRef = useRef()

    const onSubmitClick = () => {
        // subscribe(inputRef.current.value) // uncreated function
    }

    return (
        <div className="mt-8 sm:mt-0 sm:ml-4 w-60">
            <div className="relative h-10 w-full">
                <div className="absolute inset-y-0 left-0 z-10 w-11 flex items-center justify-center pointer-events-none">
                    <svg width="15" height="15" viewBox="0 0 15 11"><g stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0.5" y="0.5" width="14" height="10" rx="2"></rect><path d="M1.175 1.135L7.5 5.5" stroke-linecap="square"></path><path d="M14.04.912L7.5 5.5" stroke-linecap="square"></path></g></svg>
                </div>
                <input ref={inputRef} className="absolute inset-0 pl-11 pr-4 w-full h-full text-sm text-black rounded-lg border border-gray-400 focus:border-gray-800 transition-colors duration-200 focus:outline-none" placeholder="you@domain.com" />
            </div>
            <button onClick={onSubmitClick} className="mt-2.5 px-2 py-1 w-full h-11 rounded-7 bg-black hover:bg-white text-white hover:text-black border border-black transition-colors duration-150 ease-in">Subscribe</button>
        </div>
    )

}

export default SubscribeForm;
