import { Button } from "@/app/[lng]/components/ui/button";
import { useTranslation } from "../..";
import { languages } from "../../settings";
import Link from "next/link";

export const LanguageSwitcherBase = ({ t, lng }: any) => {
  return (
    <div>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Button variant="outline" size="lg" className="rounded-full">
                <Link href={`/${l}`}>
                  <span className="text-3xl">{t(l)}</span>
                </Link>
              </Button>
            </span>
          );
        })}
    </div>
  );
};
