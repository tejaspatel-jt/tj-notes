# SQL Commands

## 📌 DELETE
The `DELETE ` command is a Data Manipulation Language (DML) statement used to delete rows from a table.
- Key Points:
    - Use the `WHERE` clause to specify conditions for deletion.
    - Omitting the `WHERE` clause deletes all rows in the table.
    - Be cautious when using `DELETE`, especially without conditions, as it can result in unintended data loss.


### 1. Delete Specific Rows
You can delete specific rows from a table by using the `WHERE` clause to specify conditions.

#### Syntax
```sql
DELETE FROM table_name
WHERE condition;
```

#### Example
```sql
DELETE FROM employees
WHERE employee_id = 101;
```
This deletes the row where employee_id equals 101 from the employees table.

---

### 2. Delete Multiple Rows
You can delete multiple rows by specifying a condition that matches multiple rows.

#### Syntax
```sql
DELETE FROM table_name
WHERE condition;
```

#### Example
```sql
DELETE FROM employees
WHERE department = 'HR';
```
This deletes all rows where the department is 'HR' from the employees table.

---

### 3. Delete Rows Using BETWEEN
You can delete rows within a specific range using the `BETWEEN` operator.

#### Syntax
```sql
DELETE FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```

#### Example
```sql
DELETE FROM employees
WHERE employee_id BETWEEN 10 AND 20;
```
This deletes rows where employee_id is between 10 and 20 (inclusive)

---

### 4. Delete Rows Using IN
You can delete rows by specifying multiple values using the IN operator.

#### Syntax
```sql
DELETE FROM table_name
WHERE column_name IN (value1, value2, value3, ...);
```

#### Example
```sql
DELETE FROM employees
WHERE employee_id IN (101, 102, 103);
```
This deletes rows with employee_id values of 101, 102, and 103 from the employees table.

---

### 5. Delete All Rows in a Table
If no `WHERE` clause is specified, all rows in the table will be deleted.

#### Syntax
```sql
DELETE FROM table_name;
```

#### Example
```sql
DELETE FROM employees;
```
This deletes all rows from the employees table while retaining its structure.

---

### Summary of `Delete` Commands
| Operation                 	| Syntax Example                                                  	| Description 	|
|---------------------------	|-----------------------------------------------------------------	|-------------	|
| Delete Specific Rows      	| DELETE FROM employees WHERE employee_id = 101;              	|             	|
| Delete Multiple Rows      	| DELETE FROM employees WHERE department = 'HR';              	|             	|
| Delete Rows Using BETWEEN 	| DELETE FROM employees WHERE employee_id BETWEEN 10 AND 20;  	|             	|
| Delete Rows Using IN      	| DELETE FROM employees WHERE employee_id IN (101, 102, 103); 	|             	|
| Delete All Rows in Table  	| DELETE FROM employees;                                      	|             	|


==========================================

## 📌 UPDATE
The `UPDATE` command in SQL is a Data Manipulation Language (DML) command used to modify existing records in a table.

### 1. Update a Single Column (specific)
You can update the value of a single column for specific rows using the `SET` clause and a `WHERE` condition.

#### Syntax
```sql
UPDATE table_name
SET column_name = new_value
WHERE condition;
```

#### Example
```sql
UPDATE employees
SET salary = 50000
WHERE employee_id = 101;
```
This updates the salary column to 50000 for the employee with employee_id = 101.

---

### 2. Update Multiple Columns
You can update multiple columns in a single query by separating assignments with commas.

#### Syntax
```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

#### Example
```sql
UPDATE employees
SET salary = 60000, department = 'Finance'
WHERE employee_id = 102;
```
This updates both the salary and department columns for the employee with employee_id = 102.

---

### 3. Update All Rows in a Table
If no `WHERE` clause is specified, all rows in the table will be updated.

#### Syntax
```sql
UPDATE table_name
SET column_name = new_value;
```

#### Example
```sql
UPDATE employees
SET status = 'Active';
```
This sets the status column to 'Active' for all rows in the employees table.

---

### 4. Update Based on Another Table (Subquery)
You can use a subquery to update values based on data from another table.

#### Syntax
```sql
UPDATE table_name
SET column_name = (SELECT value FROM other_table WHERE condition)
WHERE condition;
```

#### Example
```sql
UPDATE employees
SET salary = (SELECT avg_salary FROM departments WHERE department_id = employees.department_id)
WHERE department_id IN (SELECT department_id FROM departments);
```
This updates the salary column of employees based on average salaries from their respective departments.

---

### 5. Conditional Update Using CASE Statement
You can use a `CASE` statement within an `UPDATE` query to apply conditional logic.

#### Syntax
```sql
UPDATE table_name
SET column_name = CASE 
    WHEN condition1 THEN value1 
    WHEN condition2 THEN value2 
    ELSE default_value 
END;
```

#### Example
```sql
UPDATE employees
SET bonus = CASE 
    WHEN performance_rating >= 5 THEN 1000 
    WHEN performance_rating >= 3 THEN 500 
    ELSE 0 
END;
```
This assigns bonuses based on performance ratings.

---

### 6. Update Using Joins
You can update values by joining two tables.

#### Syntax
```sql
UPDATE table1
SET table1.column_name = value
FROM table1 
JOIN table2 ON table1.common_column = table2.common_column
WHERE condition;
```

#### Example
```sql
UPDATE employees
SET salary = departments.avg_salary
FROM employees 
JOIN departments ON employees.department_id = departments.department_id;
```
This updates employee salaries based on average salaries from their respective departments.

---

==========================================

## 📌 ALTER
The ALTER command in SQL is a Data Definition Language (DDL) command used to modify the structure of an existing database object, such as a table.

### 1. Add a New Column
You can add a new column to an existing table using the `ADD` keyword.

#### Syntax
```sql
ALTER TABLE table_name
ADD column_name datatype;
```

#### Example
```sql
ALTER TABLE employees
ADD department_id INT;
``` 
This adds a new column department_id of type INT to the employees table

---

### 2. Drop a Column
You can remove an existing column using the `DROP COLUMN` keyword.
#### Syntax
```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

#### Example
```sql
ALTER TABLE employees
DROP COLUMN department_id;
```
This removes the department_id column from the employees table.

---

### 3. Modify a Column
You can change the data type or other properties of an existing column using the `MODIFY` or `ALTER COLUMN` keyword (depending on the database system).

#### Syntax
```sql
ALTER TABLE table_name
MODIFY column_name new_datatype;
```
or
```sql
ALTER TABLE table_name
ALTER COLUMN column_name new_datatype;
```

#### Example
```sql
ALTER TABLE books
ALTER COLUMN ISBN VARCHAR(50);
```
This changes the data type of the ISBN column in the books table to VARCHAR(50).

---

### 4. Rename a Column
You can rename an existing column using the `RENAME COLUMN` keyword.

#### Syntax
```sql
ALTER TABLE table_name
RENAME COLUMN old_column_name TO new_column_name;
```

#### Example
```sql
ALTER TABLE employees
RENAME COLUMN last_name TO family_name;
```
This renames the column last_name to family_name in the employees table.

---

### 5. Rename a Table
You can rename an entire table using the `RENAME TO` keyword.

#### Syntax
```sql
ALTER TABLE old_table_name
RENAME TO new_table_name;
```

#### Example
```sql
ALTER TABLE employees
RENAME TO staff;
```
This renames the table employees to staff.

---

### 6. Add Constraints
You can add constraints (like primary keys, foreign keys, or unique constraints) to an existing table using `ADD CONSTRAINT` keyword.

#### Syntax
```sql
ALTER TABLE table_name
ADD CONSTRAINT constraint_name constraint_type(column_name);
```

#### Example
```sql
ALTER TABLE employees
ADD CONSTRAINT pk_employee_id PRIMARY KEY (employee_id);
```
This adds a primary key constraint to the employee_id column in the employees table16.

---

### 7. Drop Constraints
You can remove constraints from an existing table using `DROP CONSTRAINT` keyword.

#### Syntax
```sql
ALTER TABLE table_name
DROP CONSTRAINT constraint_name;
```

#### Example
```sql
ALTER TABLE employees
DROP CONSTRAINT pk_employee_id;
```
This removes the primary key constraint from the employee_id column in the employees table.

---

#### Summary of Alter Command

| Operation       	| Command Syntax Example                                                        	| Description                                            	|
|-----------------	|-------------------------------------------------------------------------------	|--------------------------------------------------------	|
| Add Column      	| ALTER TABLE employees ADD age INT;                                            	| Adds a new column to a table.                          	|
| Drop Column     	| ALTER TABLE employees DROP COLUMN age;                                        	| Removes a column from a table.                         	|
| Modify Column   	| ALTER TABLE books ALTER COLUMN ISBN VARCHAR(50);                              	| Changes data type or properties of an existing column. 	|
| Rename Column   	| ALTER TABLE employees RENAME COLUMN last_name TO family_name;                 	| Renames an existing column.                            	|
| Rename Table    	| ALTER TABLE employees RENAME TO staff;                                        	| Renames an entire table.                               	|
| Add Constraint  	| ALTER TABLE employees ADD CONSTRAINT pk_employee_id PRIMARY KEY(employee_id); 	| Adds constraints like primary key or unique key.       	|
| Drop Constraint 	| ALTER TABLE employees DROP CONSTRAINT pk_employee_id;                         	| Removes constraints from a table.                      	|






