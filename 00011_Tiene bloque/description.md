> Definí una función `hayBloque` que tome como argumento un array `array` y devuelva `true` si dicho `array` tiene un bloque de 3 o más ítems consecutivos idénticos, o `false` si no tiene.
>
```javascript
ム tieneBloque([1, 2, 3])
false
ム tieneBloque([1, 1, 1, 2, 3])
true
ム tieneBloque([1, 2, 3, 3, 3])
true
ム tieneBloque([1, 2, 3, 3, 3, 8])
true
ム tieneBloque([1, 2, 2, 3, 3, 4])
false
```