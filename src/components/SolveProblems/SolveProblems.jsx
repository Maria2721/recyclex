import "./SolveProblems.scss";


export default function SolveProblems() {
    return (
        
            
        <section className="problems">
            <div className="problems__inner">
                <h1 className="problems__title">Recyclex решает проблемы</h1>
                <div className="problems__items">
                    <div className="problems__item">
                        {/* <div className="problems__wrapper"> */}
                            <h4 className="problems__list-title">Поставщиков</h4>
                            <div className="problems__list-items">
                                <div className="problems__col1">
                                    <p className="problems__list-item">Сбыт больших объемов</p>
                                    <p className="problems__list-item">Стабильные заказы</p>
                                </div>
                                <div className="problems__col2">
                                    <p className="problems__list-item">Выгодные цены</p>
                                    <p className="problems__list-item">Своевременная оплата</p>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    <div className="problems__item">
                        {/* <div className="problems__wrapper"> */}
                            <h4 className="problems__list-title">Переработчиков</h4>
                            <div className="problems__list-items">
                                <div className="problems__col1">
                                    <p className="problems__list-item">Проверенное качество сырья</p>
                                    <p className="problems__list-item">Надежные поставщики</p>
                                    <p className="problems__list-item">Прозрачная цена</p>
                                </div>
                                <div className="problems__col2">
                                    <p className="problems__list-item">Стабильные поставки</p>
                                    <p className="problems__list-item">Удобная логистика</p>
                                </div>
                            </div>
                       {/*  </div> */}
                    </div>
                    <div className="problems__item">
                        {/* <div className="problems__wrapper"> */}
                            <h4 className="problems__list-title">Переработка вторсырья</h4>
                            <div className="problems__list-items">
                                <div className="problems__col1">
                                    <p className="problems__list-item">Доставка/качество/объем</p>
                                    <p className="problems__list-item">Платежи к сроку</p>
                                    <p className="problems__list-item">Своевременные поставки</p>
                                </div>
                                <div className="problems__col2">
                                    <p className="problems__list-item">Контроль качества сырья</p>
                                    <p className="problems__list-item">Расширенная проверка контрагента (вживую специалистом биржи Recyclex)</p>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>  
    );
}