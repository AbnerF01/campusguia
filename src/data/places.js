export const poIs = [
  {
    id: 'fcc', type: 'facultad', name: 'Facultad de Ciencias de la Computación', category: 'Facultad',
    lat: 19.0051, lng: -98.2045, contact: { phone: '+52 222 229 5500 Ext. 7200', email: 'direccion.fcc@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 5}, (_, i) => ({ id: `CCO${i+1}`, name: `CCO ${i+1}`, type: 'edificio', lat: 19.0051 + (Math.random() * 0.0004 - 0.0002), lng: -98.2045 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'arq', type: 'facultad', name: 'Facultad de Arquitectura', category: 'Facultad',
    lat: 19.0023, lng: -98.2042, contact: { phone: '+52 222 229 5500 Ext. 7900', email: 'direccion.arquitectura@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 12}, (_, i) => ({ id: `ARQ${i+1}`, name: `ARQ ${i+1}`, type: 'edificio', lat: 19.0023 + (Math.random() * 0.0004 - 0.0002), lng: -98.2042 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'fing', type: 'facultad', name: 'Facultad de Ingeniería', category: 'Facultad',
    lat: 19.0020, lng: -98.2031, contact: { phone: '+52 222 229 5500 Ext. 7300', email: 'direccion.ingenieria@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 9}, (_, i) => ({ id: `ING${i+1}`, name: `ING ${i+1}`, type: 'edificio', lat: 19.0020 + (Math.random() * 0.0004 - 0.0002), lng: -98.2031 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'der', type: 'facultad', name: 'Facultad de Derecho y Ciencias Sociales', category: 'Facultad',
    lat: 19.0016, lng: -98.2044, contact: { phone: '+52 222 229 5500 Ext. 7700', email: 'direccion.derecho@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 10}, (_, i) => ({ id: `DER${i+1}`, name: `DER ${i+1}`, type: 'edificio', lat: 19.0016 + (Math.random() * 0.0004 - 0.0002), lng: -98.2044 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'adm', type: 'facultad', name: 'Facultad de Administración', category: 'Facultad',
    lat: 19.0018, lng: -98.2020, contact: { phone: '+52 222 229 5500 Ext. 7750', email: 'direccion.administracion@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 8}, (_, i) => ({ id: `ADM${i+1}`, name: `ADM ${i+1}`, type: 'edificio', lat: 19.0018 + (Math.random() * 0.0004 - 0.0002), lng: -98.2020 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'eco', type: 'facultad', name: 'Facultad de Economía', category: 'Facultad',
    lat: 19.0015, lng: -98.2010, contact: { phone: '+52 222 229 5500 Ext. 7800', email: 'direccion.economia@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 7}, (_, i) => ({ id: `ECO${i+1}`, name: `ECO ${i+1}`, type: 'edificio', lat: 19.0015 + (Math.random() * 0.0004 - 0.0002), lng: -98.2010 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'fiq', type: 'facultad', name: 'Facultad de Ingeniería Química', category: 'Facultad',
    lat: 19.0040, lng: -98.2035, contact: { phone: '+52 222 229 5500 Ext. 7400', email: 'direccion.fiq@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 9}, (_, i) => ({ id: `FIQ${i+1}`, name: `FIQ ${i+1}`, type: 'edificio', lat: 19.0040 + (Math.random() * 0.0004 - 0.0002), lng: -98.2035 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'fcq', type: 'facultad', name: 'Facultad de Ciencias Químicas', category: 'Facultad',
    lat: 19.0035, lng: -98.2025, contact: { phone: '+52 222 229 5500 Ext. 7500', email: 'direccion.fcq@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 12}, (_, i) => ({ id: `FCQ${i+1}`, name: `FCQ ${i+1}`, type: 'edificio', lat: 19.0035 + (Math.random() * 0.0004 - 0.0002), lng: -98.2025 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'fm', type: 'facultad', name: 'Facultad de Cs. Físico Matemáticas', category: 'Facultad',
    lat: 19.0045, lng: -98.2015, contact: { phone: '+52 222 229 5500 Ext. 7600', email: 'direccion.fcfm@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 10}, (_, i) => ({ id: `FM${i+1}`, name: `FM ${i+1}`, type: 'edificio', lat: 19.0045 + (Math.random() * 0.0004 - 0.0002), lng: -98.2015 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'fce', type: 'facultad', name: 'Facultad de Cs. de la Electrónica', category: 'Facultad',
    lat: 19.0030, lng: -98.2030, contact: { phone: '+52 222 229 5500 Ext. 7450', email: 'direccion.fce@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 7}, (_, i) => ({ id: `FCE${i+1}`, name: `FCE ${i+1}`, type: 'edificio', lat: 19.0030 + (Math.random() * 0.0004 - 0.0002), lng: -98.2030 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'fcp', type: 'facultad', name: 'Facultad de Cultura Física', category: 'Facultad',
    lat: 18.9970, lng: -98.2050, contact: { phone: '+52 222 229 5500 Ext. 7100', email: 'direccion.fcf@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 8}, (_, i) => ({ id: `FCP${i+1}`, name: `FCP ${i+1}`, type: 'edificio', lat: 18.9970 + (Math.random() * 0.0004 - 0.0002), lng: -98.2050 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'len', type: 'facultad', name: 'Facultad de Lenguas', category: 'Facultad',
    lat: 19.0010, lng: -98.1990, contact: { phone: '+52 222 229 5500 Ext. 5810', email: 'direccion.lenguas@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 2}, (_, i) => ({ id: `LEN${i+1}`, name: `LEN ${i+1}`, type: 'edificio', lat: 19.0010 + (Math.random() * 0.0004 - 0.0002), lng: -98.1990 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'ic', type: 'facultad', name: 'Instituto de Ciencias (ICUAP)', category: 'Instituto',
    lat: 19.0030, lng: -98.2000, contact: { phone: '+52 222 229 5500 Ext. 7000', email: 'direccion.icuap@correo.buap.mx', hours: 'Lunes a Viernes 8:00 - 18:00' },
    buildings: Array.from({length: 12}, (_, i) => ({ id: `IC${i+1}`, name: `IC ${i+1}`, type: 'edificio', lat: 19.0030 + (Math.random() * 0.0004 - 0.0002), lng: -98.2000 + (Math.random() * 0.0004 - 0.0002) }))
  },
  {
    id: 'emas',
    type: 'servicio',
    name: 'Edificios Multiaulas (EMA)',
    category: 'Edificios Multiaulas',
    lat: 19.002500, 
    lng: -98.204000,
    buildings: [
      { id: 'EMA1', name: 'EMA 1', type: 'edificio', lat: 19.004000, lng: -98.204500 },
      { id: 'EMA2', name: 'EMA 2', type: 'edificio', lat: 19.002300, lng: -98.204000 },
      { id: 'EMA3', name: 'EMA 3', type: 'edificio', lat: 19.004500, lng: -98.201000 },
      { id: 'EMA4', name: 'EMA 4', type: 'edificio', lat: 19.004000, lng: -98.203000 },
      { id: 'EMA5', name: 'EMA 5', type: 'edificio', lat: 19.002000, lng: -98.201500 },
      { id: 'EMA6', name: 'EMA 6', type: 'edificio', lat: 19.003500, lng: -98.202000 },
      { id: 'EMA7', name: 'EMA 7', type: 'edificio', lat: 19.001600, lng: -98.203000 },
      { id: 'EMA8', name: 'EMA 8', type: 'edificio', lat: 19.001800, lng: -98.201000 }
    ]
  },
  {
    id: 'puertas',
    type: 'servicio',
    name: 'Accesos y Puertas',
    category: 'Accesos',
    lat: 19.005500,
    lng: -98.204500,
    buildings: [
      { id: 'P1', name: 'Puerta 1 (24 Sur - Vehicular/Peatonal)', type: 'edificio', lat: 19.0020, lng: -98.1960 },
      { id: 'P2', name: 'Puerta 2 (Estadio - Peatonal/Vehicular)', type: 'edificio', lat: 18.9975, lng: -98.1965 },
      { id: 'P3', name: 'Puerta 3 (Valsequillo Biblioteca)', type: 'edificio', lat: 18.9950, lng: -98.2010 },
      { id: 'P4', name: 'Puerta 4 (Valsequillo Arena - Peatonal)', type: 'edificio', lat: 18.9995, lng: -98.2040 },
      { id: 'P5', name: 'Puerta 5 (Valsequillo Arena - Vehicular)', type: 'edificio', lat: 18.9990, lng: -98.2045 },
      { id: 'P6', name: 'Puerta 6 (Valsequillo Arquitectura)', type: 'edificio', lat: 19.0015, lng: -98.2055 },
      { id: 'P7', name: 'Puerta 7 (Arquitectura - Peatonal)', type: 'edificio', lat: 19.0020, lng: -98.2050 },
      { id: 'P8', name: 'Puerta 8 (Arquitectura - Vehicular)', type: 'edificio', lat: 19.0025, lng: -98.2055 },
      { id: 'P9', name: 'Puerta 9 (Prol. 14 Sur)', type: 'edificio', lat: 19.0035, lng: -98.2060 },
      { id: 'P10', name: 'Puerta 10 (Fisiología ICUAP)', type: 'edificio', lat: 19.0045, lng: -98.2055 },
      { id: 'P11', name: 'Puerta 11 (Fisiología ICUAP - Vehicular)', type: 'edificio', lat: 19.0050, lng: -98.2050 },
      { id: 'P12', name: 'Puerta 12 (San Claudio 14 Sur)', type: 'edificio', lat: 19.0055, lng: -98.2045 },
      { id: 'P13', name: 'Puerta 13 (San Claudio 18 Sur)', type: 'edificio', lat: 19.0055, lng: -98.2025 },
      { id: 'P14', name: 'Puerta 14 (San Claudio Derecho)', type: 'edificio', lat: 19.0055, lng: -98.2015 },
      { id: 'P15', name: 'Puerta 15 (San Claudio Economía)', type: 'edificio', lat: 19.0055, lng: -98.2005 },
      { id: 'P16', name: 'Puerta 16 (San Claudio Autoacceso)', type: 'edificio', lat: 19.0055, lng: -98.1995 },
      { id: 'P17', name: 'Puerta 17 (San Claudio Cultura F.)', type: 'edificio', lat: 19.0055, lng: -98.1985 },
      { id: 'P18', name: 'Puerta 18 (Valsequillo Contaduría - Peatonal)', type: 'edificio', lat: 18.9985, lng: -98.2050 },
      { id: 'P19', name: 'Puerta 19 (Contaduría - Vehicular)', type: 'edificio', lat: 18.9980, lng: -98.2055 }
    ]
  },
  {
    id: 'bib', type: 'servicio', name: 'Biblioteca Central Universitaria', category: 'Servicio', lat: 18.9954, lng: -98.2013,
    buildings: [{ id: 'BIB1', name: 'Edificio Principal', type: 'edificio', lat: 18.9954, lng: -98.2013 }]
  },
  {
    id: 'are', type: 'servicio', name: 'Arena BUAP', category: 'Deporte', lat: 19.0001, lng: -98.2036,
    buildings: [{ id: 'ARE1', name: 'Domo Arena BUAP', type: 'edificio', lat: 19.0001, lng: -98.2036 }]
  },
  {
    id: 'rec', type: 'servicio', name: 'Torre de Gestión Académica (Rectoría)', category: 'Administración', lat: 19.0017, lng: -98.2044,
    buildings: [{ id: 'TGA1', name: 'Torre Principal', type: 'edificio', lat: 19.0017, lng: -98.2044 }]
  },
  {
    id: 'est', type: 'servicio', name: 'Estadio Universitario BUAP', category: 'Deporte', lat: 18.9972, lng: -98.1972,
    buildings: [{ id: 'EST1', name: 'Cancha y Gradas', type: 'edificio', lat: 18.9972, lng: -98.1972 }]
  }
];

export const getAllBuildings = () => {
  let all = [];
  poIs.forEach(poi => {
    if (poi.buildings) {
      poi.buildings.forEach(b => {
        all.push({
          ...b,
          parentName: poi.name
        });
      });
    } else {
      all.push({
        id: poi.id,
        name: poi.name,
        lat: poi.lat,
        lng: poi.lng,
        parentName: poi.category
      });
    }
  });
  return all;
};
