const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se ao não passar argumentos a função retorna um objeto com os horários de abertura', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('Verifica se ao passar os argumentos Monday e 09:00-AM a função retorna a string: The zoo is closed', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  it('Verifica se ao passar os argumentos Tuesday e 09:00-AM a função retorna a string: The zoo is open', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });

  it('Verifica se ao passar os argumentos Wednesday e 09:00-PM a função retorna a string: The zoo is closed', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  it('Verifica se ao passar os argumentos Thu e 09:00-AM a função lança uma exceção com a mensagem: The day must be valid. Example: Monday', () => {
    // Referência utilizada para inserir toThrow para lançar exceção: arquivo getRelatedEmployess.test.js;
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('Verifica se ao passar os argumentos Friday e 09:00-ZM a função lança uma exceção com a mensagem: The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });

  it('Verifica se ao passar os argumentos Saturday e C9:00-AM a função lança uma exceção com a mensagem: The hour should represent a number', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(/^The hour should represent a number$/);
  });

  it('Verifica se ao passar os argumentos Sunday e 09:c0-AM a função lança uma exceção com a mensagem: The minutes should represent a number', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(/^The minutes should represent a number$/);
  });

  it('Verifica se ao passar os argumentos Monday e 13:00-AM a função lança uma exceção com a mensagem: The hour must be between 0 and 12', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('Verifica se ao passar os argumentos Tuesday e 09:60-AM a função lança uma exceção com a mensagem: The minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow((/^The minutes must be between 0 and 59$/));
  });
});
