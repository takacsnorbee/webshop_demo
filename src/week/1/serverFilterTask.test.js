const functions = require('./serverFilterTask').default;

describe('filters the servers and transforms them into result objects', () => {
  const { serverFilter, outputServerFactory, excludeHttpFromList } = functions;

  test('Test ServerFilter method', () => {
    const mockServerList = {
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
        services: ['ftp', 'print'],
        cpu: 8,
        ram: 16384
      },
      S3: {
        os: 'debian',
        status: false,
        services: ['http', 'ssh'],
        cpu: 2,
        ram: 8192
      }
    };

    const expectedList = [{ name: 'S1', status: 'Online', services: ['ssh'] }];

    const outputList = serverFilter(mockServerList);
    expect(outputList).toEqual(expectedList);
  });

  test('Test outputServerFactory method with valid data', () => {
    const mockServer = {
      name: 'S6',
      status: true,
      services: ['ftp', 'print', 'http']
    };
    const outputServer = outputServerFactory(mockServer);

    expect(outputServer.name).toBe('S6');
    expect(outputServer.status).toBe('Online');
    expect(outputServer.services).toEqual(['ftp', 'print']);
  });

  test('Test outputServerFactory method with invalid data', () => {
    const mockServer = {
      name: 3,
      status: 'Direct fail input',
      services: ['ftp', 'print']
    };
    const outputServer = outputServerFactory(mockServer);

    expect(outputServer.name).toBe(3);
    expect(outputServer.status).toBe('Offline'); // Because of the fail
    expect(outputServer.services).toEqual(['ftp', 'print']);
  });

  test('Test excludeHttpFromList method', () => {
    const mockServices = ['ftp', 'print', 'http'];
    const outputList = excludeHttpFromList(mockServices);
    expect(outputList).toEqual(['ftp', 'print']);
  });

  test('Test excludeHttpFromList methodwith empty array', () => {
    const mockServices = [];
    const outputList = excludeHttpFromList(mockServices);
    expect(outputList).toEqual([]);
  });
});
