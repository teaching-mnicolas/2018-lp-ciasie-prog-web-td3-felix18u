describe ("Properties access", function() {
  let warrior, Character;

  beforeEach(function() {
    Character = function() {};
    Character.prototype.hp = 100;
    Character.prototype.armor = 10;

    warrior = new Character();
    warrior.damage = 42;
    warrior.armor = 50;
  });

  it ("object has access to its own property", function() {
    expect(warrior.damage).toBeDefined();
    expect(warrior.damage).toEqual(__);
  });

  it ("object has access to property of its prototype", function() {
    expect(warrior.hp).toBeDefined();
    expect(warrior.hp).toEqual(__);
  });

  it ("object's property mask prototype's property", function() {
    expect(warrior.armor).toBeDefined();
    expect(warrior.armor).toEqual(__);
  });

  it ("property not found is undefined", function() {
    expect(warrior.mp).toBe__();    // defined or undefined
  });

  it ("Prototype modification is propagated to objects", function() {
    expect(warrior.mp).toBeUndefined();
    __.__.mp = 50;                 // add a property to Character prototype
    expect(warrior.mp).toBeDefined();
    expect(warrior.mp).toEqual(__);
  });

  it ("Deleting a property on an object can reveal prototype's property", function() {
    expect(warrior.armor).toEqual(__);
    delete warrior.armor;
    expect(warrior.armor).toEqual(__);
  });
});
