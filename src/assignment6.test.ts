import { LinkedList } from "./LinkedList";

const launa: Animal = { name: 'Launa', type: 'dog' };
const myu: Animal = { name: 'Myu', type: 'cat' };
const spork: Animal = { name: 'Spork', type: 'cat' };
interface Animal{
  name: string;
  type: 'cat' | 'dog';
}
describe("Animal Shelter", () => {
  it("gets the next cat", () => {
    const shelter = new LinkedList<Animal>();

    shelter.NQ(myu);
    shelter.NQ(launa);
    shelter.NQ(spork);

    expect(shelter.DQ( (animal) => animal.type === 'cat') ).toMatchObject({ name: 'Myu', type: 'cat' });
    expect(shelter.DQ( (animal) => animal.type === 'cat') ).toMatchObject({ name: 'Spork', type: 'cat' });
  });

  it("gets the next dog", () => {
    const shelter = new LinkedList<Animal>();

    shelter.NQ(myu);
    shelter.NQ(launa);
    shelter.NQ(spork);

    expect(shelter.DQ((animal) => animal.type === 'dog')).toMatchObject({ name: 'Launa', type: 'dog' });
  });

  it("gets the next friend", () => {
    const shelter = new LinkedList<Animal>();

    shelter.NQ(myu);
    shelter.NQ(launa);
    shelter.NQ(spork);

    expect(shelter.DQ()).toMatchObject({ name: 'Myu', type: 'cat' });
    expect(shelter.DQ()).toMatchObject({ name: 'Launa', type: 'dog' });
  });
});