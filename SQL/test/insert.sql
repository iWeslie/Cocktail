-- Insert rows into table 'Employees'
INSERT INTO Employees
    ([EmployeesId], [Name], [Location])
VALUES
    ( 2, N'Nikita', N'India'),
    ( 1, N'Jared', N'Australia'),
    ( 3, N'Tom', N'Germany'),
    ( 4, N'Jake', N'United States')   
GO
-- Query the total count of employees
-- Select rows from a Table or View 'Employees' in schema 'dbo'
SELECT COUNT(*) FROM dbo.Employees
-- Query all employee information 
-- Select rows from a Table or View 'Employees' in schema 'dbo'
SELECT e.EmployeesId, e.Name, e.Location 
FROM dbo.Employees as e 
GO