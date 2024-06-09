CREATE TABLE pokedex (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    primary_type VARCHAR(50) NOT NULL,
    secondary_type VARCHAR(50) NULL,
    hp INTEGER NOT NULL,
    physical INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    spatk INTEGER NOT NULL,
    spdef INTEGER NOT NULL,
    speed INTEGER NOT NULL,
    evolution_stage INTEGER,
    region_of_origin VARCHAR(50) NOT NULL,
    height VARCHAR(10) NOT NULL,
    weight_lbs NUMERIC(5,1) NOT NULL,
    bst INTEGER NOT NULL,
    image VARCHAR(500) NOT NULL
    );

CREATE TABLE partyPokemon (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    primary_type VARCHAR(50) NOT NULL,
    secondary_type VARCHAR(50) NULL,
    hp INTEGER NOT NULL,
    physical INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    spatk INTEGER NOT NULL,
    spdef INTEGER NOT NULL,
    speed INTEGER NOT NULL,
    image VARCHAR(500) NOT NULL,
    moves VARCHAR(500)[]
    -- abilities VARCHAR(500)[]
    );


CREATE TABLE opponentPokemon (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    primary_type VARCHAR(50) NOT NULL,
    secondary_type VARCHAR(50) NULL,
    hp INTEGER NOT NULL,
    physical INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    spatk INTEGER NOT NULL,
    spdef INTEGER NOT NULL,
    speed INTEGER NOT NULL,
    image VARCHAR(500) NOT NULL,
    moves VARCHAR(500)[]
    -- abilities VARCHAR(500)[]
    );

CREATE TABLE moves (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    power INTEGER NULL,
    accuracy INTEGER NOT NULL
    );

CREATE TABLE battle (
    id SERIAL PRIMARY KEY, 
    type VARCHAR(50) NOT NULL,
    strengths VARCHAR(50)[] NULL,
    weaknesses VARCHAR(50)[] NOT NULL,
    immunities VARCHAR(50)[] NULL,
    noeffect VARCHAR(50)[] NULL
)

CREATE TABLE stages (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    background VARCHAR(5000) NOT NULL,
    music  VARCHAR(500)NOT NULL
);


INSERT INTO pokedex (name, primary_type, secondary_type, evolution_stage, region_of_origin, height, weight_lbs, bst, image, moves)
VALUES ('Stufful', 'normal', 'fighting', 1, 'Alola', '1''08"', 15, 340,'https://img.pokemondb.net/artwork/avif/stufful.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    ('Bounsweet', 'grass', NULL, 1, 'Alola', '1''00"', 7.1, 210,'https://img.pokemondb.net/artwork/avif/bounsweet.avif', '{Razor Leaf, Draining Kiss, Swift, Zen Headbutt}'),
    ('Comfey', 'fairy', NULL, NULL, 'Alola', '0''04"', 0.7, 485,'https://img.pokemondb.net/artwork/avif/comfey.avif', '{Vine Whip, Magical Leaf, Acrobatics, Pollen Puff}'),
    ('Kommo-o', 'dragon', 'fighting', 3, 'Alola', '5''3"', 172.4, 600,'https://img.pokemondb.net/artwork/avif/kommo-o.avif', '{Dragon Claw, Metal Claw, Earthquake, Body Press}'),
    ('Lunala', 'psychic', 'ghost', 3, 'Alola', '13''01"', 264.6, 680,'https://img.pokemondb.net/artwork/avif/lunala.avif', '{Shadow Ball, Charge Beam, Psychic, Meteor Beam}')
    -- ('Raboot', 'fire', NULL, 2, 'Galar', '2''00"', 19.8, 420,'https://img.pokemondb.net/artwork/avif/raboot.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Corviknight', 'flying', 'steel', 3, 'Galar', '7''03"', 165.3, 495,'https://img.pokemondb.net/artwork/avif/corviknight.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Coalossal', 'rock', 'fire', 3, 'Galar', '9''02"', 684.5, 510,'https://img.pokemondb.net/artwork/avif/coalossal.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Basculegion', 'water', 'ghost', 2, 'Hisui', '9''10"', 242.5, 530,'https://img.pokemondb.net/artwork/avif/basculegion-male.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Meowscarada', 'grass', 'dark', 3, 'Paldea', '4''11"', 68.8, 530,'https://img.pokemondb.net/artwork/avif/meowscarada.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Crocalor', 'fire', NULL, 2, 'Paldea', '3''03"', 67.7, 411,'https://img.pokemondb.net/artwork/avif/crocalor.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Quaxly', 'water', NULL, 1, 'Paldea', '1''08"', 13.4, 310,'https://img.pokemondb.net/artwork/avif/quaxly.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Lokix', 'bug', 'dark', 2, 'Paldea', '3''03"', 38.6, 450,'https://img.pokemondb.net/artwork/avif/lokix.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Wattrel', 'electric', 'flying', 1, 'Paldea', '1''04"', 7.9, 280,'https://img.pokemondb.net/artwork/avif/wattrel.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Tinkaton', 'fairy', 'steel', 3, 'Paldea', '2''04"', 248.7, 506,'https://img.pokemondb.net/artwork/avif/tinkaton.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Cetitan', 'ice', NULL, 2, 'Paldea', '14''09"', 1543.2, 521,'https://img.pokemondb.net/artwork/avif/cetitan.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Tatsugiri', 'dragon', 'water', NULL, 'Paldea', '1''00"', 17.6, 475,'https://img.pokemondb.net/artwork/avif/tatsugiri-curly.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Clodsire', 'poison', 'ground', 2, 'Paldea', '5''11"', 491.6, 430,'https://img.pokemondb.net/artwork/avif/clodsire.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Great Tusk', 'ground', 'fighting', NULL, 'Paldea', '7''03"', 705.5, 570,'https://img.pokemondb.net/artwork/avif/great-tusk.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Chien Pao', 'dark', 'ice', NULL, 'Paldea', '6''03"', 335.5, 570,'https://img.pokemondb.net/artwork/avif/chien-pao.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Iron Valiant', 'fairy', 'fighting', NULL, 'Paldea', '4''07"', 77.2, 590,'https://img.pokemondb.net/artwork/avif/iron-valiant.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Poltchageist', 'grass', 'ghost', 1, 'Kitakami', '0''04"', 2.4, 308,'https://img.pokemondb.net/artwork/avif/poltchageist.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Hydrapple', 'grass', 'dragon', 3, 'Kitakami', '5''11"', 205, 540,'https://img.pokemondb.net/sprites/scarlet-violet/normal/hydrapple.png', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Raging Bolt', 'electric', 'dragon', NULL, 'Paldea', '17''01"', 1058.2, 590,'https://img.pokemondb.net/artwork/avif/raging-bolt.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
    -- ('Pecharunt', 'poison', 'ghost', NULL, 'Kitakami', '1''00"', 0.7, 600,'https://img.pokemondb.net/artwork/avif/pecharunt.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}')
RETURNING *;



INSERT INTO partyPokemon (name, primary_type, secondary_type, hp, physical, special, defense, spdef, speed, image, moves, abilities)
VALUES ('Stufful', 'normal', 'fighting', 120, 75, 100, 80, 115, 50, 'https://img.pokemondb.net/artwork/avif/stufful.avif', '{Fluffy, Klutz}', '{ability}'),
    ('Bounsweet', 'grass', null, 120, 75, 100, 80, 115, 32, 'https://img.pokemondb.net/artwork/avif/bounsweet.avif', '{}', '{Leaf Guard, Oblivious}'),
    ('Comfey', 'fairy', null, 120, 75, 100, 80, 115, 100, 'https://img.pokemondb.net/artwork/avif/comfey.avif', '{}', '{Flower Veil, Triage}'),
    ('Kommo-o', 'dragon', 'fighting', 120, 75, 100, 80, 115, 85, 'https://img.pokemondb.net/artwork/avif/kommo-o.avif', '{}', '{Bulletproof, Soundproof}'),
    ('Lunala', 'psychic', 'ghost', 120, 75, 100, 80, 115, 97, 'https://img.pokemondb.net/artwork/avif/lunala.avif', '{}', '{Shadow Shield}')
    RETURNING *;


INSERT INTO moves (name, type, category, power, accuracy)
VALUES ('thunder shock', 'electric', 'special', 40, 100),
    ('thunderbolt', 'electric', 'special', 90, 100),
    ('tackle', 'normal', 'physical', 40, 100),
    ('ember', 'fire', 'special', 40, 100),
    ('water gun', 'water', 'special', 40, 100),
    ('vine whip', 'grass', 'physical', 45, 100),
    ('growl', 'normal', 'status', null, 100)
    RETURNING *;

INSERT INTO battle (type, strengths, weaknesses, immunities, noeffect)
VALUES ('normal', null, '{rock, steel}', '{ghost}', '{ghost}'),
    ('fighting', '{normal, rock, steel, ice, dark}', '{flying, posion, psychic, bug, ghost, fairy}', null, '{ghost}'),
    ('flying', '{fighting, bug, grass}', '{rock, steel, electric}', '{ground}', null),
    ('poison', '{grass, fairy}', '{poison, ground, rock, ghost}', null, '{steel}'),
    ('ground', '{poison, rock, steel, fire, electric}', '{bug, grass}', '{electric}', '{flying}'),
    ('rock', '{flying, bug, fire, ice}', '{fighting, ground, steel}', null, null),
    ('bug', '{grass, psychic, dark}', '{fighting, flying, posion, ghost, steel, fire, fairy}', null, null),
    ('ghost', '{ghost, psychic}', '{dark}', '{normal, fighting}', '{normal}'),
    ('steel', '{rock, ice, fairy}', '{steel, fire, water, electric}', '{poison}', null),
    ('fire', '{bug, steel, grass, ice}', '{rock, fire, water, dragon}', null, null),
    ('water', '{ground, rock, fire}', '{water, grass, dragon}', null, null),
    ('grass', '{ground, rock, water}', '{flying, poison, bug, steel, fire, grass, dragon}', null, null),
    ('electric', '{flying, water}', '{grass, electric, dragon}', null, '{ground}'),
    ('psychic', '{fighting, poison}', '{steel, psychic}', null, '{dark}'),
    ('ice', '{flying, ground, grass, dragon}', '{steel, fire, water, ice}', null, null),
    ('dragon', '{dragon}', '{steel}', null, '{fairy}'),
    ('dark', '{ghost, psychic}', '{fighting, dark, fairy}', '{psychic}', null),
    ('fairy', '{fighting, dragon, dark}', '{poison, steel, fire}', '{dragon}', null),


INSERT INTO stages (name, background, music)
VALUES ('Viridian Forest', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0359f770-0e1b-4564-8d42-2f6de88fc7ae/dgxt9pf-1db5a4c6-1968-4381-82a0-71acd01f95c1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzNTlmNzcwLTBlMWItNDU2NC04ZDQyLTJmNmRlODhmYzdhZVwvZGd4dDlwZi0xZGI1YTRjNi0xOTY4LTQzODEtODJhMC03MWFjZDAxZjk1YzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pykcCmlCau3vhgaESE_Egr1pgtL1LLGIsed5JCBw3FI', '../audio/viridianForest.mp3'),
    ('Pokemon Gym', 'https://archives.bulbagarden.net/media/upload/5/50/Ballonlea_Stadium_battlefield.png', '../audio/gymLeader.mp3'),
    ('Wild', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80ff523f-ff84-457d-a547-464588d3a3d3/dfyt06i-a628cd42-5aa0-42c9-a428-bf68c7f42196.png/v1/fill/w_1095,h_730,q_70,strp/paldea_route_background_2_by_willdinomaster55_dfyt06i-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvODBmZjUyM2YtZmY4NC00NTdkLWE1NDctNDY0NTg4ZDNhM2QzXC9kZnl0MDZpLWE2MjhjZDQyLTVhYTAtNDJjOS1hNDI4LWJmNjhjN2Y0MjE5Ni5wbmciLCJ3aWR0aCI6Ijw9MTIwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.jAcpwRibX6GaqbPSe53SN3iS09DlTSWMyBs6z_h0vWQ', '../audio/wildPokemon.mp3'),
    ('Mt. Moon', 'https://i.ytimg.com/vi/84CTJXAz5FE/maxresdefault.jpg', '../audio/mtMoon.mp3'),
    ('Sea', 'https://www.videogameschronicle.com/files/2020/06/Pok%C3%A9mon-Sword-and-Shield-Isle-of-Armor-landscape.jpg', '../audio/seaAudio.mp3'),
    ('Champion Battle', 'https://media.licdn.com/dms/image/D4D10AQF-bVfKDXSxgA/image-shrink_800/0/1688322707028?e=2147483647&v=beta&t=vIc6IbbDYHVpcwYS6anlNNvBPMuulMsyG3VH_SO0WpU', '../audio/championBattle.mp3'),
    ('Pokemon Tower', 'https://i.ytimg.com/vi/pCucn1VDOME/maxresdefault.jpg', '../audio/pokemonTower.mp3')
    RETURNING *;





-- CREATE TABLE pokedex (
--     id SERIAL PRIMARY KEY, 
--     name VARCHAR(50) NOT NULL,
--     primary_type VARCHAR(50) NOT NULL,
--     secondary_type VARCHAR(50) NULL,
--     evolution_stage INTEGER,
--     region_of_origin VARCHAR(50) NOT NULL,
--     height VARCHAR(10) NOT NULL,
--     weight_lbs NUMERIC(5,1) NOT NULL,
--     bst INTEGER NOT NULL,
--     image VARCHAR(500) NOT NULL,
--     moves VARCHAR(500)[]
--     );

-- CREATE TABLE partyPokemon (
--     id SERIAL PRIMARY KEY, 
--     name VARCHAR(50) NOT NULL,
--     primary_type VARCHAR(50) NOT NULL,
--     secondary_type VARCHAR(50) NULL,
--     hp INTEGER NOT NULL,
--     physical INTEGER NOT NULL,
--     special INTEGER NOT NULL,
--     defense INTEGER NOT NULL,
--     spdef INTEGER NOT NULL,
--     speed INTEGER NOT NULL,
--     image VARCHAR(500) NOT NULL,
--     moves VARCHAR(500)[],
--     abilities VARCHAR(500)[]
--     );

-- CREATE TABLE moves (
--     id SERIAL PRIMARY KEY, 
--     name VARCHAR(50) NOT NULL,
--     type VARCHAR(50) NOT NULL,
--     category VARCHAR(50) NOT NULL,
--     power INTEGER NULL,
--     accuracy INTEGER NOT NULL
--     );



-- INSERT INTO pokedex (name, primary_type, secondary_type, evolution_stage, region_of_origin, height, weight_lbs, bst, image, moves)
-- VALUES ('Stufful', 'normal', 'fighting', 1, 'Alola', '1''08"', 15, 340,'https://img.pokemondb.net/artwork/avif/stufful.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     ('Bounsweet', 'grass', NULL, 1, 'Alola', '1''00"', 7.1, 210,'https://img.pokemondb.net/artwork/avif/bounsweet.avif', '{Razor Leaf, Draining Kiss, Swift, Zen Headbutt}'),
--     ('Comfey', 'fairy', NULL, NULL, 'Alola', '0''04"', 0.7, 485,'https://img.pokemondb.net/artwork/avif/comfey.avif', '{Vine Whip, Magical Leaf, Acrobatics, Pollen Puff}'),
--     ('Kommo-o', 'dragon', 'fighting', 3, 'Alola', '5''3"', 172.4, 600,'https://img.pokemondb.net/artwork/avif/kommo-o.avif', '{Dragon Claw, Metal Claw, Earthquake, Body Press}'),
--     ('Lunala', 'psychic', 'ghost', 3, 'Alola', '13''01"', 264.6, 680,'https://img.pokemondb.net/artwork/avif/lunala.avif', '{Shadow Ball, Charge Beam, Psychic, Meteor Beam}')
--     -- ('Raboot', 'fire', NULL, 2, 'Galar', '2''00"', 19.8, 420,'https://img.pokemondb.net/artwork/avif/raboot.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Corviknight', 'flying', 'steel', 3, 'Galar', '7''03"', 165.3, 495,'https://img.pokemondb.net/artwork/avif/corviknight.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Coalossal', 'rock', 'fire', 3, 'Galar', '9''02"', 684.5, 510,'https://img.pokemondb.net/artwork/avif/coalossal.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Basculegion', 'water', 'ghost', 2, 'Hisui', '9''10"', 242.5, 530,'https://img.pokemondb.net/artwork/avif/basculegion-male.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Meowscarada', 'grass', 'dark', 3, 'Paldea', '4''11"', 68.8, 530,'https://img.pokemondb.net/artwork/avif/meowscarada.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Crocalor', 'fire', NULL, 2, 'Paldea', '3''03"', 67.7, 411,'https://img.pokemondb.net/artwork/avif/crocalor.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Quaxly', 'water', NULL, 1, 'Paldea', '1''08"', 13.4, 310,'https://img.pokemondb.net/artwork/avif/quaxly.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Lokix', 'bug', 'dark', 2, 'Paldea', '3''03"', 38.6, 450,'https://img.pokemondb.net/artwork/avif/lokix.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Wattrel', 'electric', 'flying', 1, 'Paldea', '1''04"', 7.9, 280,'https://img.pokemondb.net/artwork/avif/wattrel.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Tinkaton', 'fairy', 'steel', 3, 'Paldea', '2''04"', 248.7, 506,'https://img.pokemondb.net/artwork/avif/tinkaton.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Cetitan', 'ice', NULL, 2, 'Paldea', '14''09"', 1543.2, 521,'https://img.pokemondb.net/artwork/avif/cetitan.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Tatsugiri', 'dragon', 'water', NULL, 'Paldea', '1''00"', 17.6, 475,'https://img.pokemondb.net/artwork/avif/tatsugiri-curly.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Clodsire', 'poison', 'ground', 2, 'Paldea', '5''11"', 491.6, 430,'https://img.pokemondb.net/artwork/avif/clodsire.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Great Tusk', 'ground', 'fighting', NULL, 'Paldea', '7''03"', 705.5, 570,'https://img.pokemondb.net/artwork/avif/great-tusk.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Chien Pao', 'dark', 'ice', NULL, 'Paldea', '6''03"', 335.5, 570,'https://img.pokemondb.net/artwork/avif/chien-pao.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Iron Valiant', 'fairy', 'fighting', NULL, 'Paldea', '4''07"', 77.2, 590,'https://img.pokemondb.net/artwork/avif/iron-valiant.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Poltchageist', 'grass', 'ghost', 1, 'Kitakami', '0''04"', 2.4, 308,'https://img.pokemondb.net/artwork/avif/poltchageist.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Hydrapple', 'grass', 'dragon', 3, 'Kitakami', '5''11"', 205, 540,'https://img.pokemondb.net/sprites/scarlet-violet/normal/hydrapple.png', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Raging Bolt', 'electric', 'dragon', NULL, 'Paldea', '17''01"', 1058.2, 590,'https://img.pokemondb.net/artwork/avif/raging-bolt.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}'),
--     -- ('Pecharunt', 'poison', 'ghost', NULL, 'Kitakami', '1''00"', 0.7, 600,'https://img.pokemondb.net/artwork/avif/pecharunt.avif', '{Tackle, Payback, Hammer Arm, Ice Punch}')
-- RETURNING *;



-- INSERT INTO partyPokemon (name, primary_type, secondary_type, hp, physical, special, defense, spdef, speed, image, moves, abilities)
-- VALUES ('Stufful', 'normal', 'fighting', 120, 75, 100, 80, 115, 50, 'https://img.pokemondb.net/artwork/avif/stufful.avif', '{Fluffy, Klutz}', '{ability}'),
--     ('Bounsweet', 'grass', null, 120, 75, 100, 80, 115, 32, 'https://img.pokemondb.net/artwork/avif/bounsweet.avif', '{}', '{Leaf Guard, Oblivious}'),
--     ('Comfey', 'fairy', null, 120, 75, 100, 80, 115, 100, 'https://img.pokemondb.net/artwork/avif/comfey.avif', '{}', '{Flower Veil, Triage}'),
--     ('Kommo-o', 'dragon', 'fighting', 120, 75, 100, 80, 115, 85, 'https://img.pokemondb.net/artwork/avif/kommo-o.avif', '{}', '{Bulletproof, Soundproof}'),
--     ('Lunala', 'psychic', 'ghost', 120, 75, 100, 80, 115, 97, 'https://img.pokemondb.net/artwork/avif/lunala.avif', '{}', '{Shadow Shield}')
--     RETURNING *;


-- INSERT INTO moves (name, type, category, power, accuracy)
-- VALUES ('thunder shock', 'electric', 'special', 40, 100),
--     ('thunderbolt', 'electric', 'special', 90, 100),
--     ('tackle', 'normal', 'physical', 40, 100),
--     ('ember', 'fire', 'special', 40, 100),
--     ('water gun', 'water', 'special', 40, 100),
--     ('vine whip', 'grass', 'physical', 45, 100),
--     ('growl', 'normal', 'status', null, 100)
--     RETURNING *;
