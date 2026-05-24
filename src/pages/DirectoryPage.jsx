import React from 'react';
import { Phone, Clock, Mail } from 'lucide-react';
import { poIs } from '../data/places';
import './DirectoryPage.css';

const generalServices = [
  {
    id: 'dae',
    name: 'DAE (Dirección de Administración Escolar)',
    description: 'Trámites de titulación, certificados, kárdex y credenciales.',
    contact: { phone: '+52 222 229 5500 Ext. 5084', hours: 'Lunes a Viernes de 8:00 a 17:00 hrs', email: 'atencion.dae@correo.buap.mx' }
  },
  {
    id: 'dicufi',
    name: 'Dirección de Cultura Física (DICUFI)',
    description: 'Inscripciones a talleres deportivos y torneos universitarios.',
    contact: { phone: '+52 222 229 5500 Ext. 7103', hours: 'Lunes a Viernes de 9:00 a 16:00 hrs', email: 'dicufi@correo.buap.mx' }
  },
  {
    id: 'caal',
    name: 'Centro de Autoacceso para el Aprendizaje de Lenguas (CAAL)',
    description: 'Cursos de idiomas, validación de nivel y certificaciones.',
    contact: { phone: '+52 222 229 5500 Ext. 5809', hours: 'Lunes a Viernes de 8:00 a 18:00 hrs', email: 'caal@correo.buap.mx' }
  },
  {
    id: 'clinica',
    name: 'Clínica Universitaria (Servicio Médico)',
    description: 'Atención médica de primer contacto y urgencias menores.',
    contact: { phone: '+52 222 229 5500 Ext. 5122', hours: 'Lunes a Viernes de 8:00 a 20:00 hrs', email: 'salud.universitaria@correo.buap.mx' }
  }
];

// Unimos los servicios generales con las facultades que tienen contacto
const directoryData = [
  ...generalServices,
  ...poIs.filter(poi => poi.contact).map(poi => ({
    id: poi.id,
    name: poi.name,
    description: `Atención a estudiantes de la ${poi.name}.`,
    contact: poi.contact
  }))
];

const DirectoryPage = () => {
  return (
    <div className="directory-page page-container h-full w-full flex-col">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--buap-blue)' }}>Directorio Administrativo</h2>
        <p className="text-sm text-secondary mb-4">Encuentra los contactos y horarios de las oficinas y Facultades.</p>
        
        <div className="directory-list">
          {directoryData.map((item) => (
            <div key={item.id} className="directory-card glass transition-all hover-scale">
              <h3 className="directory-name">{item.name}</h3>
              <p className="directory-desc text-xs text-secondary">{item.description}</p>
              
              <div className="directory-details">
                <div className="detail-item">
                  <Clock size={14} className="detail-icon" />
                  <span className="text-xs">{item.contact.hours}</span>
                </div>
                <div className="detail-item">
                  <Phone size={14} className="detail-icon" />
                  <span className="text-xs">{item.contact.phone}</span>
                </div>
                <div className="detail-item">
                  <Mail size={14} className="detail-icon" />
                  <span className="text-xs">{item.contact.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectoryPage;
