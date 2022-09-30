import "./PersonalDataInputs.scss";

export default function PersonalDataInputs({data}) {
    return (
        <div className="personalData">
            <input className="personalData__input" type={data.surname.type} placeholder={data.surname.placeholder}/>
            <div className="personalData__firstAndMiddle">
                <input className="personalData__input" type={data.name.type} placeholder={data.name.placeholder}/>
                <input className="personalData__input" type={data.surname.middle} placeholder={data.middle.placeholder}/>
            </div>
            <input className="personalData__input" type={data.surname.company} placeholder={data.company.placeholder}/>
            <input className="personalData__input" type={data.surname.telephone} placeholder={data.telephone.placeholder}/>
            <input className="personalData__input" type={data.surname.email} placeholder={data.email.placeholder}/>
        </div>
    );
}