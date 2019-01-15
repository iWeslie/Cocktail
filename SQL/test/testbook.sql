-- define a S-T mode for Wang
CREATE SCHEMA "S-T" AUTHORIZATION Wang
GO
-- define a TEST mode for Zhang and allocate a table
CREATE SCHEMA TEST AUTHORIZATION Zhang
CREATE TABLE Tab1 (COL1 SMALLINT,
                   COL2 INT,
                   COL3 CHAR(20),
                   COL4 NUMERIC(10, 3),
                   COL5 DECIMAL(5, 2)
                  )
GO

-- delete mode in cascade
DROP SCHEMA Zhang CASCADE
GO

CREATE TABLE Student
(
    Sno     CHAR(9) PRIMARY KEY,
    Sname   CHAR(2) UNIQUE,
    Sage    SMALLINT,
    Sdept   CHAR(20)
);
GO

-- create a table Course
CREATE TABLE Course
(
    Cno     CHAR(4) PRIMARY KEY,
    Cname   CHAR(40),
    Cpno    CHAR(4),
    Ccredit SMALLINT,
    FOREIGN KEY (Cpno) REFERENCES Course(Cno)
);
GO

CREATE TABLE SC
(
    Sno     CHAR(9),
    Cno     CHAR(4),
    Grade   SMALLINT,
    PRIMARY KEY (Sno, Cno),
    FOREIGN KEY (Sno) REFERENCES Student(Sno),
    FOREIGN KEY (Cno) REFERENCES Course(Cno)
);
GO

-- set path for search
SET search_path TO "S-T", PUBLIC;

-- add date typed "time" for Student
ALTER TABLE Student ADD S_entrance DATE;

-- modify column attribute to integer
ALTER TABLE Student ALTER COLUMN Sage INT;

-- add restrict
ALTER TABLE Course ADD UNIQUE(Cname);

-- delete table in cascade
DROP TABLE Student CASCADE;

CREATE VIEW IS_Student
AS
    SELECT Sno, Sname, Sage
    FROM Student
    WHERE Sdept = 'IS';

-- cannot drop Student because other objects depend on it
DROP TABLE Student RESTRICT;

-- delete table with view
DROP TABLE Student CASCADE;
-- notice: drop cascades to view IS_Student
SELECT * FROM IS_Student;
-- error: relation "IS_Student" does not exsit
GO

-- create a index
-- create indexes for three tables
CREATE UNIQUE INDEX Stusno ON Student(Sno);
CREATE UNIQUE INDEX Soucno ON Course(Cno);
CREATE UNIQUE INDEX SCno ON SC(Sno ASC, Cno DESC);

-- alter sc's SCno to SCSno
ALTER INDEX SCno RENAME TO SCSno;

-- delete index
DROP INDEX Stusname;

SELECT Sno, Sname
FROM Student;
GO

SELECT Sname, 'Year of Birth:', 2014-Sage, LOWER(Sdept)
FROM Student;
GO

SELECT Sname NAME, 'Year of Birth:' BIRTH,
    2014-Sage BIRTHDAY, LOWER(Sdept) DEPARTMENT
FROM Student;
GO

-- remove repeated row
SELECT DISTINCT Sno
FROM SC;

WHERE Sdept='CS', Sage < 20;
WHERE Sage NOT BETWEEN 20 AND 30;
WHERE Sdept IN ('CS', 'MA', 'IS');

-- LIKE string match
-- % any length string, _ any character
WHERE Sno LIKE '201215121'
-- equals
WHERE Sno = '201215121'
WHERE Sname LIKE '刘%'
WHERE NAME LIKE '陈__'

-- escape character
WHERE Cname LIKE 'DB\_Design' ESCAPE '\ ';

-- nullable value query
WHERE Grade IS NULL
WHERE Sdept='CS' AND Sage<20
WHERE Sdept='CS' OR Sdept='MA' OR Sdept='IS';

WHERE Cno='3'
ORDER BY Grade DESC;

SELECT * FROM Student
ORDER BY Sdept, Sage DESC;

-- calculae count
SELECT COUNT(*)
FROM Student

SELECT AVG(Grade)
SELECT MAX(Grade)
SELECT SUM(Ccredit)

SELECT Cno, COUNT(Sno)
FROM SC
GROUP BY Cno

SELECT Sno
FROM SC
GROUP BY Sno
HAVING COUNT(*)>3

SELECT Sno, AVG(Grade)
FROM SC
GROUP BY Sno
HAVING AVG(Grade)>=90;

SELECT Student.*, SC.*
FROM Student, SC
WHERE Student.Sno = SC.Sno;

-- natural join
SELECT Student.Sno, Sname, Ssex, Sage, Sdept, Cno, Grade
FROM Student, SC
WHERE Student.Sno = SC.Sno
SELECT Student.Sno, Sname, Ssex, Sage, Sdept, Cno, Grade
FROM Student LEFT OUT JOIN SC ON
    (Student.Sno = SC.Sno)

SELECT Student.Sno, Sname
FROM Student, SC
WHERE Student.Sno = SC.Sno AND SC.Cno='2' AND SC.Grade>90

SELECT FIRST.Cno, SECOND.Cpno
FROM Course FIRST, Course SECOND
WHERE FIRST.Cpno = SECOND.Cno

-- multiple tables
SELECT Student.Sno, Sname, Cname, Grade
FROM Student, SC, Course
WHERE Student.Sno = SC.Sno AND SC.Cno = Course.Cno

-- nested
SELECT Sname FROM Student
WHERE Sno IN
            (
                SELECT Sno FROM SC
                WHERE Cno='2'
            )

SELECT Sno, Sname, Sdept FROM Student
WHERE Sdept IN
            (
                SELECT Sdept FROM Student
                WHERE Sname='someone'
            )

-- self join
SELECT S1.Sno, S1.Sname, S1.Sdept FROM Student S1, Student S2
WHERE S1.Sdept = S2.Sdept AND S2.Sname='someone'

SELECT Sno, Sname FROM Student
WHERE Sno IN
(
    SELECT Sno FROM SC
    WHERE Cno IN
    (
        SELECT Cno FROM Course
        WHERE Cname='system'
    )
)

-- join query
SELECT Sno, Sname FROM Student, SC, Course
WHERE Student.Sno = SC.Sno AND
    SC.Cno = Course.Cno AND
    Course.Cname = 'system'

-- get a tuple x from SC and pass it to inner query
SELECT Sno, Cno FROM SC x
WHERE Grade >=(SELECT AVG(Grade) FROM SC y
               WHERE y.Sno = x.Sno)

SELECT Sname, Sage FROM Student
WHERE Sage < ANY (SELECT Sage FROM Student
                  WHERE Sdept='CS')
AND Sdept <> 'CS'

SELECT Sname, Sage FROM Student
WHERE Sage < (SELECT MAX(Sage) FROM Student
              WHERE Sdept='CS')
AND Sdept <> 'CS'

SELECT Sname FROM Student
WHERE EXISTS (SELECT * FROM SC
              WHERE Sno=Student.Sno AND Cno='1')

SELECT Sno, Sname, Sdept FROM Student S1
WHERE EXISTS (SELECT * FROM Student S2
              WHERE S2.Sdept=S1.Sdept AND S2.Sname='someone')

SELECT Sname FROM Student
WHERE NOT EXISTS
(
    SELECT * FROM Course
    WHERE NOT EXISTS
    (
        SELECT * FROM SC
        WHERE Sno=Student.Sno AND Cno=Course.Cno
    )
)

SELECT * FROM Student
WHERE Sdept='CS'
UNION -- automatically remove repeated item
SELECT * FROM Student
WHERE Sage<=19
-- UNION
-- INTERSECT
-- EXCEPT

-- insert
INSERT INTO Student(Sno, Sname, Ssex, Sdept, Sage)
VALUES ('201215128', 'weslie', 'male', 'IS', 18)

INSERT INTO SC(Sno, Cno)
VALUES ('201215128', '1')

CREATE TABLE Dept_age
(
    Sdept   CHAR(15),
    Avg_age SMALLINT
)
INSERT INTO Dept_age(Sdept, Avg_age)
SELECT Sdept, AVG(Sage) FROM Student
GROUP BY Sdept;
GO

-- modify value
UPDATE Student
SET Sage=22
WHERE Sno='201234567'

UPDATE SC
SET Grade=0
WHERE Sno IN
(
    SELECT Sno FROM Student
    WHERE Sdept='CS'
)

-- delete
DELETE FROM Student
WHERE Sno='23456789'

DELETE FROM SC
