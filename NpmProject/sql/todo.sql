
CREATE TABLE todo_list(
id SERIAL PRIMARY KEY,
todo VARCHAR(50) NOT NULL,
completed BOOLEAN NOT NULL);

INSERT INTO todo_list(todo,completed)
VALUES('wash car',FALSE),
('grocery shopping',FALSE),
('cut grass',FALSE);

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
('Pikachu','electric','none',3,'Kanto','1 " 04 inches',13,310),
('Bulbasaur','grass','poison',3,'Kanto','2 feet 4 inches',15,318),
('Charizard','fire','flying',3,'Kanto','5 feet 07 inches',200,534),
('Squirtle','water','none',3,'Kanto','1 " 08 inches',20,314),
('Caterpie','bug','none',3,'Kanto','1 " 00 inches',6,195),
('Weedle','bug','Poison',3,'Kanto','1 " 00 inches',7,195),
('Pidgey','normal','flying',3,'Kanto','1 " 00 inches',4,251), 
('Arbok','poison','none',0,'Kanto','11 feet 06 inches',143,448),
('Nidoking','poison','ground',0,'Kanto','4 feet 07 inches',137,505),
('Ninetales','fire','none',0,'Kanto','3 feet 07 inches',44,505),
('Golbat','poison','flying',1,'Kanto','5 feet 03 inches',121,455),
('Venonat','bug','poison',1, 'Kanto','3 feet 03 inches',66,305),
('Dugtrio','ground','none',0, 'Kanto','2 feet 04 inches',73,425),
('Meowth','normal','none',1,'Kanto','1 " 04 inches',9,290),
('Arcanine','fire','none',0,'Kanto','6 feet 03 inches',342,555),
('Machamp','fighting','none',0,'Kanto','5 feet 03 inches',287,505),
('Golem','rock','ground',0,'Kanto','4 feet 07 inches',661,495),
('Rapidash','fire','none',0,'Kanto','5 feet 07 inches',209,500),
('Magneton','electric','steel',0,'Kanto','3 feet 03 inches',132,465),
('Hitmonchan','fighting','none',0,'Kanto','4 feet 07 inches',111,455),
('Kangaskhan','normal','none',0,'Kanto','7 feet 03 inches',176,490),
('Jolteon','electric','none',0,'Kanto','2 feet 07 inches',54,525),
('Typhlosion','fire','none',0,'Kanto', '5 feet 07 inches',175,534),
('Zapdos','electric','flying',0,'Kanto','5 feet 03 inches',116,580),
('Articuno','ice','flying',0,'Kanto','5 feet 07 inches',122,580),
('Moltres','fire','flying',0,'Kanto','6 feet 07 inches',132,580);