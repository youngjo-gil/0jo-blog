---
title: "커링"
date: "2024-01-29"
category: ["JavaScript"]
summary: "함수형 프로그래밍에서 활용가능한 커링에 대해 알아보자"
slug: "currying-patterns"
---

## 서론

실제로 여러 언어들이 가진 각 언어의 패러다임을 접하면서 JavaScript의 함수형 프로그래밍을 조금 더 깊게 공부해보고 싶었고 이에 대한 실제 활용 방법을 접하는 와중에 *[커링](https://ko.wikipedia.org/wiki/%EC%BB%A4%EB%A7%81)*에 대해 접하게 되었고 정리해보려고 한다.

## 그래서 커링이란?

> 컴퓨터 과학에서 **커링** 이란 다중 인수 (혹은 여러 인수의 튜플)을 갖는 함수를 단일 인수를 갖는 함수들의 함수열로 바꾸는 것을 말한다 - 위키백과
> 

커링은 아래 설명할 자바스크립트 뿐만 아니라 다른 언어에도 존재한다. 복잡한 함수를 간단하고 재사용 가능한 여러 함수로 분해하는 개념이다. 커링을 사용하면 함수의 인자를 하나씩 적용할 수 있으며, 각 단계에서 새로운 함수를 반환한다.

즉, 일반적으로 한 번에 모든 인자를 가진 함수를 리턴하는 것과 달리 첫 번째 인자를 통해 새로운 함수를 반환하고, 두 번째 인자로 새로운 함수를 반환하고… 이 과정을 반복하고 모든 전달 인자가 완료될때까지 실행된다.

## JavaScript에서의 커링

가장 일반적인 예시로 각 인자의 더하기를 출력하는 add 함수에 대한 예시를 살펴보자.

```jsx
function add(a) {
	return function(b) {
		return a + b;
	};
}

const addFive = add(5);

console.log(addFive(3)); // 8
console.log(addFive(10)); // 15
```

- `add` 함수는 하나의 인자 `a` 를 받고 다른 함수를 반환한다.
- 반환된 함수는 또 다른 인자 `b` 를 받아 `a` 와 `b` 를 더한다.
- `add(5)` 는 `5` 와 더하는 함수를 반환하고 이 함수에 다른 숫자를 넘겨 최종 값을 반환한다.

위 기본적인 예시를 토대로 실제 개발을 하면서 활용할 수 있는 여러가지 예시에 대해 살펴보자.

1. **객체의 특정 키 값을 추출하는 함수**

```jsx
const getProps = key => obj => obj[key];

const getName = getProps('name');
const users = [
	{name: 'Kim'},
	{name: 'Lee'},
	...
]

const names = users.map(getName);
console.log(names); // ['Kim', 'Lee', ...]
```

- **`getProps` 함수는 객체에서 키에 해당하는 값을 추출**
- **`getName`** 함수는 **`getProps`** 함수를 'name' 키에 대해 커링
- 배열의 각 객체에서 'name' 값 추출

1. **조건에 따라 배열 필터링**

```jsx
const filterBy = key => value => array => array.filter(obj => obj[key] === value);

const filterByType = filterBy('type');

const products = [
	{ type: 'fruit', name: 'apple' },
	{ type: 'vegetable', name: 'carrot' },
	{ type: 'fruit', name: 'banana' }
	...
];

const fruits = filterByType('fruit')(products);
console.log(fruits); // [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }]
```

- **`filterBy`** 함수는 특정 키와 값을 기준으로 배열의 요소를 필터링

1. **로그 함수 활용 ([ko.javascript.info](https://ko.javascript.info/currying-partials) 인용)**

→ 활용방법에 대한 리서칭 중에 찾은 ko.javascript.info에서 실제 로그 함수를 처리하는 좋은 사례가 있어서 함께 기록해두려고 한다.

```jsx
// 커링 적용 전
// 로그 함수 실행시 전달받은 세개의 인자를 alert창으로 띄운다.
function log(date, importance, message) {
  alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

// 커링 적용 후
const log = date => importance => message => 
	alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
```

- 첫 번째 호출에서 날짜를 전달받고 `importance` 를 인자로 받는 함수 반환, 현재 단계에서 `date` 객체 저장
- 두 번째 호출에서 로그의 중요도 전달받고 `message` 를 인자로 받는 또 다른 함수 반환, 현재 단계에서 `date` 와 `importance` 가 저장
- 세 번째 호출에서 메시지를 받는다. 최종 로그 문자열을 alert으로 출력

위 로그 함수를 실제 활용 예시

```jsx
const todayLog = log(new Date());
const todayErrorLog = todayLog('ERROR');

todayErrorLog('This is an error message);
```

## 마치면서

실제 프로젝트의 규모가 커지면서 하나의 함수가 여러 사람의 손을 거치면서 말도 안되는 여러개의 인자를 전달받는 함수로 나도 모르는새에 변경되어 있는 사례를 경험하곤한다. 실제 위와 같은 커링을 사용하면 각 인자에 대한 실제 책임의 경우를 가독성있게 판별할 수 있고 재사용 설계에 대한 활용을 통해 코드를 효율적으로 관리할 수 있을 것이라고 생각한다.