describe ("Constructors", function() {

  it ("Object is constructor of {}", function() {
    expect({}.constructor).toBe(__);
  });

  it ("Array is constructor of []", function() {
    expect([].constructor).toBe(__);
  });

  it ("String is constructor of ''", function() {
    expect("".constructor).toBe(__);
  });

  it ("Number is constructor of 1", function() {
    expect((1).constructor).toBe(__);
  });

  it ("Boolean is constructor of true", function() {
    expect(true.constructor).toBe(__);
  });

  it ("RegExp is constructor of /aaa/", function() {
    expect(/aaa/.constructor).toBe(__);
  });

  it ("Function is constructor of a function", function() {
    const f = function() {};
    expect(f.constructor).toBe(__);
  });
});
