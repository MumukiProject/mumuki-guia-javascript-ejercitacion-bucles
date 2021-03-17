`tieneBloque(array)`

Crear una función `hayBloque` que tome como argumento un array `array` y devuelva `true` si dicho `array` tiene un bloque de 3 o más ítems consecutivos idénticos, o `false` si no tiene.

```javascript
tieneBloque([1, 2, 3]) // false
tieneBloque([1, 1, 1, 2, 3]) // true
tieneBloque([1, 2, 3, 3, 3]) // true
tieneBloque([1, 2, 3, 3, 3, 8]) // true
tieneBloque([1, 2, 2, 3, 3, 4]) // false
```