-- all users have password set to "password"

INSERT INTO users ( username, first_name, last_name, password, email, is_admin, created_at)
VALUES 
('joeman', 'joe', 'man', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'joeman@gmail.com', TRUE, NOW()),
('edhit', 'ed', 'hit', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'edhit@gmail.com', FALSE, NOW()),
('lambo', 'lam', 'bo', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'lambo@gmail.com', FALSE, NOW()),
('raingirl', 'rain', 'girl', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'raingirl@gmail.com', FALSE, NOW()),
('badboy', 'bad', 'boy', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'badboy@gmail.com', FALSE, NOW());

INSERT INTO recents (news_id, username, visited_at)
VALUES 
('a6dcac19-df0c-47fb-8f76-faffa506e0c0', 'joeman', '2022-01-21 19:58:45.540158'),
('61c0975d-1439-442a-8e64-3ee5e36802db', 'joeman', '2022-01-22 19:58:45.540158'),
('8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 'joeman', '2022-01-23 19:58:45.540158'),
('94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 'joeman', '2022-01-23 20:58:45.540158'),
('2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 'joeman', '2022-02-21 19:58:45.540158'),
('11bedb45-6690-4482-8e53-0fc85610634a', 'joeman', '2022-02-22 19:58:45.540158'),
('8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 'edhit', '2022-01-21 13:58:45.540158'),
('a6dcac19-df0c-47fb-8f76-faffa506e0c0', 'edhit', '2022-01-21 19:58:45.540158'),
('94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 'edhit', '2022-01-21 19:59:45.540158'),
('11bedb45-6690-4482-8e53-0fc85610634a', 'edhit', '2022-01-21 20:58:45.540158'),
('2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 'edhit', '2022-02-21 19:58:45.540158'),
('94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 'lambo', '2022-03-21 19:58:45.540158'),
('11bedb45-6690-4482-8e53-0fc85610634a', 'raingirl', '2022-04-21 19:58:45.540158'),
('2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 'badboy', '2022-05-21 19:58:45.540158');

INSERT INTO favorites (news_id, username, favorited_at)
VALUES 
('a6dcac19-df0c-47fb-8f76-faffa506e0c0', 'joeman', '2022-01-21 19:58:45.540158'),
('61c0975d-1439-442a-8e64-3ee5e36802db', 'joeman', '2022-02-21 19:58:45.540158'),
('8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 'joeman', '2022-03-21 19:58:45.540158'),
('94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 'joeman', '2022-04-21 19:58:45.540158'),
('2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 'joeman', '2022-05-21 19:58:45.540158'),
('11bedb45-6690-4482-8e53-0fc85610634a', 'joeman', '2022-06-21 19:58:45.540158'),
('8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 'edhit', '2022-01-21 19:58:45.540158'),
('a6dcac19-df0c-47fb-8f76-faffa506e0c0', 'edhit', '2022-02-21 19:58:45.540158'),
('94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 'edhit', '2022-03-21 19:58:45.540158'),
('11bedb45-6690-4482-8e53-0fc85610634a', 'edhit', '2022-04-21 19:58:45.540158'),
('2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 'edhit', '2022-05-21 19:58:45.540158'),
('94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 'lambo', '2022-01-21 19:58:45.540158'),
('a6dcac19-df0c-47fb-8f76-faffa506e0c0', 'lambo', '2022-02-21 19:58:45.540158'),
('61c0975d-1439-442a-8e64-3ee5e36802db', 'lambo', '2022-03-21 19:58:45.540158'),
('8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 'lambo', '2022-04-21 19:58:45.540158'),
('11bedb45-6690-4482-8e53-0fc85610634a', 'lambo', '2022-05-21 19:58:45.540158'),
('11bedb45-6690-4482-8e53-0fc85610634a', 'raingirl', '2022-01-21 19:58:45.540158'),
('a6dcac19-df0c-47fb-8f76-faffa506e0c0', 'raingirl', '2022-02-21 19:58:45.540158'),
('61c0975d-1439-442a-8e64-3ee5e36802db', 'raingirl', '2022-03-21 19:58:45.540158'),
('8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 'raingirl', '2022-04-21 19:58:45.540158'),
('94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 'raingirl', '2022-05-21 19:58:45.540158'),
('2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 'raingirl', '2022-06-21 19:58:45.540158'),
('2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 'badboy', '2022-01-21 19:58:45.540158'),
('a6dcac19-df0c-47fb-8f76-faffa506e0c0', 'badboy', '2022-02-21 19:58:45.540158'),
('61c0975d-1439-442a-8e64-3ee5e36802db', 'badboy', '2022-03-21 19:58:45.540158'),
('8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 'badboy', '2022-04-21 19:58:45.540158'),
('94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 'badboy', '2022-05-21 19:58:45.540158'),
('11bedb45-6690-4482-8e53-0fc85610634a', 'badboy', '2022-06-21 19:58:45.540158');
