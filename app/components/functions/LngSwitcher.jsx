"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LngSwitcher = () => {
  const pathName = usePathname();
  const redirectPathName = (locale) => {
    if (!pathName) {
      return "/";
    }
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const currentLang = pathName.split("/")[1];
  const secondLang = currentLang === "vi" ? "en" : "vi";

  return (
    <>
      <Link
        href={redirectPathName("en")}
        className={`border-r-2 border-green pr-2 text-sm font-bold hover:text-green ${currentLang === "en" && "text-green"}`}
      >
        EN
      </Link>

      <Link
        href={redirectPathName("vi")}
        className={`pl-2 pr-4 text-sm font-bold hover:text-green  ${currentLang === "vi" && "text-green"}`}
      >
        VI
      </Link>
    </>
  );
};

export default LngSwitcher;
