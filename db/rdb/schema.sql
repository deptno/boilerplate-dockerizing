create schema if not exists example;
comment on schema example is 'example schema';

create table if not exists example.table0
(
  id        text  not null primary key
, create_at timestamp default current_timestamp not null
);
comment on table example.table0 is 'table0 table';
comment on column example.table0.id is 'id column';
comment on column example.table0.create_at is 'create_at column';

---
insert into
  example.table0
values
  ('고양이')
, ('강아지')
;