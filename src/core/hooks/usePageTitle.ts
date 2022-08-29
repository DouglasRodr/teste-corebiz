import { useEffect } from "react";

export default function usePageTitle(title: string) {
  const baseTitle = "Corebiz Store";

  useEffect(() => {
    document.title = `${baseTitle} - ${title}`;
  });
}
