import { Button } from "@/app/[lng]/components/ui/button";
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
                <a href={`/${l}`}>
                  {/* QUICK FIX Should be fixed as soon as possible */}
                  <span className="text-3xl">{t(l)}</span>
                </a>
              </Button>
            </span>
          );
        })}
    </div>
  );
};
