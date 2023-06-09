## 공통 문제 1 : 두 수의 합
```javascript
<문제 설명>
정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.

<제한사항>
-50,000 ≤ num1 ≤ 50,000
-50,000 ≤ num2 ≤ 50,000

<입출력 예>
num1	num2	result
2	    3	    5
100	  2	    102

<입출력 예 설명>
입출력 예 #1
num1이 2이고 num2가 3이므로 2 + 3 = 5를 return합니다.

입출력 예 #2
num1이 100이고 num2가 2이므로 100 + 2 = 102를 return합니다.
```
내 풀이 
```
function solution(num1, num2) {
  return num1 + num2;
}
```

<br/>

## 공통 문제 2 : 두 수의 차
```javascript
<문제 설명>                
정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.

<제한사항>
-50000 ≤ num1 ≤ 50000
-50000 ≤ num2 ≤ 50000

<입출력 예>
num1	num2	result
2	3	-1
100	2	98

<입출력 예 설명>
입출력 예 #1
num1이 2이고 num2가 3이므로 2 - 3 = -1을 return합니다.

입출력 예 #2
num1이 100이고 num2가 2이므로 100 - 2 = 98을 return합니다.
```
내 풀이 
```
function solution2(num1, num2) {
  return num1 - num2;
}
```

<br/>

## 공통 문제 3 : 두 수의 곱
```javascript
<문제 설명>
정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.

<제한사항>
0 ≤ num1 ≤ 100
0 ≤ num2 ≤ 100

<입출력 예>
num1	num2	result
3	4	12
27	19	513

<입출력 예 설명>
입출력 예 #1
num1이 3, num2가 4이므로 3 * 4 = 12를 return합니다.

입출력 예 #2
num1이 27, num2가 19이므로 27 * 19 = 513을 return합니다.
```

내 풀이 
```
function solution3(num1, num2) {
  var answer = 0;
  answer = num1 * num2 
  return answer;
}
```

<br/>

## 개인 풀이 문제 1 : 몫 구하기
```javascript
<문제 설명>
정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

<제한사항>
0 < num1 ≤ 100
0 < num2 ≤ 100

<입출력 예>
num1	num2	result
10	5	2
7	2	3

<입출력 예 설명>
입출력 예 #1
num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.

입출력 예 #2
num1이 7, num2가 2이므로 7을 2로 나눈 몫 3을 return 합니다.
```

내 풀이 
```
function solution(num1, num2) {
  return parseInt(num1 / num2);
}
```
문제점     
```
type number에 string이 들어가는 경우도 있기 때문에, 
소수점 이하를 절삭하여 정수 값을 return하려는 목적으로 
Math.floor 대신에 parseInt를 사용해서는 안 된다고함.   

(parsInt | MDN)    
parseInt는 BigInt 구문을 Number로 반환하므로 정확도를 잃습니다. 마지막 n 문자를 무시하기 때문입니다.
```

정답 풀이 
```
const solution = (num1, num2) => Math.floor(num1 / num2)

function solution(num1, num2) {
  return Math.trunc(num1 / num2);
}
```

알게된 내용 
```
//Math.trunc()는 소수 부분을 모두 버리고 정수만 리턴

const num11 = 10;
const num22 = 13.3;
const num33 = -13.3;
const numStrr = "13.3";

console.log(Math.trunc(num1)); //10
console.log(Math.trunc(num2)); //13
console.log(Math.trunc(num3)); //-13
console.log(Math.trunc(numStr)); //13



//Math.floor()는 소수 첫째 자리에서 버림하여 정수로 만듦
//버림이기 때문에 음수 -13.3은 -14가 됨 

const num1 = 10;
const num2 = 13.3;
const num3 = -13.3;
const numStr = "13.3";

console.log(Math.floor(num1)); //10
console.log(Math.floor(num2)); //13
console.log(Math.floor(num3)); //-14
console.log(Math.floor(numStr)); //13
```