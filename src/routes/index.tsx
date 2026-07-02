import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { pageCss, pageHtml, initPage } from "@/lib/plan-rural-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plan Rural | +100 Proyectos de Propiedades Rurales Productivas" },
      {
        name: "description",
        content:
          "La colección definitiva de proyectos de propiedades rurales productivas de América Latina. +100 planos dimensionados, listos para ejecutar.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const cleanup = initPage(ref.current);
    return cleanup;
  }, []);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <div ref={ref} dangerouslySetInnerHTML={{ __html: pageHtml }} />
    </>
  );
}
