import './style.css';
import Slider from './components/Main/Slider/Slider';
import CompanyInfo from './components/Main/CompanyInfo/CompanyInfo';
import Product from './components/Main/Product/Product';
import Delivery from './components/Main/Delivery/Delivery';
import Granite from './components/Main/Granite/Granite';
import FeedBack from './components/Main/FeedBack/FeedBack';

export default function Home() {
    return (
        <div className="main">
            <div className="main-block">
                <CompanyInfo />
            </div>
            <div className="main-block">
                <Slider />
            </div>
            <div className="main-block">
                <Delivery />
            </div>
            <div className="main-block">
                <Granite />
            </div>
            <div className="main-block">
                <Product />
            </div>
            <div className="main-block">
                <FeedBack />
            </div>
        </div>
    );
}
