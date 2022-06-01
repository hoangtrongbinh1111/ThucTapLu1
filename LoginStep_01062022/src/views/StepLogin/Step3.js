import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import LinkContext from '../../LinkContext';
export default function Step3() {
  const history = useHistory();
    const [linkStep, setLinkStep] = React.useContext(LinkContext);
    useEffect(() => {
        if (!linkStep.includes("step2")) {
            history.push("/step2");
        }
    }, []);
  return (
    <div>Step3</div>
  )
}
