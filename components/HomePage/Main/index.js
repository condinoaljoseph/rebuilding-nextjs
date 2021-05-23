import Buttons from "./Buttons";
import Description from "./Description";
import Links from "./Links";
import Title from "./Title";

const Main = () => {

    return (
        <main className="mx-auto px-4 pt-10 md:pt-15 lg:pt-30 pb-12 md:pb-7.5 max-w-5xl w-full text-center">
            <Title />
            <Description />
            <Buttons />
            <Links />
        </main>
    )
}

export default Main;
