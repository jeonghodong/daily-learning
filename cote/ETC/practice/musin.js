const input = `2,5
Nike,3
S,170,70,70,150,20,20
M,180,80,80,160,30,30
L,190,90,90,170,40,40
Adidas,2
S,170,70,70,150,20,20
M,180,80,80,160,30,30
Nike,160,50,50
Nike,160,50,50
Adidas,160,50,50
Nike,160,50,50
Adidas,160,50,50`

// Gemini said
// 제시해주신 입력 데이터는 **"브랜드별 사이즈 스펙(참조 데이터)"**과 "고객의 신체 치수(쿼리 데이터)" 두 부분으로 명확하게 나뉘어 있습니다.

// 코딩 테스트(알고리즘 문제) 관점에서 가장 효율적인 자료구조와 파싱(Parsing) 전략을 정리해 드립니다.

// 1. 추천 자료구조: Object(Hash Map) + Array
// 브랜드 이름을 통해 즉시 해당 브랜드의 사이즈 표를 찾을 수 있어야 하므로 Key-Value 구조가 가장 적합합니다.

// 최종 변환 형태 (JSON 예시)
// JSON
// {
//   "catalog": {
//     "Nike": [
//       { "name": "S", "specs": [170, 70, 70, 150, 20, 20] },
//       { "name": "M", "specs": [180, 80, 80, 160, 30, 30] },
//       ...
//     ],
//     "Adidas": [ ... ]
//   },
//   "requests": [
//     { "brand": "Nike", "values": [160, 50, 50] },
//     { "brand": "Nike", "values": [160, 50, 50] },
//     ...
//   ]
// }
// 이 구조의 장점
// 검색 속도: catalog["Nike"]로 브랜드 데이터에 $O(1)$로 접근 가능합니다. (배열로 관리하면 매번 브랜드를 찾아 루프를 돌려야 하므로 $O(N)$이 됨).

// 순회 용이성: 특정 브랜드의 사이즈 목록(specs)은 배열로 되어 있어 for문이나 map, reduce 등을 사용해 "가장 차이가 적은 사이즈 찾기" 같은 로직을 수행하기 좋습니다.

// 2. 자바스크립트 구현 코드
// 입력값이 줄바꿈(\n)과 쉼표(,)로 구분되어 있으므로 이를 처리하는 로직입니다.

// JavaScript
// const input = `2,5
// Nike,3
// S,170,70,70,150,20,20
// M,180,80,80,160,30,30
// L,190,90,90,170,40,40
// Adidas,2
// S,170,70,70,150,20,20
// M,180,80,80,160,30,30
// Nike,160,50,50
// Nike,160,50,50
// Adidas,160,50,50
// Nike,160,50,50
// Adidas,160,50,50`;

// function solution(str) {
//   // 1. 줄 단위로 분리하고 공백 제거 (빈 줄 방지)
//   const lines = str.trim().split('\n');
  
//   // 현재 읽고 있는 줄의 위치를 가리키는 포인터
//   let lineIdx = 0;

//   // 2. 첫 줄 파싱 (브랜드 수 N, 요청 수 M)
//   const [N, M] = lines[lineIdx++].split(',').map(Number);

//   // 3. 데이터 구조 초기화
//   const catalog = {}; // 브랜드 정보를 담을 객체 (Hash Map 역할)
//   const requests = []; // 요청 정보를 담을 배열

//   // 4. 브랜드 정보 파싱 (N번 반복)
//   for (let i = 0; i < N; i++) {
//     const [brandName, sizeCount] = lines[lineIdx++].split(',');
//     catalog[brandName] = []; // 해당 브랜드의 사이즈 배열 초기화

//     // 사이즈 정보 파싱 (sizeCount번 반복)
//     for (let j = 0; j < Number(sizeCount); j++) {
//       const parts = lines[lineIdx++].split(',');
//       const sizeName = parts[0];
//       // 나머지 숫자들은 정수 배열로 변환
//       const specs = parts.slice(1).map(Number);
      
//       catalog[brandName].push({ name: sizeName, specs });
//     }
//   }

//   // 5. 요청 정보 파싱 (M번 반복)
//   for (let i = 0; i < M; i++) {
//     const parts = lines[lineIdx++].split(',');
//     const targetBrand = parts[0];
//     const targetValues = parts.slice(1).map(Number);
    
//     requests.push({ brand: targetBrand, values: targetValues });
//   }

//   return { catalog, requests };
// }

// // 실행 및 확인
// const parsedData = solution(input);
// console.log("1. 나이키 S 사이즈 스펙:", parsedData.catalog['Nike'][0].specs);
// console.log("2. 첫 번째 요청:", parsedData.requests[0]);
// 3. 코딩 테스트 팁 (포인트)
// 포인터 활용 (lineIdx): shift()를 사용해 배열 앞부분을 잘라내며 진행할 수도 있지만, 배열이 클 경우 성능 저하가 발생할 수 있습니다. 위 코드처럼 인덱스(lineIdx)를 하나씩 증가시키며 읽는 방식이 메모리와 속도 면에서 더 안전합니다.

// 숫자 변환 (map(Number)): 입력받은 데이터는 기본적으로 문자열("170")입니다. 계산을 위해 반드시 Number로 변환해 저장해야 나중에 +, -, > 비교 연산 시 버그가 생기지 않습니다.

// 데이터 불일치 주의: 현재 데이터에서 브랜드 스펙은 숫자가 6개인데, 요청 데이터는 숫자가 3개입니다.

// 실제 로직을 짤 때 catalog의 specs 배열 중 앞의 3개만 비교할지, 특정 인덱스를 비교할지 문제 조건을 잘 확인해야 합니다.

// 이 구조로 변환해 두시면, 이후 어떤 복잡한 로직(예: 최소 오차 제곱합 구하기 등)이 나와도 쉽게 접근하실 수 있습니다.