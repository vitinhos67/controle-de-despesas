

### Fortificando e aprendendo novos recursos no JavaScript puro.

 entre eles são:

<h1>reduce():</h1>
Este método acumula valores em um unico valor, sendo preciso passar no minino 2 parametros.


<h2>Parametros</h2>
<p>- O primeiro servira de acumulador, Os valores que estão sendo passados por ultimo nele, estão sendo armazenados<p>
<p>- O segundo parametro e o valor da array atual<p>
<p>- o terceiro servira de valor inicial da primeira array<p>

  <p> Se a array não contem valor, vai resultar em um TypeError<p>


<h1>Exemplos</h1>

```js
const value = [0,1,2,3]
const newValue = value.reduce((accumulator, value) => accumulator + value, 0);   
console.log(newValue) // 6
```

<h1>filter():</h1>
Este metodo ira criar uma nova array de numeros que retornarem true para uma função passada no parametro


```js
const number = [ 45, 35 ,-25, -55]
const negativeNumber = number.filter(NegativeNumber => NegativeNumber < 0);
console.log(negativeNumber) // -25, -55
```


<h1>map():</h1>
<P>O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.<P>
  
 
<h2>Parametros</h2>
  
  <P>- O valor que ta sendo iterado(Obrigatorio)<P>
  <P>- Posição que esta sendo iterado<P>
  <P>- Array que esta sendo iterada<P>
  
  
  
```js
const numbers = [1, 2, 3]    
const squareNumbers = numbers.map( item => item ** 2)
console.log(squareNumbers) // [1, 4 ,9] 
```
<p>Este codigo percorre a array, guardando o valor resultante da função callback passada por parametro em squareNumber</p>
  



Exercicio pratico acompanhado pelo canal do Roger Melo
<p>link:https://www.youtube.com/watch?v=xarRciYWT5Q <p>
