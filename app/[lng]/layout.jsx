import { dir } from "i18next";
// import { Footer } from '../components/layout/Footer'
// import Header from '../components/layout/Header'
import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import "@/app/[lng]/globals.css";
// import HeaderData from '../components/layout/HeaderData'
// import FooterData from '../components/layout/FooterData'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export async function generateMetadata({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "home");
  return {
    title: t("home") + " - " + t("home"),
    icons: "/icon.ico",
  };
}

export default async function Layout({ children, params: { lng } }) {
  //   const headerData = await HeaderData(lng)
  //   const footerData = await FooterData(lng)

  return (
    <html lang={lng} dir={dir(lng)} className={`bg-white text-black`}>
      <body>{children}</body>
    </html>
  );
}
