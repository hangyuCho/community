# 처음이신분

```bash
$ npm install
$ npm run dev
```

# .env.example

```bash
$ cp .env.example .env
$ vim .env
```

이후 mysql 정보를 넣고 저장합니다.

# Create Database
```bash
$ yarn db:create
```

# migration
### migration 생성
```bash
$ npx sequelize-cli migration:generate --name {migration name}
```

### migrate
```bash
$ npx sequelize-cli db:migrate 
```

### add-column
```javascript
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('categories', 'test', Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('categories', 'test');
  },
};

```

# auto create db after started node app

(link)[https://www.it-swarm.dev/fr/sequelize.js/sequelize-create-database/1055016586/]

# seeder
### seeder 생성
```bash
$ npx sequelize-cli seed:generate --name ${name!!}  
```
### 데이터 주입
```bash
 $ yarn db:seed:all 
```

### 데이터 삭제
```bash
 $ yarn db:seed:undo:all 
```

# Test
```bash
$ yarn test or npm run test
```
> src/test

# 기본적인 sequelize-cli

### package.json 참조
```bash
...

"db:migrate": "npx sequelize-cli db:migrate",
"db:migrate:undo:": "npx sequelize-cli db:migrate:undo",
"db:migrate:undo:all": "npx sequelize-cli db:migrate:undo:all",
"db:seed:all": "npx sequelize-cli db:seed:all ",
"db:seed:undo:all": "npx sequelize-cli db:seed:undo:all"

...
```

### 특정 seed
```bash
$ npx sequelize-cli db:seed: --seed name-of-seed-as-in-data
```

### 특정 migration 실행시키기 (undo도 동일)
특정마이그레이션만 실행시킬 수 있고...
```bash
$ sequelize db:migrate --name 20200409091823-example_table.js
```
순서도 바꿀수있고
```bash
$ npx sequelize-cli db:migrate --from 20170316142544-create-an-index.js --to 20170421112638-do-some-refactor.js
```