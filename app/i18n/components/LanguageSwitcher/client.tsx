"use client";

import { useTranslation } from "../../client";
import { LanguageSwitcherBase } from "./LanguageSwitcherBase";

export const LanguageSwitcher = ({ lng }: any) => {
  const { t } = useTranslation(lng);
  return <LanguageSwitcherBase t={t} lng={lng} />;
};
