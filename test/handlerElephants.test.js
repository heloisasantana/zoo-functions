const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica a quantidade total de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  it('Verifica se retorna um array contendo os nomes dos elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });

  it('Verifica a média aproximada da idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });

  it('Verifica a localização dos elefantes dentro do Zoológico', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });

  it('Verifica a popularidade dos elefantes', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toBeGreaterThanOrEqual(expected);
  });

  it('Verifica se retorna um array contendo os dias em que é possível visitar os elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });

  it('Verifica se ao não passar argumentos a função retorna undefined;', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });

  it('Verifica se ao passar como argumento um objeto vazio a função retorna uma string com: Parâmetro inválido, é necessário uma string', () => {
    const actual = handlerElephants({});
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });

  it('Verifica se ao passar uma string que não contempla uma funcionalidade a função retorna null', () => {
    const actual = handlerElephants('');
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
