// 천의 단위마다 콤마를 삽입해 주는 함수
function numberToComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 객체가 비어있는지 확인하고, 비어있을경우 대체문자를 반환하는 함수
function nullCheck(value) {
    if (value == null ||  value =='null' || value == 'undefined' || value == '') {
        // 비어있을 경우 대체하고자 하는 문자 설정
        return "-";
    } else {
        return value;
    }
}

// 옳은 이메일을 입력해주는지 확인해 주는 함수
function emailCheck(value) {
    let checkFlag = false;
    let regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    if(!regex.test(value)) {
        alert('■ 올바른 이메일을 입력해주세요.');
    }
    else {
        checkFlag = true;
    }
    return checkFlag;
}

// ID 유효성을 확인해 주는 함수
function idCehck(value) {
    // 반드시 영소문자로 시작하며, 숫자|언더바|하이픈이 허용되는 6~20자리 확인
    let  regex = /^[a-z]{1}[a-z0-9_-]{5,19}$/;
    let alertText = '';
    let checkFlag = false;

    if(!regex.test(value)) {
        if(!/^[a-z]{1}/.test(value)) {
            alertText += '■ 아이디의 첫 글자는 소문자로 시작되어야 합니다. \n';
        }
        if(!/[a-z0-9_-]{1}$/.test(value)) {
            alertText += '■ 아이디는 소문자, 숫자, 언더바(_), 하이픈(-) 외 입력될 수 없습니다. \n';
        }
        if(!/^.{6,20}$/.test(value)) {
            alertText += '■ 아이디는 6자리 이상, 20자리 이하여야 합니다. \n';
        }
        alert(alertText);
    }
    else {
        checkFlag = true;
    }
    return checkFlag;
}

// PW 유효성을 확인해 주는 함수
function pwCehck(value) {
    // 반드시 문자, 숫자, 특수문자가 1개 이상 포함되며 8~24자리 확인
    let  regex = /(?=.*\d)(?=.*[a-zA-ZS])(?=.*?[!@#$%^&*?-]).{8,24}/;
    let alertText = '';
    let checkFlag = false;

    if(!regex.test(value)) {
        if(!/(?=.*\d)(?=.*[a-zA-ZS])(?=.*?[!@#$%^&*?-]).{1}/.test(value)) {
            alertText += '■ 비밀번호에 문자, 숫자, 특수문자는 반드시 포함되어야 합니다. \n';
        }
        if(!/^.{8,24}$/.test(value)) {
            alertText += '■ 비밀번호는 8자리 이상, 24자리 이하여야 합니다. \n';
        }
        alert(alertText);
    }
    else {
        checkFlag = true;
    }
    return checkFlag;
}
