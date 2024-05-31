// import HomeBanner from '../components/banners/HomeBanner'
// import Button from '../components/functions/Button'
import HomeData from "@/app/components/pages/home/data";
// import ProductSlide from '../components/pages/home/ProductSlide'
// import Recruit from '../components/pages/home/Recruit'
import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import Banner from "@/app/components/layout/Banner";
import Models from "@/app/components/layout/Models";

export default async function Home({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, "common");
  const { banner } = await HomeData(lng);

  return (
    <main className="">
      <Banner lng={lng} banner={banner} />
      <Models />
    </main>
  );
}
