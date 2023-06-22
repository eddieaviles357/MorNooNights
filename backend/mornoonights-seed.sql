-- all users have password set to "password"

INSERT INTO users ( username, first_name, last_name, password, email, is_admin )
VALUES 
("joeman", "joe", "man", "$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q", "joeman@gmail.com", false),
("edhit", "ed", "hit", "$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q", "edhit@gmail.com", false),
("lambo", "lam", "bo", "$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q", "lambo@gmail.com", false),
("raingirl", "rain", "girl", "$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q", "raingirl@gmail.com", false),
("badboy", "bad", "boy", "$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q", "badboy@gmail.com", false);

INSERT INTO recents (news_id, username)
VALUES 
("a6dcac19-df0c-47fb-8f76-faffa506e0c0", "joeman"),
("61c0975d-1439-442a-8e64-3ee5e36802db", "joeman"),
("8cca4d04-d649-4ba3-bdc6-05bc74f8ac98", "joeman"),
("94b010c2-1e7c-48cf-ba96-046ffcb2a2ce", "joeman"),
("94b010c2-1e7c-48cf-ba96-046ffcb2a2ce", "joeman"),
("11bedb45-6690-4482-8e53-0fc85610634a", "joeman"),
("8cca4d04-d649-4ba3-bdc6-05bc74f8ac98", "edhit"),
("a6dcac19-df0c-47fb-8f76-faffa506e0c0", "edhit"),
("94b010c2-1e7c-48cf-ba96-046ffcb2a2ce", "edhit"),
("11bedb45-6690-4482-8e53-0fc85610634a", "edhit"),
("2140cfa3-fd2c-4c3b-9125-ff59786d5ef3", "edhit"),
("94b010c2-1e7c-48cf-ba96-046ffcb2a2ce", "lambo"),
("11bedb45-6690-4482-8e53-0fc85610634a", "raingirl"),
("2140cfa3-fd2c-4c3b-9125-ff59786d5ef3", "badboy");

INSERT INTO favorites (news_id, username)
VALUES 
("a6dcac19-df0c-47fb-8f76-faffa506e0c0", "joeman"),
("61c0975d-1439-442a-8e64-3ee5e36802db", "joeman"),
("8cca4d04-d649-4ba3-bdc6-05bc74f8ac98", "joeman"),
("94b010c2-1e7c-48cf-ba96-046ffcb2a2ce", "joeman"),
("2140cfa3-fd2c-4c3b-9125-ff59786d5ef3", "joeman"),
("11bedb45-6690-4482-8e53-0fc85610634a", "joeman"),
("8cca4d04-d649-4ba3-bdc6-05bc74f8ac98", "edhit"),
("a6dcac19-df0c-47fb-8f76-faffa506e0c0", "edhit"),
("94b010c2-1e7c-48cf-ba96-046ffcb2a2ce", "edhit"),
("11bedb45-6690-4482-8e53-0fc85610634a", "edhit"),
("2140cfa3-fd2c-4c3b-9125-ff59786d5ef3", "edhit"),
("94b010c2-1e7c-48cf-ba96-046ffcb2a2ce", "lambo"),
("a6dcac19-df0c-47fb-8f76-faffa506e0c0", "lambo"),
("61c0975d-1439-442a-8e64-3ee5e36802db", "lambo"),
("8cca4d04-d649-4ba3-bdc6-05bc74f8ac98", "lambo"),
("11bedb45-6690-4482-8e53-0fc85610634a", "lambo"),
("11bedb45-6690-4482-8e53-0fc85610634a", "raingirl"),
("a6dcac19-df0c-47fb-8f76-faffa506e0c0", "raingirl"),
("61c0975d-1439-442a-8e64-3ee5e36802db", "raingirl"),
("8cca4d04-d649-4ba3-bdc6-05bc74f8ac98", "raingirl"),
("94b010c2-1e7c-48cf-ba96-046ffcb2a2ce", "raingirl"),
("2140cfa3-fd2c-4c3b-9125-ff59786d5ef3", "raingirl"),
("2140cfa3-fd2c-4c3b-9125-ff59786d5ef3", "badboy"),
("a6dcac19-df0c-47fb-8f76-faffa506e0c0", "badboy"),
("61c0975d-1439-442a-8e64-3ee5e36802db", "badboy"),
("8cca4d04-d649-4ba3-bdc6-05bc74f8ac98", "badboy"),
("94b010c2-1e7c-48cf-ba96-046ffcb2a2ce", "badboy"),
("11bedb45-6690-4482-8e53-0fc85610634a", "badboy");
