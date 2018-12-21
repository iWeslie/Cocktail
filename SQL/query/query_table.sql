USE Music; 
SELECT column_name, data_type, character_maximum_length, is_nullable 
FROM INFORMATION_SCHEMA.COLUMNS
WHERE table_name = 'Artists';
