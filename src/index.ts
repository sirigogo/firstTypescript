function printAge(person: { name: string; age: number | string }): void {
  let age: number | string;
  if (typeof person.age === 'number' || typeof person.age === 'string') {
    age = person.age.toString();
  }
  console.log(`${person.name}의 나이는 ${age}살 입니다.`);
}

const kimcoding = {
  name: '김코딩',
  age: 30,
};

const parhacker = {
  name: '박해커',
  age: '서른',
};

printAge(kimcoding);
printAge(parhacker);
