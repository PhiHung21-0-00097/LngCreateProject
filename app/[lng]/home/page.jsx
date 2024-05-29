import HomePage from "@/app/components/layout/HomePage";
import { useTranslation } from "@/app/i18n";
import React from "react";
import DataHome from "@/app/components/pages/home/data";

const PageHome = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, "home");
  const { pagehome } = await DataHome(lng);
  return <HomePage lng={lng} pagehome={pagehome} />;
};

export default PageHome;
