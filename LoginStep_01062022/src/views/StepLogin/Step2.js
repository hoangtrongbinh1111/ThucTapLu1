import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import LinkContext from '../../LinkContext';
export default function Step2() {
    const history = useHistory();
    const [linkStep, setLinkStep] = React.useContext(LinkContext);
    
    useEffect(() => {
        if (!linkStep.includes("step1")) {
            history.push("/step1");
        }
    }, []);
    const nextStep = () => {
        setLinkStep(current => [...current, 'step2']);
        history.push("/step3");
    }
    return (
        <div>
            <input type='text' />
            <button onClick={nextStep}>Next</button>
        </div>
    )
}
