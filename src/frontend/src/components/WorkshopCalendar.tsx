import { ChevronLeft, ChevronRight, Clock, Users, X } from "lucide-react";
import { useState } from "react";
import { type WorkshopEvent, workshopEvents } from "../content/calendar.static";

const WEEKDAY_LABELS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

const MONTH_NAMES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

// Returns 0=Monday ... 6=Sunday (ISO week)
function getFirstDayOfMonth(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay(); // 0=Sun
  return (day + 6) % 7; // convert to Mon=0
}

export default function WorkshopCalendar() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOffset = getFirstDayOfMonth(currentYear, currentMonth);
  const daysInPrevMonth = getDaysInMonth(
    currentMonth === 0 ? currentYear - 1 : currentYear,
    currentMonth === 0 ? 11 : currentMonth - 1,
  );

  // Filter events for current month/year
  const eventsThisMonth: Record<number, WorkshopEvent[]> = {};
  for (const event of workshopEvents) {
    const d = new Date(`${event.date}T00:00:00`);
    if (d.getFullYear() === currentYear && d.getMonth() === currentMonth) {
      const day = d.getDate();
      if (!eventsThisMonth[day]) eventsThisMonth[day] = [];
      eventsThisMonth[day].push(event);
    }
  }

  const selectedEvents = selectedDay
    ? (eventsThisMonth[selectedDay] ?? [])
    : [];

  function prevMonth() {
    setSelectedDay(null);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    setSelectedDay(null);
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  }

  function handleDayClick(day: number) {
    if (!eventsThisMonth[day]) return;
    setSelectedDay((prev) => (prev === day ? null : day));
  }

  // Build grid cells: leading empty + current month days + trailing empty
  const totalCells = Math.ceil((firstDayOffset + daysInMonth) / 7) * 7;
  const cells: Array<{ day: number; type: "prev" | "current" | "next" }> = [];

  for (let i = 0; i < firstDayOffset; i++) {
    cells.push({ day: daysInPrevMonth - firstDayOffset + 1 + i, type: "prev" });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, type: "current" });
  }
  const trailing = totalCells - cells.length;
  for (let i = 1; i <= trailing; i++) {
    cells.push({ day: i, type: "next" });
  }

  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header: month navigation */}
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={prevMonth}
          aria-label="Mês anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <h3 className="text-lg font-semibold tracking-tight">
          {MONTH_NAMES[currentMonth]} {currentYear}
        </h3>

        <button
          type="button"
          onClick={nextMonth}
          aria-label="Próximo mês"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="mb-1 grid grid-cols-7 gap-1">
        {WEEKDAY_LABELS.map((label) => (
          <div
            key={label}
            className="py-2 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((cell, idx) => {
          const hasEvents =
            cell.type === "current" && !!eventsThisMonth[cell.day];
          const isSelected =
            cell.type === "current" && selectedDay === cell.day;
          const isTodayCell = cell.type === "current" && isToday(cell.day);

          return (
            <button
              type="button"
              key={`${cell.type}-${cell.day}-${idx}`}
              disabled={cell.type !== "current" || !hasEvents}
              onClick={() =>
                cell.type === "current" && handleDayClick(cell.day)
              }
              aria-label={
                cell.type === "current" && hasEvents
                  ? `${cell.day} de ${MONTH_NAMES[currentMonth]} — workshop disponível`
                  : undefined
              }
              className={[
                "relative flex h-10 w-full items-center justify-center rounded-lg text-sm transition-all",
                cell.type !== "current"
                  ? "cursor-default text-muted-foreground/30"
                  : hasEvents
                    ? isSelected
                      ? "cursor-pointer bg-primary font-semibold text-primary-foreground shadow-md"
                      : "cursor-pointer border border-primary/40 bg-primary/10 font-semibold text-primary hover:bg-primary/20"
                    : isTodayCell
                      ? "cursor-default font-bold text-foreground ring-2 ring-primary/40"
                      : "cursor-default text-foreground",
              ].join(" ")}
            >
              {cell.day}
              {hasEvents && !isSelected && (
                <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded border border-primary/40 bg-primary/10" />
          Dia com workshop
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded bg-primary" />
          Selecionado
        </span>
      </div>

      {/* Selected day detail panel */}
      {selectedDay !== null && selectedEvents.length > 0 && (
        <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-semibold text-foreground">
              {selectedDay} de {MONTH_NAMES[currentMonth]} de {currentYear}
            </h4>
            <button
              type="button"
              onClick={() => setSelectedDay(null)}
              aria-label="Fechar detalhes"
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-3">
            {selectedEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-lg border border-border bg-card p-4"
              >
                <p className="font-semibold text-foreground">
                  {event.workshopName}
                </p>
                <div className="mt-2 flex flex-wrap gap-4">
                  {event.time && (
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      {event.time}
                    </span>
                  )}
                  {event.spots && (
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Users className="h-3.5 w-3.5 text-primary" />
                      {event.spots} lugares disponíveis
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
