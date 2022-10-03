// import { useState } from "react";
import "./PersonalDataInputs.scss";

export default function PersonalDataInputs({data, onChange}) {
    // const [state, setState] = useState({});

    return (
        <div className="personalData">
            <input className="personalData__input" onChange={(e) => onChange(e, 'surname')} type={data.surname.type} placeholder={data.surname.placeholder}/>
            <div className="personalData__firstAndMiddle">
                <input className="personalData__input" onChange={(e) => onChange(e, 'name')} type={data.name.type} placeholder={data.name.placeholder}/>
                <input className="personalData__input" onChange={(e) => onChange(e, 'middle')} placeholder={data.middle.placeholder}/>
            </div>
            <input className="personalData__input" onChange={(e) => onChange(e, 'company')} type={data.surname.company} placeholder={data.company.placeholder}/>
            <input className="personalData__input" onChange={(e) => onChange(e, 'telephone')} placeholder={data.telephone.placeholder}/>
            <input className="personalData__input" onChange={(e) => onChange(e, 'email')} placeholder={data.email.placeholder}/>
        </div>
    );
}