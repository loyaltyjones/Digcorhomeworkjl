-- CREATE TABLE pokedex
-- -- sudo make actual postgres table here
-- INSERT INTO pokedex bulbasaur
-- INSERT INTO pokedex charmander
-- INSERT INTO pokedex squirtle


CREATE TABLE pokedex(
id SERIAL PRIMARY KEY,
name VARCHAR(50),
primary_type VARCHAR(50),
secondary_type VARCHAR(50),
evolutionary_stage VARCHAR(50),
region_of_origin VARCHAR(50),
height INTEGER,
weight INTEGER,
bst INTEGER
);


INSERT INTO pokedex(name, primary_type, secondary_type, evolutionary_stage, region_of_origin, height, weight, bst)
VALUES
('Pikachu','electric',NULL,2,'Kanto','1"04"',13.2,310),
('Bulbasaur','grass','poison',1,'Kanto','2"4"',15.2,318),
('Charizard','fire','flying',3,'Kanto','5"07"',199.5,534),
('Squirtle','water',NULL,1,'Kanto','1"08"',19.8,314),
('Caterpie','bug',NULL,1,'Kanto','1"00"',6.4,195),
('Weedle','bug','Poison',1,'Kanto','1"00"',7.1,195),
('Pidgey','normal','flying',1,'Kanto','1"00"',4,251), 
('Arbok','poison',NULL,2,'Kanto','11"06"',143.3,448),
('Nidoking','poison','ground',3,'Kanto','4"07"',136.7,505),
('Ninetales','fire',NULL,2,'Kanto','3"07"',43.9,505),
('Golbat','poison','flying',2,'Kanto','5"03"',121.3,455),
('Venonat','bug','poison',1, 'Kanto','3"03"',66.1,305),
('Dugtrio','ground',NULL,2, 'Kanto','2"04"',73.4,425),
('Meowth','normal',NULL,1,'Kanto','1"04"',9.3,290),
('Arcanine','fire',NULL,2,'Kanto','6"03"',341.7,555),
('Machamp','fighting',NULL,3,'Kanto','5"03"',286.6,505),
('Golem','rock','ground',3,'Kanto','4"07"',661.4,495),
('Rapidash','fire',NULL,2,'Kanto','5"07"',209.4,500),
('Magneton','electric','steel',2,'Kanto','3"03"',132.3,465),
('Hitmonchan','fighting',NULL,2,'Kanto','4"07"',110.7,455),
('Kangaskhan','normal',NULL,NULL,'Kanto','7"03"',176.4,490),
('Jolteon','electric',NULL,2,'Kanto','2"07"',54,525),
('Typhlosion','fire',NULL,3,'Kanto', '5"07"',175.3,534),
('Zapdos','electric','flying',NULL,'Kanto','5"03"',116,580),
('Articuno','ice','flying',NULL,'Kanto','5"07"',122.1,580),
('Moltres','fire','flying',NULL,'Kanto','6"07"',132.3,580);
