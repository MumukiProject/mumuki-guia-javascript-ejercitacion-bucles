it("Si hacemos esPalindromo('ada') debería retornar true", function() {
  let resultado = esPalindromo('ada')
  assert.equal(resultado, true,`esPalindromo('ada') debería retornar true pero fue ${resultado}`);
})

it("Si hacemos esPalindromo('lovelace') debería retornar false", function() {
  let resultado = esPalindromo('lovelace')
  assert.equal(resultado, false,`esPalindromo('lovelace') debería retornar false pero fue ${resultado}`);
})