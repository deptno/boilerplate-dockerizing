# boilerplate-dockerizing

윈도우랑 맥이랑 번갈아서 개발하니 라이브러리 종속성 문제가 발생.  
환경 docker 기반으로 통일하고자 함.  

### 실행
```shell script
docker-compose up --build
```

### db/rdb/schema.sql 변경시 디비 초기화
```
docker-compose rm
sudo rm -rf .volatile/pgdata
```

### todo
- [x] hmr
- [x] docker runtime
