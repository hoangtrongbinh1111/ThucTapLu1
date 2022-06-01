import React from 'react'
import { useHistory } from "react-router-dom";
import LinkContext from '../../LinkContext';
export default function Step1() {
    const [linkStep, setLinkStep] = React.useContext(LinkContext);
    const history = useHistory();
    const nextStep = () => {
        setLinkStep(current => [...current, 'step1']);
        history.push("/step2");
    }
    return (
        <div>
            <input type='text' />
            <button onClick={nextStep}>Next</button>
        </div>
    )
}
