import { Film } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function AudiovisualSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`p-4 rounded-xl text-center border ${
      isDark 
        ? 'bg-white/[0.05] border-dashed border-gray-600' 
        : 'bg-black/[0.04] border-dashed border-gray-400'
    }`}>
      <Film className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
      <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Portfolio Audiovisual
      </h3>
      <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        Próxio — Portfolio audiovisual en desarrollo
      </p>
    </div>
  );
}
