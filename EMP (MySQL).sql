create database Emp_backend;
use Emp_backend;

select*from employees_table;
select email,password from admin;
insert into admin(email,password)values('lavanyasargam','admin123');
delete from admin where email='lavanyasargam';
insert into admin(email,password)values('lavanyasargam2gmail.com','lavanya123');
insert into admin(email,password)values('lavanyasargam@gmail.com','lavanya12');
insert into admin(email,password)values('admin@gmail.com','admin');