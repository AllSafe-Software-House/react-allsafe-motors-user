import { useTranslation } from "react-i18next";
import HeadBanner from "../components/HeadBanner/HeadBanner";
import { Fade } from "react-awesome-reveal";

export default function About() {
    const { t } = useTranslation('global');
    return <>
        <HeadBanner text={t('custom-text.aboutText')} about disc={'The meaning of production in Carlio is the creation, development, and the path to progress, and the starting point to achieve the goals that we all have the Petroforce brand, with over 20 years of experience in the oil and petrochemical industry.'} bg={'https://s3-alpha-sig.figma.com/img/f311/ad26/49ec50a8d80e556c60aa0941fe5cba4e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKVuCjPleiYoMQ8OWA6roalNyDx4jffndi6I3PLMUBEDcWfIgnsqJCIu2uIZWjb0HD8~I9UyE5W5~~Qqn~XGdMjF-MQ50o32AbvSAaad90GZNBcmgeCDPmy3uKVv~zvJppVnKg1xIBhA3W6bHdHQXndsxTcjIn2AD~GqkG~0S4FcFuIX8FsR0wo27797CnbFoljy-jmQ04m9DmS7WEtMC9injPyDMLOHj6gB-WgK9q4PJwHspzd97gA8XBR6Y0m8EfEANH0XScJb6yQsKISw9pz5rOMI-c33Pn2GyEngmg8rISzJkMzbpvgO2kcWvYee4Ty4CI7V4yPF3HQWtmHqNQ__'} />
        <section className="py-16">
            <div className="container">
                <Fade>
                    <h1 className="text-[#f00] font-bold text-[18px] md:text-[25px] lg:text-[35px]">{t('custom-text.overview')}</h1>
                    <p className="font-medium py-10 border-b border-white">Carlio brand is one of the most reliable motor oil manufacturers, which is engaged in the production of high quality products with a history of more than decades in the industry. In order to get more information about other aspects and products of the Carlio brand, you can use the following buttons:</p>
                    <p className="font-medium py-10">The meaning of production in Carlio is the creation, development, and the path to progress, and the starting point to achieve the goals that we all have the Petroforce brand, with over 20 years of experience in the oil and petrochemical industry, we officially started our activities in the field of design, engineering, construction of refinery equipment, and the production of various motor and industrial lubricants in the year 1390 (2011)</p>
                    <p className="font-medium py-10">The meaning of production in Carlio is the creation, development, and the path to progress, and the starting point to achieve the goals that we all have the Petroforce brand, with over 20 years of experience in the oil and petrochemical industry, we officially started our activities in the field of design, engineering, construction of refinery equipment, and the production of various motor and industrial lubricants in the year 1390 (2011)</p>
                    <p className="font-medium py-10">The meaning of production in Carlio is the creation, development, and the path to progress, and the starting point to achieve the goals that we all have the Petroforce brand, with over 20 years of experience in the oil and petrochemical industry, we officially started our activities in the field of design, engineering, construction of refinery equipment, and the production of various motor and industrial lubricants in the year 1390 (2011)</p>
                </Fade>
            </div>
        </section>
    </>
}