import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../context/useTheme';
import { NEON_COLORS } from '../types';

export function ThemeToggle() {
  const { theme, neonColor, toggleTheme, setNeonColor } = useTheme();

  return (
    <div className="flex flex-wrap items-center justify-end gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card-muted)] px-3 py-2 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <Palette className="h-4 w-4 text-[color:var(--color-muted)]" />
        <div className="flex gap-1.5">
          {NEON_COLORS.map((color) => (
            <button
              key={color.value}
              onClick={() => setNeonColor(color.value)}
              className={`h-5 w-5 rounded-full transition-all duration-200 hover:scale-110 ${
                neonColor === color.value
                  ? 'ring-2 ring-white/90 ring-offset-2 ring-offset-transparent'
                  : ''
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
              aria-label={`Color neon ${color.name}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-3 py-2 text-sm font-medium text-[color:var(--color-text)] transition-colors duration-300 hover:bg-[color:var(--color-card-muted)]"
        aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
      >
        {theme === 'dark' ? (
          <Sun className="h-4 w-4 text-yellow-400" />
        ) : (
          <Moon className="h-4 w-4 text-[color:var(--color-muted)]" />
        )}
        <span>{theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}</span>
      </button>
    </div>
  );
}
