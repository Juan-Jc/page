const PROFILE_PHOTO = 'https://avatars.githubusercontent.com/u/83313120?v=4';

export function ProfileSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
      <div className="flex-shrink-0">
        <img
          src={PROFILE_PHOTO}
          alt="Juan Camilo Puerta"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-[3px]"
          style={{ borderColor: 'var(--neon-color)' }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Juan Camilo Puerta
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Developer & Audiovisual Producer
          </p>
        </div>
        <p className="text-sm text-gray-400 max-w-md leading-relaxed">
          Desarrollador web con experiencia en React, TypeScript y soluciones
          full-stack. Productor audiovisual con pasión por crear experiencias
          digitales únicas. Buscando mi primera oportunidad en el sector
          tecnológico.
        </p>
      </div>
    </div>
  );
}
