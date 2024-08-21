import { createContext, useState } from "react"
import { useTranslation } from "react-i18next"

export const TranslateContext = createContext()
export default function TranslateProvider({ children }) {
    const [arLang, setArLang] = useState(false)
    const { i18n } = useTranslation("global")
    function handelChangeLang(lang) {
        localStorage.setItem('lang', lang)
        setArLang(!arLang)
        i18n.changeLanguage(lang)
    }
    return <TranslateContext.Provider value={{ handelChangeLang, arLang }}>
        {children}
    </TranslateContext.Provider>
}