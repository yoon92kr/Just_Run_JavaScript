// 변수의 선언

var varTest1 = 'var 초기화';
// var 키워드는 중복 선언 / 재할당이 가능하다
console.log(varTest1);

var varTest1 = 'var 중복 선언';
console.log(varTest1);

varTest1 = 'var 재할당';
console.log(varTest1);


let varTest2 = 'let 초기화';
// let 키워드로 변수 선언시, 중복선언(동일한 변수명)은 불가능하지만, 재할당은 가능하다.
console.log(varTest2);  

//let varTest2 = 'let 중복 선언'; 에러 발생
varTest2 = 'let 재할당';
console.log(varTest2);


const varTest3 = 'const 초기화';
console.log(varTest3);

// const varTest3 = 'const 중복 선언';  에러 발생
// varTest3 = 'const 재할당' 에러 발생
 
const varTest4 = {
    test : 'const 재할당'
};
console.log(varTest4);

varTest4.test = 'const 재할당';
console.log(varTest4);
// const는 원시 값은 재할당이 불가능하지만, 객체의 경우 가능하다.
