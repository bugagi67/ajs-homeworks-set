import Character from '../js/Character';
import Team from '../js/Team';

test('создание класса, тестирование метода add(), toArray()', () => {
  const character = new Character('Ivan', 'bowerman');
  const team = new Team();
  team.add(character);
  const expected = [
    {
      name: 'Ivan',
      type: 'bowerman',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
  ];

  expect(team.toArray()).toEqual(expected);
});

test('Проверка ошибки при повторном добавлении персонажа', () => {
  const character = new Character('Ivan', 'bowerman');
  const team = new Team();

  expect(() => {
    team.add(character);
    team.add(character);
  }).toThrow(new Error('Такой персонаж уже существует'));
});

test('Проверка метода addAll(), toArray', () => {
  const character = new Character('Ivan', 'bowerman');
  const character2 = new Character('Oleg', 'magician');
  const team = new Team();
  team.addAll(character, character2);

  const expected = [
    {
      name: 'Ivan',
      type: 'bowerman',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
    {
      name: 'Oleg',
      type: 'magician',
      health: 100,
      level: 1,
      atack: 10,
      defence: 10,
    },
  ];

  expect(team.toArray()).toEqual(expected);
});
