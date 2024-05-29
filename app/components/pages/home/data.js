import { useTranslation } from "@/app/i18n";

const DataHome = async (lng) => {
  const { t } = await useTranslation(lng, "home");

  const data = {
    pagehome: t("pagehome"),
  };
  return data;
};

export default DataHome;
