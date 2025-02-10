import Icons from './Icons/Icons';
import './style.css';

export default function FeedBack() {
    return (
        <div className="feedback">
            <div className="feedback-block">
                <h2 className="title">Напишите нам</h2>
            </div>
            <div className="feedback-block">
                <p className="feedback-text text">
                    Мы стремимся обеспечить вам наилучший сервис и готовы помочь
                    с любыми вопросами, связанными с доставкой и логистикой.
                    Если вам необходимо внести изменения в детали доставки или
                    требуется помощь в организации логистических процессов,
                    пожалуйста, свяжитесь с нами. Мы готовы оперативно
                    рассмотреть ваши запросы и предложить оптимальные решения.
                </p>
            </div>
            <div className="feedback-block">
                <Icons />
            </div>
        </div>
    );
}
