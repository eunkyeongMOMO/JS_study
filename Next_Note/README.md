pg |데이터베이스와 인터페이스하기 위한 nodeJs 모듈모음
typeorm | js,ts와 함께 사용 할 수 있는 NOdeJS에서 실행되는 ORM입니다.

bxryptls | 비밀번호를 암호화해서 데이터 베이스에 저장.
claaa-walldator | 데코레이터를 이용해서 요청에서 오는 오브젝트의 프로퍼티를 검증하는 라이브러리 (유효성검사)

class-transfomer | 일반 개체를 클래의 일부 인스턴스로 또는 그반대로 변환 할 수 있습니다.


version: "3"
services:
    db:
        image: postgres:latest
        container_name: reddit-postgres
        restart: always
        ports:
            - "5432:5432"
        environment: //환경변수 사용
            POSTGRES_USER: "${DB_USER_ID}"
            POSTGRES_PASSWORD: "${DB_USER_PASSWORD}"
        volumes: //컨테이너 삭제해도 데이터 백업해놓기 위해 사용
            - ./data:/var/lib/postgresql/data

도커 실핼 - docker compose up 
켜켜져있는 로컬 서버 끔 - pklii node


class-transformer 리터럴 객체 -> 를래스 인스턴스 / 클래스 인스턴스 -> 리터럴객체 로 변환해주는 것.
plainToInstance  / intanceToPlain

