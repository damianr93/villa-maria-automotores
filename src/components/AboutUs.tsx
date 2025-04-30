import React from 'react'

interface Advisor {
  name: string
  phone: string
  role: string
  photo: string
  sendWpp: string
}

const advisors: Advisor[] = [
  {
    name: 'Gonzalo Rovira',
    phone: '353 4242200',
    role: 'Asesor',
    photo: '/assets/asesor4.jpeg',
    sendWpp: 'https://api.whatsapp.com/send?phone=3534242200&text=Hola'
  },
  {
    name: 'Ezequiel Rovira',
    phone: '353 4794721',
    role: 'Asesor',
    photo: '/assets/asesor1.jpeg',
    sendWpp: 'https://api.whatsapp.com/send?phone=5493534794721&text=Hola'
  },
  {
    name: 'Eric Oldani',
    phone: '353 4788952',
    role: 'Asesor',
    photo: '/assets/asesor3.jpeg',
    sendWpp: 'https://api.whatsapp.com/send?phone=5493534788952&text=Hola'
  },
  {
    name: 'Betiana Cittadini',
    phone: '353 4018476',
    role: 'Gestoria',
    photo: '/assets/gestora1.jpg',
    sendWpp: 'https://api.whatsapp.com/send?phone=3534018476&text=Encuesta'
  },
]

const QuienesSomos: React.FC = () => (
  <section id="quienes-somos" className="py-16 bg-dark/90">
    {/* Intro */}
    <div className="max-w-3xl mx-auto px-6 text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
        Quiénes Somos
      </h2>
      <p className="text-lg md:text-xl text-light/80">
        En Villa María Automotores somos un equipo apasionado por ayudarte a encontrar el vehículo ideal.
        Con años de experiencia y compromiso, asesoramos con transparencia y dedicación.
      </p>
    </div>

    {/* Cards de asesores */}
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
      {advisors.map((a) => (
        <div
          key={a.name}
          className="bg-light/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center"
        >
          <img
            src={a.photo}
            alt={`Foto de ${a.name}`}
            className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-neon-red"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-light m-1">
            {a.name}
          </h3>
          <h4 className="text-l md:text-l font-semibold text-light mb-2">
            {a.role}
          </h4>
          <a
            href={a.sendWpp}
            target='_blank'
            className="text-lg text-neon-red/90 font-medium hover:underline"
          >
            {a.phone}
          </a>
        </div>
      ))}
    </div>

    {/* Ubicación en Google Maps */}
    <div className="max-w-4xl mx-auto px-6 mt-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-light mb-4">
        Nuestra Ubicación
      </h2>
      <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=-32.4102779,-63.2656633&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Ubicación Villa María Automotores"
        />
      </div>
    </div>
  </section>
)

export default QuienesSomos
