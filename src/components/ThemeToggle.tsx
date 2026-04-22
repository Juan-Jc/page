import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { NEON_COLORS } from '../types';

export function ThemeToggle() {
  const { theme, neonColor, toggleTheme, setNeonColor } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center gap-3">
      {/* Color Picker */}
      <div className="flex items-center gap-2">
        <Palette className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
        <div className="flex gap-1.5">
          {NEON_COLORS.map((color) => (
            <button
              key={color.value}
              onClick={() => setNeonColor(color.value)}
              className={`w-6 h-6 rounded-full transition-all duration-200 hover:scale-110 ${
                neonColor === color.value
                  ? isDark ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent' : 'ring-2 ring-gray-900 ring-offset-2 ring-offset-transparent'
                  : ''
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
              aria-label={`Color neon ${color.name}`}
            />
          ))}
        </div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
          isDark ? 'bg-white/[0.05] hover:bg-white/[0.10]' : 'bg-black/[0.05] hover:bg-black/[0.10]'
        }`}
        aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )}
        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {isDark ? 'Claro' : 'Oscuro'}
        </span>
      </button>
    </div>
  );
}
