---
title: "React Design 패턴"
date: "2024-01-03"
category: ["React"]
summary: "리액트 다양한 디자인 패턴에 대해 알아보자"
slug: "react-design-patterns"
---


개발을 하다보면 애플리케이션의 규모가 커질수록 코드가 복잡해짐과 동시에 더욱 효율적인 개발, 구축에 대한 고민을 자연스럽게 할 수 밖에 없고 나아가 유지보수까지 생각하다보면 컴포넌트 단위 활용이 중요하다는 것을 깨닫게 된다. 컴포넌트를 어떻게 구성하고 어떤 방식으로 활용해야 할지에 대한 고민은 자연스럽게 디자인 패턴의 배경 지식이 필요하다.

### **1\. Presentational & Container Component 패턴**

- **Presentational 컴포넌트**
  - 화면에 보여지는 부분을 담당
  - UI의 일부분을 나타내고 직접 상태 관리를 하지 않는다.
  - props를 통해 데이터, 콜백 함수를 받아온다.
- **Container 컴포넌트**
  - 어떻게 동작하는지에 대한 부분을 담당
  - 데이터를 가져오고 상태를 관리하고 액션을 처리한다.
  - 결과를 Presentational 컴포넌트에 전달하여 UI로 표현하도록 한다.

#### **예시**

```
// Presentational Component
function UserList({ users }) {
	return (
    	<ul>
        	{users.map(user => (
            	<li key={user.id}>
                	{user.name}
                </li>
            ))}
        </ul>
    );
}

// Cotainer Component
function UserListContainer() {
	const [users, setUsers] = useState([]);

    useEffect(() => {
    	fetchUsers()
        	.then(usersFromApi => setUsers(usersFromApi));
    }, []);

    return <UserList users={users} />;
}
```

#### **디렉토리 구조**

Presentational & Container Component Pattern을 사용할 때, 가장 보편적인 두 가지 방식을 정리해보려 한다.

1\. Type별 분류 : 컴포넌트 타입에 따라 분류, **Presentational 컴포넌트를 한 폴더**에, **Container 컴포넌트를 한 폴더**에 위치시킨다.

```
src/
├── components/       # Presentational Components
│   ├── Button.js
│   ├── List.js
│   └── ...
├── containers/       # Container Components
    ├── UserList.js
    └── ...
```

2\. Feature별 분류 : 기능 (도메인)별 파일 분류, 각 기능 폴더 내에 **해당 기능과 관련된 Presentational, Container 컴포넌트를 함께** 위치시킨다.

```
src/
├── user/             # Feature Folder
│   ├── UserList.js    # Container Component
│   ├── UserItem.js    # Presentational Component
│   └── ...
├── product/          # Another Feature Folder
    └── ...
```

#### **장점**

- 재사용성 : Presentational 컴포넌트는 독립적으로 재사용이 가능, 다양한 Container에서 사용할 수 있다.
- 가독성 : 각각의 책임이 명확하기 때문에 코드 읽기가 쉽습니다.

#### **단점**

- 오버 엔지니어링 : 작거나 간단한 애플리케이션에서 오버 엔지니어링으로 이어질 가능성이 있다.
- 컴포넌트 간 중복 : 비슷한 기능을 가진 컴포넌트 간 상태 관리 로직이 중복될 가능성이 있다.

최근에는 Funciton Component와 Hooks 도입으로 Container 컴포넌트 역할이 애매모호 해졌다. 이로인해 Presentational & Container Component Pattern의 중요성은 약간 떨어졌지만, 여전히 널리 사용되고 있는 패턴 중 하나이다.

---

### **2.  Custom Hooks 패턴**

이 패턴은 기본적인 React Hooks를 조합하여 새로운 함수를 만드는 방식이다. 이렇게 하면 로직을 재사용하고, 코드의 가독성과 유지보수를 높일 수 있다.

#### **예시**

```
import { useState, useEffect } from 'react';

function useFetch(url) {
	const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    	const fetchData = async () => {
        	setLoading(true);

            try {
            	const response = await fetch(url);
                const data = await response.json();

                setData(data);
            } catch (error) {
            	console.error(error);
            }

            setLoading(false);
        };

        fetchData();
    }, [url]);

    return { data, loading };
}

// 사용 컴포넌트
function Component() {
	const { data, loading } = useFetch('https://api.example.com');

    if(loading) return <div>Loading...</div>

    return <div>{JSON.stringfy(data)}</div>
}
```

위 코드에서 useFetch는 Custom Hook으로 주어진 URL에서 데이터를 fetch하고 그 결과와 로딩 상태를 반환한다. 이런식으로 설계하면 동일한 데이터 fetching 로직을 여러 컴포넌트에서 재사용할 수 있다.

#### **디렉토리 구조**

```
src/
├── hooks/            # Custom Hooks
│   ├── useFetch.js
│   └── ...
├── components/
│   ├── Component.js
│   └── ...
├── App.js
└── index.js
```

위 디렉토리 구조에서 hooks 폴더는 Custom Hooks 가 위치한다. 각각 Hook은 필요한 컴포넌트해서 import하여 사용한다.

#### **장점**

- 재사용성 : 같은 로직을 공유하는 여러 컴포넌트 사이에서 중복 코드 없이 해당 로직을 재사용할 수 있다.
- 분리 및 조직화 : 관련 코드 (상태, side effect 등)을 한 곳에 모아 분리하고 조직화 함으로 가독성과 유지보수성이 높아진다.

#### **단점**

- 추상화의 복잡성 : 너무 많은 로직이 Custom Hook 안에 있으면 해당 훅이 하는 일을 완전히 이해하기 어려울 수 있기 떄문에 적절한 수준의 추상화가 필요하다.
- 컴포넌트 간 상태 공유 제한 : 각각 컴포넌트 인스턴스는 자신만의 상태를 가지므로, 같은 Custom Hook을 사용하더라도 상태를 공유하지 않는다. 이를 해결하기 위해서 Context API나 Redux 와 같은 전역 상태관리 도구가 필요하다.

---

### **3\. Atomic Design 패턴**

Atomic Design은 Brad Frost가 제안한 디자인 시스템이다. 이 패턴은 자연의 화학 원소를 모방하여 UI컴포넌트를 구성하는 방법론이다. Atomic Design은 아래와 같이 5단계로 구성된다.

1.  Atoms : UI의 가장 기본적인 단위로, 버튼, 입력 필드, 타이틀 등 재사용 가능한 HTML 태그를 의미한다.
2.  Molecules : Atoms들을 조합하여 만든 더 복잡한 UI 요소이다. 예를 들어, 검색 폼 (molecule)은 검색 입력 필드(atom)와 검색 버튼(atom)으로 구성된다.
3.  Organisms : Molecules 또는 Atoms들을 조합하여 만든 상대적으로 복잡한 UI 요소이다. 헤더(organism)는 로고(atom), 네비게이션 메뉴(molecule), 그리고 검색 폼(molecule) 등으로 구성될 수 있다.
4.  Templates : Organisms와 Molecules와 Atoms를 조합하여 페이지 레이아웃을 정으한다.
5.  Pages : 실제 콘텐츠와 데이터가 적용된 Templates이다.

#### **디렉토리 구조**

```
src/
├── components/       # Atoms
│   ├── Button.js
│   ├── Input.js
│   └── ...
├── molecules/        # Molecules
│   ├── SearchForm.js
│   └── ...
├── organisms/        # Organisms
│   ├── Header.js
│   └── ...
├── templates/        # Templates
│   ├── MainTemplate.js
│   └── ...
├── pages/            # Pages
│   ├── HomePage.js
│   └── ...
├── App.js
└── index.js
```

#### **장점**

- 재사용성과 일관성 향상 : Atomic Design은 작은 단위에서 큰 단위로 재사용 가능한 컴포넌트를 조합하므로 코드 재사용성과 UI 일관성이 향상된다.
- 유지보수 용이 : 각 컴포넌트가 독립적인 기능을 수행하므로 유지보수 및 업데이트가 용이하다.

#### **단점**

- 디자인 리소스 : 디자인 시스템을 구축하기 위한 초기 비용 필요
- props drilling issue : 로직과 상태를 낮은 단위까지 공유해야 하기 떄문에 props drilling issue 발생 가능성이 있다.

Atomic Design 패턴은 대규모 프로젝트나 디자인 시스템을 구축할 때 유용하다. 이 패턴을 사용하면 재사용 가능한 컴포넌트 라이브러리를 효과적으로 구축하고 관리할 수 있다.
