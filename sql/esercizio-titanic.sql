-- Display female passengers who survived and are older than 30.
-- Find the average age of men who didn't survive.
-- Display information for passengers who spent between $20 and 
-- $50 on their tickets and got on the ship at port 'C'."
-- Find the total number of the survivors in the first class.
-- . Show the information of passengers who boarded from Cherbourg (port 'C')
--  and spent more than $75 on their tickets.".

-- TASK 1

SELECT * FROM titanic WHERE sex = 'female' AND age > 30

-- TASK 2

SELECT AVG(age) FROM titanic
WHERE sex = 'male' and survived = 0

-- TASK 3

SELECT * FROM titanic WHERE fare  > 20 and fare < 50 AND embarked = 'C'

-- TASK 4

SELECT COUNT(passengerid)
FROM titanic WHERE survived = 1
and pclass = 1

-- TASK 5

SELECT * FROM titanic WHERE embarked = 'C' and fare > 75