it("Si hacemos repetirLetras('hola', 2) debería retornar hhoollaa", function() {
  let resultado = repetirLetras('hola', 2)
  assert.equal(resultado, 'hhoollaa',`repetirLetras('hola', 2) debería retornar 'hhoollaa' pero fue ${resultado}`);
})

it("Si hacemos repetirLetras('ada', 3) debería retornar aaadddaaa", function() {
  let resultado = repetirLetras('ada', 3)
  assert.equal(resultado, 'aaadddaaa',`repetirLetras('ada', 3) debería retornar 'aaadddaaa' pero fue ${resultado}`);
})