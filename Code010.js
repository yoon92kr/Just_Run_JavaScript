let fruit = prompt("과일 명을 입력해주세요")

switch(fruit){
    case '사과' :
        console.log(`${fruit}는 100원 입니다.`);
        break;
    case '바나나' :
        console.log(`${fruit}는 200원 입니다.`);
        break;
    default:
        console.log(`그런 과일은 없습니다.`);
}