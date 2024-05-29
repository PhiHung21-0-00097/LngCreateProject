// import HomeBanner from '../components/banners/HomeBanner'
// import Button from '../components/functions/Button'
// import HomeData from '../components/pages/home/HomeData'
// import ProductSlide from '../components/pages/home/ProductSlide'
// import Recruit from '../components/pages/home/Recruit'
import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import { HomePage } from "@/app/components/layout/HomePage";

export default async function Home({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, "home");
  //   const { banner, whoWeAre, slide, recruitment } = await HomeData(lng)

  return (
    <main className="">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, omnis,
      assumenda blanditiis dolore ipsam earum nulla hic eligendi nihil deleniti
      quidem quam. Nulla, consequuntur. Porro quaerat odio dolorem excepturi
      molestiae!
    </main>
  );
}
