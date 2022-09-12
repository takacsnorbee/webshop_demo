const servers = {
  S1: {
    os: 'debian',
    status: true,
    services: ['http', 'ssh'],
    cpu: 2,
    ram: 8192
  },
  S2: {
    os: 'windows',
    status: true,
    services: ['http', 'ftp', 'print'],
    cpu: 8,
    ram: 16384
  },
  S3: {
    os: 'debian',
    status: false,
    services: ['http', 'ssh'],
    cpu: 2,
    ram: 8192
  },
  S4: {
    os: 'windows',
    status: false,
    services: ['http', 'ftp', 'print'],
    cpu: 8,
    ram: 16384
  },
  S5: {
    os: 'debian',
    status: true,
    services: ['ssh'],
    cpu: 2,
    ram: 8192
  },
  S6: {
    os: 'windows',
    status: true,
    services: ['ftp', 'print'],
    cpu: 8,
    ram: 16384
  }
};

const serverFilter = (servers) =>
  Object.entries(servers).reduce((acc, server) => {
    const [name, params] = server;
    const { services, status } = params;
    const outputServer = outputServerFactory({ name, status, services });

    return status && services.includes('http') ? [...acc, outputServer] : acc;
  }, []);

const outputServerFactory = (server) => {
  const { name, status, services } = server;
  return {
    name,
    status: status === true ? 'Online' : 'Offline',
    services: excludeHttpFromList(services)
  };
};

const excludeHttpFromList = (services) =>
  services.filter((service) => service !== 'http');

export default {
  excludeHttpFromList,
  outputServerFactory,
  serverFilter
};

serverFilter(servers);
// Expected output:
// list of object, where
// the status is true, services include http (filters)
// result object, like: name: S1 + status: 'online'/'offline' + services as before BUT WITHOUT http
