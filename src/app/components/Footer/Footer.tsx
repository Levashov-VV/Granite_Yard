import Image from 'next/image';
import Logo from '../../Assets/Logo.png';
import './style.css';
import Telephone from '../../Assets/icon/telephone.svg';
import Email from '../../Assets/icon/email.svg';
import WhatsApp from '../../Assets/icon/whatsapp.svg';
import VK from '../../Assets/icon/vk.svg';
import Instagram from '../../Assets/icon/instagram.svg';
import Telegram from '../../Assets/icon/telegram.svg';

export default function Footer() {



  
  return (
    <footer className="footer">
      <div className="footer-block">
        <div>
          <Image src={Logo} className="logo-footer" alt="logo" />
        </div>
      </div>
      <div className="footer-block">
        <span>
          Изготовление и продажа гранитных памятников в Волгограде. <br />
          Все виды изделий оптом от производителя.
        </span>
        <hr className="line" />
        <span className="info">
          Информация на сайте не является публичной офертой. Уточняйте точную
          стоимость у продавца.
        </span>
      </div>
      <div className="footer-block">
        <div className="footer-icons">
          <span>
            © 2025 Гранитный двор.
            <br /> Все права защищены.
          </span>
          <div className="icons">
            <button>
              <a href="tel:+7 (999) 999-99-99">
                <Image
                  src={Telephone}
                  className="footer-icon"
                  alt="telephone"
                />
              </a>
            </button>
            <button>
              <a href="mailto:2xKUH@example.com">
                <Image src={Email} className="footer-icon" alt="Email" />
              </a>
            </button>
            <button>
              <a href="https://wa.me/7 (999) 999-99-99">
                <Image src={WhatsApp} className="footer-icon" alt="WhatsApp" />
              </a>
            </button>
            <button>
              <a href="https://vk.com/granitdvor">
                <Image src={VK} className="footer-icon" alt="VK" />
              </a>
            </button>
            <button>
              <a href="https://www.instagram.com/granitdvor/">
                <Image
                  src={Instagram}
                  className="footer-icon"
                  alt="instagram"
                />
              </a>
            </button>
            <button>
              <a href="https://t.me/granitdvor">
                <Image src={Telegram} className="footer-icon" alt="telegram" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
