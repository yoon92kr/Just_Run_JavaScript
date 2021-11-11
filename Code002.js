// 변수 키워드 별 스코프

var a = 1;
if (true) {
    var a = 2
    console.log(a);
};
console.log(a);
// var 키워드는 함수 내부에 선언된 변수만 지역변수로 한정하며, 나머지는 모두 전역변수로 간주한다.


let b = 1;
if (true) {
    let b = 3;
    console.log(b);
};
console.log(b);


const c = 1;
if (true) {
    const c = 2
    console.log(c);
};
console.log(c);
// let, const 키워드는 함수 / 블록 내부에 선언된 변수 모두 지역변수로 인정한다.