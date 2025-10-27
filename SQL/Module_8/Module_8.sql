-- Lesson 1: GRANT Statement


-- 1. Create a new database called student_management.
CREATE DATABASE student_management;


-- 2. Create two tables in the database:
-- students: Stores information about students (id, name, age, grade).USE student_management;
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    grade VARCHAR(10)
);

-- teachers: Stores information about teachers (id, name, subject).
CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    subject VARCHAR(50)
);


-- 3. Create a user named teacher_user without any initial privileges.
CREATE USER 'teacher_user'@'localhost' IDENTIFIED BY 'password123';


-- 4. Write a query to grant SELECT and INSERT privileges to teacher_user on the students table.
GRANT SELECT, INSERT ON student_management.students TO 'teacher_user'@'localhost';


-- 5. Verify that teacher_user can now select and insert records in the students table but cannot delete or update any records.
SELECT * FROM student_management.students;
INSERT INTO student_management.students (name, age, grade)
VALUES ('John Doe', 16, '10th Grade');
DELETE FROM student_management.students WHERE id = 1;
UPDATE student_management.students SET grade = '11th Grade' WHERE id = 1;



-- *******************************************************


-- Lesson 2: REVOKE Statement

-- 1. Use the same database student_management.
USE student_management;


-- 2. Create another user called admin_user.
CREATE USER 'admin_user'@'localhost' IDENTIFIED BY 'adminpassword';


-- 3. Grant all privileges (SELECT, INSERT, UPDATE, DELETE) on both tables (students and teachers) to admin_user.
GRANT SELECT, INSERT, UPDATE, DELETE ON student_management.students TO 'admin_user'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON student_management.teachers TO 'admin_user'@'localhost';


-- 4. Verify that admin_user can perform all operations.
SELECT * FROM students;
INSERT INTO students (name, age, grade)
VALUES ('Jane Smith', 17, '11th Grade');
UPDATE students SET grade = '12th Grade' WHERE name = 'Jane Smith';
DELETE FROM students WHERE name = 'Jane Smith';


-- 5. Write a query to revoke the DELETE privilege from admin_user on the students table.
REVOKE DELETE ON student_management.students FROM 'admin_user'@'localhost';


-- 6. Verify that admin_user can no longer delete records from the students table but can still insert, update, and select records.SELECT * FROM students;
INSERT INTO students (name, age, grade)
VALUES ('John Doe', 16, '10th Grade');
UPDATE students SET grade = '11th Grade' WHERE name = 'John Doe';
DELETE FROM students WHERE name = 'John Doe';



-- *******************************************************


-- Lesson 3: Roles and Privileges

-- 1. Create a new role called student_role and assign it SELECT privileges on the students table.
CREATE ROLE 'student_role';
GRANT SELECT ON student_management.students TO 'student_role';


-- 2. Create a new user student_user and assign them the student_role.
CREATE USER 'student_user'@'localhost' IDENTIFIED BY 'studentpassword';
GRANT 'student_role' TO 'student_user'@'localhost';


-- 3. Verify that student_user can only view the records in the students table but cannot make any changes.
SELECT * FROM student_management.students;
INSERT INTO students (name, age, grade) VALUES ('Test User', 18, '12th Grade');
UPDATE students SET grade = '11th Grade' WHERE name = 'Test User';
DELETE FROM students WHERE name = 'Test User';


-- 4. Modify the student_role to also include INSERT privileges on the students table.
GRANT INSERT ON student_management.students TO 'student_role';


-- 5. Verify that student_user can now insert new records but still cannot delete or update them.
INSERT INTO students (name, age, grade)
VALUES ('Test User', 18, '12th Grade');
UPDATE students SET grade = '11th Grade' WHERE name = 'Test User';
DELETE FROM students WHERE name = 'Test User';