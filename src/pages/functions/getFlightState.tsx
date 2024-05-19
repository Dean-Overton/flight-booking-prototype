import { getCookie, setCookie } from "typescript-cookie";


export const saveDictionaryAsCookie = (name: string, dict: Record<string, any>) => {
        const serializedDict = JSON.stringify(dict);
        setCookie(name, serializedDict, { expires: 7 }); // The cookie expires in 7 days
    };

export const getDictionaryFromCookie = (name: string) => {
    const serializedDict = getCookie(name);
    if (serializedDict) {
        try {
            return JSON.parse(serializedDict);
        } catch (e) {
            console.error('Error parsing cookie:', e);
            return null;
        }
        }
        return null;
    };
