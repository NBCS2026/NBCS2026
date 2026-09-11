"use client";
import { useState, type CSSProperties } from "react";
import { getProgramEntries } from "@/data/program";
import {
  PROGRAM_THEMES,
  SESSION_THEMES,
  getThemeSessionTitle,
  type ProgramTheme,
} from "@/data/program-themes";
import { navigateProgram } from "@/lib/program-navigation";
import "./program-theme-explorer.css";

const point = (radius: number, angle: number) => {
  const radians = ((angle - 90) * Math.PI) / 180;
  return [330 + radius * Math.cos(radians), 330 + radius * Math.sin(radians)];
};
function segment(index: number) {
  const start = (index * 360) / 7 - 360 / 14 + 1.1;
  const end = start + 360 / 7 - 2.2;
  return `M ${point(318, start)} A 318 318 0 0 1 ${point(318, end)} L ${point(89, end)} A 89 89 0 0 0 ${point(89, start)} Z`;
}

export function ProgramThemeExplorer({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  const [selected, setSelected] = useState<ProgramTheme>("justice");
  const theme =
    PROGRAM_THEMES.find((item) => item.id === selected) ?? PROGRAM_THEMES[0];
  const sessions = getProgramEntries(locale).filter(
    (entry) => SESSION_THEMES[entry.id] === selected,
  );
  return (
    <section id="program-themes" className="theme-explorer">
      <h2 className="theme-explorer-heading font-heading">
        {isFr ? "Explorez le Sommet par thème" : "Explore the Summit by Theme"}
      </h2>
      <div className="theme-explorer-layout">
        <div
          className="theme-mobile"
          style={{ "--theme-color": theme.color } as CSSProperties}
        >
          <label htmlFor="mobile-theme" className="theme-mobile-label">
            {isFr ? "Choisir un thème" : "Choose a theme"}
          </label>
          <select
            id="mobile-theme"
            value={selected}
            aria-controls="theme-sessions"
            onChange={(event) =>
              setSelected(event.target.value as ProgramTheme)
            }
          >
            {PROGRAM_THEMES.map((item, index) => (
              <option key={item.id} value={item.id}>
                {index + 1}. {isFr ? item.fr : item.en}
              </option>
            ))}
          </select>
          <fieldset
            className="theme-colour-strip"
            aria-label={isFr ? "Thèmes du Sommet" : "Summit themes"}
          >
            {PROGRAM_THEMES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`${index + 1}. ${isFr ? item.fr : item.en}`}
                aria-pressed={selected === item.id}
                aria-controls="theme-sessions"
                onClick={() => setSelected(item.id)}
                className={selected === item.id ? "is-selected" : ""}
                style={{ background: item.color }}
              >
                {index + 1}
              </button>
            ))}
          </fieldset>
        </div>
        <fieldset
          className="theme-wheel"
          aria-label={isFr ? "Thèmes du Sommet" : "Summit themes"}
        >
          <svg
            className="theme-wheel-art"
            viewBox="0 0 660 660"
            aria-hidden="true"
          >
            {PROGRAM_THEMES.map((item, index) => (
              <path
                key={item.id}
                d={segment(index)}
                fill={item.color}
                className={selected === item.id ? "is-selected" : ""}
              />
            ))}
            <circle cx="330" cy="330" r="75" fill="#FAF6F7" stroke="#E8D4DB" />
          </svg>
          <span className="theme-wheel-centre" aria-hidden="true">
            <img
              src="/nbcs-logo-no-words.png"
              alt=""
              width="156"
              height="114"
              loading="lazy"
            />
          </span>
          {PROGRAM_THEMES.map((item, index) => {
            const [x, y] = point(216, (index * 360) / 7);
            return (
              <button
                key={item.id}
                type="button"
                className="theme-selector"
                aria-pressed={selected === item.id}
                aria-controls="theme-sessions"
                onClick={() => setSelected(item.id)}
                style={
                  {
                    "--theme-color": item.color,
                    "--theme-x": `${x / 6.6}%`,
                    "--theme-y": `${y / 6.6}%`,
                  } as CSSProperties
                }
              >
                <span aria-hidden="true" className="theme-marker">
                  {selected === item.id ? "✓" : ""}
                </span>
                {isFr ? item.fr : item.en}
              </button>
            );
          })}
        </fieldset>
        <div
          id="theme-sessions"
          className="theme-session-panel"
          style={{ "--theme-color": theme.color } as CSSProperties}
        >
          <h3 aria-live="polite" aria-atomic="true">
            {isFr ? theme.fr : theme.en}
          </h3>
          <ul>
            {sessions.map((entry) => {
              const display = getThemeSessionTitle(entry, locale);
              return (
                <li key={entry.id}>
                  <a
                    href={`?day=${entry.day}#${entry.anchor}`}
                    onClick={(event) => {
                      if (
                        event.ctrlKey ||
                        event.metaKey ||
                        event.shiftKey ||
                        event.altKey
                      )
                        return;
                      event.preventDefault();
                      navigateProgram(entry.day, entry.anchor);
                    }}
                  >
                    <span>{display}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
