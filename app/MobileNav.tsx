"use client";

import { useEffect, useId, useState } from "react";

const LINKS = [
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#primera-visita", label: "Primera visita" },
  { href: "#equipo", label: "Equipo" },
  { href: "#preguntas", label: "Preguntas" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Cerrar" : "Menú"}
      </button>

      <div
        id={panelId}
        className={`mobile-nav__panel${open ? " mobile-nav__panel--open" : ""}`}
        hidden={!open}
      >
        <nav className="mobile-nav__links" aria-label="Principal móvil">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#reservar" className="btn btn--sun" onClick={close}>
          Reservar cita
        </a>
      </div>
    </div>
  );
}
