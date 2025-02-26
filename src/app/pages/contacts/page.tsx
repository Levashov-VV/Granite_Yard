'use client';
import Icons from '../../components/Main/FeedBack/Icons/Icons';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import './style.css';

interface IFormInput {
    name: string;
    phone: string;
    email: string;
    message: string;
    pravicy: boolean;
}

export default function Contacts() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

    const onSubmit = async (data: IFormInput) => {
        if (data.pravicy) {
            try {
                const response = await fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                console.log(result);
                alert('Письмо отправлено успешно');
            } catch (error) {
                console.error(error);
                alert('Ошибка при отправке письма');
            }
        } else {
            alert(
                'Пожалуйста, подтвердите согласие с политикой конфиденциальности'
            );
        }
    };

    return (
        <div className="contact">
            <div className="contact-blocks">
                <h1 className="title contact-title">Контакты</h1>
                <p className="subtitle">
                    Мы сделаем всё возможное, чтобы помочь вам с вашим вопросом
                </p>
            </div>
            <div className="contact-blocks">
                <div className="contact-feedback">
                    <h2 className="contact-subtitle">Оставьте заявку</h2>
                    <p className="contact-text">
                        Вы можете связаться с нами любым удобным способом. Наша
                        служба поддержки клиентов доступна с понедельника по
                        пятницам с 9:00 до 18:00.
                    </p>
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Имя:</label>
                            <input
                                id="name"
                                type="text"
                                {...register('name', {
                                    required: 'Имя обязательно',
                                })}
                            />
                            {errors.name && (
                                <p className="error-message">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Телефон:</label>
                            <input
                                id="phone"
                                type="tel"
                                {...register('phone', {
                                    required: 'Телефон обязателен',
                                    pattern: {
                                        value: /^\d{3}-\d{3}-\d{4}$|^\d{11}$/,
                                        message: 'Неправильный формат телефона',
                                    },
                                })}
                            />
                            {errors.phone && (
                                <p className="error-message">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Электронная почта:</label>
                            <input
                                id="email"
                                type="email"
                                {...register('email', {
                                    required: 'Электронная почта обязательна',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message:
                                            'Неправильный формат электронной почты',
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="error-message">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Сообщение:</label>
                            <textarea
                                id="message"
                                {...register('message', {
                                    required: 'Сообщение обязательно',
                                })}
                            />
                            {errors.message && (
                                <p className="error-message">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <div className="form-group pravicy-group">
                            <input
                                id="pravicy"
                                type="checkbox"
                                {...register('pravicy', {
                                    required: 'Согласие обязательно',
                                })}
                            />
                            <label htmlFor="pravicy" className="pravicy-text">
                                Нажимая кнопку Отправить, я соглашаю с {''}
                                <Link className="pravicy-link" href="./Privacy">
                                    политикой конфиденциальности
                                </Link>
                                {''} и даю согласие на обработку моих
                                персональных данных
                            </label>
                        </div>
                        {errors.pravicy && (
                            <p className="error-message">
                                {errors.pravicy.message}
                            </p>
                        )}

                        <button type="submit" className="submit-button">
                            Отправить
                        </button>
                    </form>
                </div>
                <div className="contact-img">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A8b0c6631054178795824194c771888e92f31b2e9c2cd79d5669752c6d273dcdc&amp;source=constructor"
                        className="contact-map"
                    ></iframe>
                    <div className="contact-info">
                        <a href="tel:8(8442) 60-50-46">
                            <span className="contact-phone">
                                8(8442) 60-50-46
                            </span>
                        </a>
                        <div className="contact-email">
                            <a href="mailto:vkz134@yandex.ru">
                                <span className="contact-email">
                                    vkz134@yandex.ru
                                </span>
                            </a>
                        </div>
                        <div className="contact-adress">
                            <div>
                                г. Волгоград, ш. Авиаторов, д. 16, помещ. 12
                            </div>
                        </div>
                    </div>
                    <div className="contact-blocks">
                        <div className="contact-icons">
                            <Icons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
