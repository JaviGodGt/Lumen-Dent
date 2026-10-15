import BookingCard from "./BookingCard";
import Logo, { LogoMark } from "./Logo";
import MobileNav from "./MobileNav";

const TREATMENTS = [
  {
    name: "Revisión y limpieza",
    text: "Diagnóstico completo, limpieza profunda y recomendaciones para cuidar tus encías.",
    time: "45 min",
  },
  {
    name: "Blanqueamiento",
    text: "Aclaramos el tono de tus dientes en una sola sesión, cuidando la sensibilidad.",
    time: "60 min",
  },
  {
    name: "Ortodoncia invisible",
    text: "Alineadores removibles con seguimiento mensual y un plan dividido por etapas.",
    time: "Valoración 30 min",
  },
  {
    name: "Endodoncia",
    text: "Tratamiento de conducto con anestesia local para conservar tu pieza dental.",
    time: "90 min",
  },
  {
    name: "Odontopediatría",
    text: "Consultas pensadas para niños: cortas, con juego y sin sorpresas.",
    time: "30 min",
  },
];

const STEPS = [
  {
    title: "Conversamos",
    text: "Nos cuentas qué te molesta y qué te gustaría lograr, sin formularios largos.",
  },
  {
    title: "Revisamos",
    text: "Revisión completa, con radiografía digital si hace falta. Te explicamos lo que vemos mientras lo vemos.",
  },
  {
    title: "Te damos un plan",
    text: "Recibes por escrito qué tratamientos necesitas, en qué orden y cuánto tiempo toman.",
  },
];

const TEAM = [
  {
    initials: "CR",
    name: "Dra. Camila Reyes",
    role: "Odontología general",
    text: "Lleva las revisiones, limpiezas y el plan de cada paciente nuevo.",
  },
  {
    initials: "AM",
    name: "Dr. Andrés Molina",
    role: "Ortodoncia",
    text: "Diseña los tratamientos con alineadores y da seguimiento cada mes.",
  },
  {
    initials: "SP",
    name: "Dra. Sofía Paz",
    role: "Odontopediatría",
    text: "Atiende a niños y adolescentes, y acompaña a las familias en cada visita.",
  },
];

const FAQ = [
  {
    q: "¿Duele la limpieza dental?",
    a: "Normalmente no. Si tienes las encías sensibles, avísanos al empezar y ajustamos la técnica o aplicamos anestesia tópica.",
  },
  {
    q: "¿Puedo ir si hace mucho que no visito al dentista?",
    a: "Sí. La primera visita es para conocer tu situación y armar un plan, sin juicios y sin hacer tratamientos que no hayas aceptado.",
  },
  {
    q: "¿Qué pasa si necesito cancelar o mover mi cita?",
    a: "Puedes cambiarla hasta 12 horas antes desde el mismo enlace de confirmación, sin costo.",
  },
  {
    q: "¿Atienden urgencias?",
    a: "Sí. Si tienes dolor o se te rompió una pieza, elige “Dolor o urgencia” al reservar y te asignamos el primer espacio libre del día.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>

      <header className="top">
        <div className="wrap top__inner">
          <a href="#" className="brand" aria-label="Lumen Dental, inicio">
            <Logo />
          </a>
          <nav className="nav" aria-label="Principal">
            <a href="#tratamientos">Tratamientos</a>
            <a href="#primera-visita">Primera visita</a>
            <a href="#equipo">Equipo</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
          <a href="#reservar" className="btn btn--sun btn--small top__cta">
            Reservar cita
          </a>
          <MobileNav />
        </div>
      </header>

      <main id="contenido">
        <section className="hero">
          <LogoMark className="hero__ghost" />
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <p className="hero__brand">
                <Logo variant="hero" />
              </p>
              <h1 className="hero__title">Sonreír sin prisa.</h1>
              <p className="hero__lead">
                Revisiones, limpiezas y tratamientos con el tiempo necesario para explicarte cada paso antes de
                empezar.
              </p>
            </div>

            <div id="reservar" className="hero__booking">
              <BookingCard />
            </div>
          </div>
        </section>

        <section className="trust" aria-label="Ventajas">
          <div className="wrap">
            <ul className="trust__list">
              <li>
                <strong>Primera valoración sin costo</strong>
                <span>Dura 30 minutos e incluye revisión y plan por escrito.</span>
              </li>
              <li>
                <strong>Lunes a viernes de 8:00 a 18:00</strong>
                <span>Sábados hasta el mediodía.</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="tratamientos" className="section">
          <div className="wrap split">
            <div className="split__head">
              <h2 className="h2">Lo que hacemos</h2>
              <p className="muted">
                Cinco tratamientos que cubren casi todo lo que un paciente necesita en el año. Si tu caso es más
                complejo, te lo decimos en la valoración.
              </p>
            </div>
            <ul className="rows">
              {TREATMENTS.map((t) => (
                <li key={t.name} className="row">
                  <div>
                    <h3 className="row__name">{t.name}</h3>
                    <p className="row__text">{t.text}</p>
                  </div>
                  <span className="row__time">{t.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="primera-visita" className="section section--mint">
          <div className="wrap">
            <h2 className="h2 h2--wide">Tu primera visita, paso a paso</h2>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.title} className="step">
                  <span className="step__n" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__text">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="equipo" className="section">
          <div className="wrap">
            <h2 className="h2 h2--wide">Quién te atiende</h2>
            <ul className="team">
              {TEAM.map((p) => (
                <li key={p.name} className="person">
                  <span className="person__avatar" aria-hidden="true">
                    {p.initials}
                  </span>
                  <div>
                    <h3 className="person__name">{p.name}</h3>
                    <p className="person__role">{p.role}</p>
                    <p className="person__text">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="preguntas" className="section section--tight">
          <div className="wrap split">
            <div className="split__head">
              <h2 className="h2">Preguntas frecuentes</h2>
              <p className="muted">¿No ves la tuya? Escríbenos y te respondemos el mismo día.</p>
            </div>
            <div className="faq">
              {FAQ.map((f) => (
                <details key={f.q} className="faq__item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band" aria-labelledby="cta-final-title">
          <div className="wrap cta-band__inner">
            <div className="cta-band__copy">
              <LogoMark className="cta-band__mark" />
              <div>
                <h2 id="cta-final-title" className="cta-band__title">
                  ¿Listo para tu primera visita?
                </h2>
                <p className="cta-band__text">
                  Reserva en menos de un minuto. Te confirmamos el horario al instante.
                </p>
              </div>
            </div>
            <a href="#reservar" className="btn btn--sun">
              Reservar cita
            </a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot__grid">
          <div>
            <p className="foot__brand">
              <Logo variant="footer" />
            </p>
            <p className="foot__text">Clínica dental con tiempo para ti.</p>
          </div>
          <div>
            <p className="foot__head">Horario</p>
            <p className="foot__text">Lunes a viernes, 8:00 a 18:00</p>
            <p className="foot__text">Sábados, 8:00 a 12:00</p>
          </div>
          <div>
            <p className="foot__head">Contacto</p>
            <p className="foot__text">hola@lumendental.example</p>
            <p className="foot__text">Dirección de ejemplo, local 4</p>
          </div>
          <div>
            <p className="foot__head">Cómo llegar</p>
            <p className="foot__text">Dirección de ejemplo, local 4</p>
            <a
              className="foot__link"
              href="https://www.google.com/maps/search/?api=1&query=Direcci%C3%B3n%20de%20ejemplo%2C%20local%204"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
        <div className="wrap foot__legal">
          <p>
            Sitio de demostración de desarrollo web. Lumen Dental es una marca ficticia y los datos de esta página no
            corresponden a una clínica real.
          </p>
        </div>
      </footer>
    </>
  );
}
