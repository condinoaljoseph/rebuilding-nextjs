

const Container = ({ children, classes }) => (
    <section className={`${classes} mx-auto px-4 sm:px-8 x-lg:px-4 max-w-5xl w-full`}>
        {children}
    </section>
)


export default Container;
