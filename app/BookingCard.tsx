"use client";

import { useEffect, useMemo, useState } from "react";

const SERVICES = [
  { id: "revision", label: "Revisión y limpieza", minutes: 45 },
  { id: "blanqueamiento", label: "Blanqueamiento", minutes: 60 },
  { id: "ortodoncia", label: "Valoración de ortodoncia", minutes: 30 },
  { id: "urgencia", label: "Dolor o urgencia", minutes: 30 },
];

const SLOTS = ["08:30", "09:30", "10:30", "11:30", "14:00", "15:00", "16:00", "17:00"];

type Day = { key: string; weekday: string; date: number; month: string; full: string };

function nextWeekdays(count: number): Day[] {
  const days: Day[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const dow = cursor.getDay();
    if (dow === 0) continue; // domingo cerrado
    days.push({
      key: cursor.toISOString().slice(0, 10),
      weekday: cursor.toLocaleDateString("es", { weekday: "short" }).replace(".", ""),
      date: cursor.getDate(),
      month: cursor.toLocaleDateString("es", { month: "short" }).replace(".", ""),
      full: `${cursor.toLocaleDateString("es", { weekday: "long" })} ${cursor.getDate()} de ${cursor.toLocaleDateString("es", { month: "long" })}`,
    });
  }
  return days;
}

// Marca algunas horas como ocupadas de forma estable para que el demo se vea real.
function isTaken(dayIndex: number, slotIndex: number) {
  return (dayIndex * 3 + slotIndex * 5) % 7 === 0;
}

export default function BookingCard() {
  const [days, setDays] = useState<Day[]>([]);
  const [service, setService] = useState(SERVICES[0].id);
  const [dayKey, setDayKey] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const list = nextWeekdays(5);
    setDays(list);
    setDayKey(list[0].key);
  }, []);

  const dayIndex = useMemo(() => days.findIndex((d) => d.key === dayKey), [days, dayKey]);
  const selectedDay = days[dayIndex];
  const selectedService = SERVICES.find((s) => s.id === service)!;

  function chooseDay(key: string) {
    setDayKey(key);
    setSlot("");
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!name.trim() || !slot) return;
    setDone(true);
  }

  function reset() {
    setDone(false);
    setTouched(false);
    setSlot("");
    setName("");
  }

  if (done && selectedDay) {
    return (
      <div className="booking booking--done" role="status">
        <p className="booking__title">Cita reservada</p>
        <p className="booking__confirm">
          {name.trim().split(" ")[0]}, te esperamos el {selectedDay.full} a las {slot} para tu{" "}
          {selectedService.label.toLowerCase()}.
        </p>
        <p className="booking__note">
          Es un sitio de demostración: no se guarda ningún dato ni se envía ningún correo.
        </p>
        <button type="button" className="btn btn--ghost" onClick={reset}>
          Reservar otra cita
        </button>
      </div>
    );
  }

  return (
    <form className="booking" onSubmit={submit} noValidate>
      <p className="booking__title">Reserva tu cita</p>

      <fieldset className="booking__group">
        <legend>¿Qué necesitas?</legend>
        <div className="choices">
          {SERVICES.map((s) => (
            <label key={s.id} className="choice">
              <input
                type="radio"
                name="service"
                value={s.id}
                checked={service === s.id}
                onChange={() => setService(s.id)}
              />
              <span>
                {s.label}
                <small>{s.minutes} min</small>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="booking__group">
        <legend>¿Qué día te queda bien?</legend>
        <div className="days">
          {days.length === 0
            ? Array.from({ length: 5 }).map((_, i) => <span key={i} className="day day--skeleton" />)
            : days.map((d) => (
                <label key={d.key} className="day">
                  <input
                    type="radio"
                    name="day"
                    value={d.key}
                    checked={dayKey === d.key}
                    onChange={() => chooseDay(d.key)}
                  />
                  <span>
                    <small>{d.weekday}</small>
                    <strong>{d.date}</strong>
                    <small>{d.month}</small>
                  </span>
                </label>
              ))}
        </div>
      </fieldset>

      <fieldset className="booking__group">
        <legend>Hora</legend>
        <div className="slots">
          {SLOTS.map((t, i) => {
            const taken = dayIndex >= 0 && isTaken(dayIndex, i);
            return (
              <label key={t} className={`slot${taken ? " slot--taken" : ""}`}>
                <input
                  type="radio"
                  name="slot"
                  value={t}
                  disabled={taken}
                  checked={slot === t}
                  onChange={() => setSlot(t)}
                />
                <span>{t}</span>
              </label>
            );
          })}
        </div>
        {touched && !slot && <p className="booking__error">Elige una hora para continuar.</p>}
      </fieldset>

      <div className="booking__group">
        <label htmlFor="name" className="booking__label">
          Tu nombre
        </label>
        <input
          id="name"
          className="field"
          type="text"
          autoComplete="name"
          placeholder="Nombre y apellido"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={touched && !name.trim()}
        />
        {touched && !name.trim() && <p className="booking__error">Escribe tu nombre para reservar.</p>}
      </div>

      <button type="submit" className="btn btn--sun btn--block">
        Confirmar cita
      </button>
    </form>
  );
}
