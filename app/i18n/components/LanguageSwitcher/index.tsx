"use server";
import { useTranslation } from "../..";
import { LanguageSwitcherBase } from "./LanguageSwitcherBase";

export const LanguageSwitcher = async ({ lng }: any) => {
  const { t } = await useTranslation(lng);
  return <LanguageSwitcherBase t={t} lng={lng} />;
};
