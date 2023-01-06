function tesTruthy(val){
    return val ? console.log('truthy') : console.log('falsy');

}

tesTruthy(true); //true

tesTruthy(false);

tesTruthy(new Boolean(false)); //true (objeto é sempre true)

tesTruthy(''); //false
tesTruthy('Packt'); //true

tesTruthy(new String ('')); //true (Objeto  é sempre true)

tesTruthy(1);// true

tesTruthy(-1);//true

tesTruthy(NaN); //false

tesTruthy(new Number (NaN)); // (true e sempre objeto)

tesTruthy({}); //true (Objeto  é sempre true )

tesTruthy (Object); //true

tesTruthy(Object.name);

tesTruthy(Object.age); // age(propriedade não existe)
