import Announcements from "../components/Announcements"
import Categories from "../components/Categories"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products />
        <Newsletter/>
        <Footer/>
    </div>
  )
}
