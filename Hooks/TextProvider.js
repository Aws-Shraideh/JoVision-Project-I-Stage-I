import { createContext,useState } from 'react';

export const TextContext = createContext();
export const SetTextContext = createContext();

const TextProvider = ({ children }) => {
    const [text, setText] = useState('');

    return (
        <TextContext.Provider value={text}>
            <SetTextContext.Provider value={setText}>
                {children}
            </SetTextContext.Provider>
        </TextContext.Provider>
    );
}
export default TextProvider