# SQL Commands

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






