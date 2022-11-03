import "./PersonalDataInputs.scss";

export default function PersonalDataInputs({data, onChange, error}) {
    // personalData__input_error
    return (
        <div className="personalData">
            <div className="personalData_inputWrapper">
                <label className="personalData__label" htmlFor={data.surname.id}>{data.surname.label}</label>
                <input className="personalData__input" onChange={(e) => onChange(e, 'surname')} type={data.surname.type}/>
                {/* {error && <div className="personalData__error"><span className="personalData__errorText">Необходимо заполнить “Фамилия”</span></div>} */}
            </div>
            <div className="personalData__firstAndMiddle">
                <div className="personalData_inputWrapper">
                    <label className="personalData__label" htmlFor={data.name.id}>{data.name.label}</label>
                    <input className="personalData__input" onChange={(e) => onChange(e, 'name')} type={data.name.type}/>
                    {/* <div className="personalData__error"><span className="personalData__errorText">Необходимо заполнить “Имя”</span></div> */}
                </div>
                <div className="personalData_inputWrapper">
                    <label className="personalData__label" htmlFor={data.middle.id}>{data.middle.label}</label>
                    <input className="personalData__input" onChange={(e) => onChange(e, 'middle')}/>
                </div>
            </div>
            <div className="personalData_inputWrapper">
                <label className="personalData__label" htmlFor={data.company.id}>{data.company.label}</label>
                <input className="personalData__input" onChange={(e) => onChange(e, 'company')} type={data.surname.company}/>
                {/* <div className="personalData__error"><span className="personalData__errorText">Необходимо заполнить “Название организации”</span></div> */}
            </div>
            <div className="personalData_inputWrapper">
                <label className="personalData__label" htmlFor={data.telephone.id}>{data.telephone.label}</label>
                <input className="personalData__input" onChange={(e) => onChange(e, 'telephone')}/>
                {/* <div className="personalData__error"><span className="personalData__errorText">Необходимо заполнить “Номер телефона”</span></div> */}
            </div>
            <div className="personalData_inputWrapper">
                <label className="personalData__label" htmlFor={data.email.id}>{data.email.label}</label>
                <input className="personalData__input" onChange={(e) => onChange(e, 'email')}/>
                {/* <div className="personalData__error"><span className="personalData__errorText">Необходимо заполнить “E-mail”</span></div> */}
            </div>
        </div>
    );
}