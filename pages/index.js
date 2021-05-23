import CompaniesSlider from "../components/HomePage/CompaniesSlider";
import Customers from "../components/HomePage/Customers";
import Features from "../components/HomePage/Features";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Notification from "../components/HomePage/Notification";
import LearnMore from "../components/HomePage/LearnMore";
import Main from "../components/HomePage/Main";
import Newsletter from "../components/HomePage/Newsletter";


export default function Home() {
  return (
    <div className="font-Inter">
      <Header />
      <Notification />
      <Main />
      <Features />
      <CompaniesSlider />
      <Customers />
      <LearnMore />
      <Newsletter />
      <Footer />
    </div>
  )
}
