import { Film } from 'lucide-react';

export function AudiovisualSection() {
  return (
    <div className="p-4 rounded-xl bg-white/[0.05] border border-dashed border-gray-600 text-center">
      <Film className="w-8 h-8 mx-auto mb-3 text-gray-500" />
      <h3 className="text-lg font-semibold text-gray-300 mb-2">
        Portfolio Audiovisual
      </h3>
      <p className="text-sm text-gray-500">
        Próxio — Portfolio audiovisual en desarrollo
      </p>
    </div>
  );
}
