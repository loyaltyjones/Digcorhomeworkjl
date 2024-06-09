CREATE TABLE stages (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) ,
    image VARCHAR(5000) ,
    music VARCHAR(500) 
    );

INSERT INTO stages (name, image, music)
VALUES ('ground','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80ff523f-ff84-457d-a547-464588d3a3d3/df0whmn-69835183-aaf9-472a-b462-03bf63fc4c3c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwZmY1MjNmLWZmODQtNDU3ZC1hNTQ3LTQ2NDU4OGQzYTNkM1wvZGYwd2htbi02OTgzNTE4My1hYWY5LTQ3MmEtYjQ2Mi0wM2JmNjNmYzRjM2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f29069zEBWQicp-3M0qo5VU61TFk5BB8CWk9uK3YG68', '/Users/corcoding/digitalcrafts/pokedexProject/npm/audio/Pokemon Season 1 Music_ Burning Battle Feild.mp3'),
('bug', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0359f770-0e1b-4564-8d42-2f6de88fc7ae/dgxt9pf-1db5a4c6-1968-4381-82a0-71acd01f95c1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzNTlmNzcwLTBlMWItNDU2NC04ZDQyLTJmNmRlODhmYzdhZVwvZGd4dDlwZi0xZGI1YTRjNi0xOTY4LTQzODEtODJhMC03MWFjZDAxZjk1YzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pykcCmlCau3vhgaESE_Egr1pgtL1LLGIsed5JCBw3FI', '" "'),
('water', 'https://www.videogameschronicle.com/files/2020/06/Pok%C3%A9mon-Sword-and-Shield-Isle-of-Armor-landscape.jpg', '""'),
('grass','https://pbs.twimg.com/media/DSZWWI0WAAE0Wmv.jpg:large','""'),
('fire','https://pics.craiyon.com/2023-09-25/78d5a268ca244f8984e9a0c3bc35b921.webp','" "');
  RETURNING *;
