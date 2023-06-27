# 🎞️ 인스타st 갤러리 프로젝트

지금까지 배운 모든 개념을 활용하여 인스타그램st 의 간단한 갤러리를 만듭니다.

## ❍ 목표

- 실제 동작하는 간단한 멀티페이지 웹 어플리케이션을 개발할 수 있다.
- 백엔드와 데이터를 주고받기 위한 axios로 REST API 통신을 능숙하게 다룰 수 있다.

## ❍ project stack

- React Router ([react-router-dom@6](https://reactrouter.com/docs/en/v6/getting-started/installation))
- Styled Components ([styled-components](https://styled-components.com/docs/basics#installation))
- Axios ([axios](https://axios-http.com/kr/docs/intro))

## ❍ 완성본 미리보기

> 접속해서 직접 기능을 사용해볼 수 있습니다.

https://fe-final-gallery-project.pages.dev/

## ❍ 기능

아래 기능을 모두 준수하도록 구현합니다.

1. REST API를 사용하여 여러가지 이미지를 불러와 화면에 표시합니다.
2. 이미지를 클릭하면, REST API를 사용하여 해당 이미지에 달린 댓글 목록을 불러와 사용자에게 표시합니다.
3. REST API를 사용하여 댓글을 새로 작성할 수 있습니다.
4. REST API를 사용하여 댓글을 삭제할 수 있습니다.

# 🎯 필수 구현 사항

![](./example.jpg)

1. 전체 이미지의 개수를 출력합니다.
2. 여러 이미지들을 Grid 형태로 이미지, 제목, 설명을 함께 표시합니다.
3. 여러 이미지 중 하나를 클릭하면 상세한 이미지 정보와 댓글 목록을 확인할 수 있는 페이지 (2번째 사진)로 이동합니다.
4. 댓글을 작성할 수 있습니다.
5. 댓글 목록을 표시합니다.
6. 삭제 버튼을 클릭하면 해당 댓글을 삭제하고, 댓글 목록을 다시 불러옵니다.

## ❍ 선택 구현 사항

![](./more.jpeg)

- 기타 디자인과 레이아웃은 원본과 요구사항과 크게 다르지 않은 범위에서 **원하는대로** 만드셔도 좋습니다.
- 잘못된 경로로 접속할 시 띄울 에러 페이지와 뒤로가기 버튼을 만들어봅시다.
- 게시글에 달린 총 댓글 개수를 띄워봅시다.

## ❍ 실습 방법
1. 본 레포의 링크 fork
2. fork한 본인의 레포로 이동해 링크 복사
3. vscode를 처음 실행하면 보이는 `Git 리포지토리 복제...` 선택
4. 복사했던 링크 붙여넣고 저장할 위치 선택
5. 클론받은 폴더를 열어 개발 시작

## ❍ API

요청을 위한 호스트 정보와 문서는 아래와 같습니다.

- **HOST**: https://gallery.jmoomin.com
- **DOCS** : http://43.201.95.115:8080/swagger-ui/index.html#/GalleryController

## 참고자료

- [React Router v6 공식문서 (영어)](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
- [Velopert님의 RR v6 튜토리얼 (한국어)](https://velog.io/@velopert/react-router-v6-tutorial)
- [REST API가 무엇인가요? (한국어)](https://hudi.blog/rest-api/)
- [Axios 공식문서 (한국어)](https://axios-http.com/kr/docs/intro)
- [Axios 러닝 가이드 (한국어)](https://yamoo9.github.io/axios/guide/usage.html#get-%EC%9A%94%EC%B2%AD)

## ❍ 완성한 코드

- https://github.com/Likelion-Inha-11/fe-final-gallery-project-complete

> 예제 코드는 과제 중 자유롭게 참고 가능하지만, 최대한 본인의 힘으로 해결하려 노력합시다 😇

# ⏰ 과제 제출 방법

> 마감: 7월 9일 23:59 까지 (마지막 커밋 시간으로 확인)

1. 원래 적혀있던 리드미 내용을 전부 삭제
2. 제대로 동작하는지 확인하기 위한 `동작 영상`을 리드미에 첨부, 10mb가 넘으면 첨부가 안되므로 나누거나 용량 줄이기
3. 느낀점, 어려웠던점, 설계에 특별히 신경쓴 부분 등 자유롭게 `고찰 및 결과` 작성 (분량 제한 없음)
4. 레포 링크를 lionz에 업로드
