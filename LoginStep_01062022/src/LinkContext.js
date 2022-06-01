import React from 'react';
// here we can initialise with any value we want.
const LinkContext = React.createContext([]);
export const LinkProvider = (props) => {
    const [linkStep, setLinkStep] = React.useState([])
    const value = [linkStep, setLinkStep]
    return <LinkContext.Provider value={value} {...props} />
}
export default LinkContext;