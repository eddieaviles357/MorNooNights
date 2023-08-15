-- all users have password set to "password"

INSERT INTO users ( username, first_name, last_name, password, email, is_admin, created_at)
VALUES 
('joeman', 'joe', 'man', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'joeman@gmail.com', TRUE, NOW()),
('edhit', 'ed', 'hit', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'edhit@gmail.com', FALSE, NOW()),
('lambo', 'lam', 'bo', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'lambo@gmail.com', FALSE, NOW()),
('raingirl', 'rain', 'girl', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'raingirl@gmail.com', FALSE, NOW()),
('badboy', 'bad', 'boy', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'badboy@gmail.com', FALSE, NOW());

INSERT INTO recents (
  news_id, 
  username, 
  visited_at, 
  description, 
  image_url, 
  keywords, 
  language, 
  locale, 
  published_at, 
  snippet, 
  source, 
  title, 
  url
  )
VALUES 
(
  'cad54b33-860d-4bbd-96e6-e5551ec4fac2', 
  'joeman', 
  '2022-01-21 19:58:45.540158', 
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:21:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  ),
(
  '61c0975d-1439-442a-8e64-3ee5e36802db', 
  'joeman', 
  '2022-01-23 19:58:45.540158',
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:20:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  ),
(
  '8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 
  'joeman', 
  '2022-01-24 19:58:45.540158',
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:34:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  ),
(
  '94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 
  'joeman', 
  '2022-01-23 20:58:45.540158',
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:24:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  ),
(
  '2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 
  'joeman', 
  '2022-02-21 19:58:45.540158',
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:24:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  ),
(
  '8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 
  'edhit', 
  '2022-01-21 13:58:45.540158',
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:24:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  ),
(
  'a6dcac19-df0c-47fb-8f76-faffa506e0c0', 
  'edhit', 
  '2022-01-21 19:58:45.540158',
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:24:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  ),
(
  '94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 
  'edhit', 
  '2022-01-21 19:59:45.540158',
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:24:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  ),
(
  '11bedb45-6690-4482-8e53-0fc85610634a', 
  'edhit', 
  '2022-01-21 20:58:45.540158',
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:24:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  ),
(
  '2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 
  'edhit', 
  '2022-02-21 19:58:45.540158',
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:24:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  ),
(
  '94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 
  'lambo', 
  '2022-03-21 19:58:45.540158',
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:24:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  ),
(
  '11bedb45-6690-4482-8e53-0fc85610634a', 
  'raingirl', 
  '2022-04-21 19:58:45.540158',
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:24:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  ),
(
  '2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 
  'badboy', 
  '2022-05-21 19:58:45.540158',
  'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
  'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
  'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
  'en', 
  'us', 
  '2023-07-19T02:24:26.000000Z', 
  'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
  'cnbc.com', 
  'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
  'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
  );

-- INSERT INTO favorites (
--   news_id, 
--   username, 
--   favorited_at,
--   description, 
--   image_url, 
--   keywords, 
--   language, 
--   locale, 
--   published_at, 
--   snippet, 
--   source, 
--   title, 
--   url
--   )
-- VALUES 
-- (
--   'a6dcac19-df0c-47fb-8f76-faffa506e0c0', 
--   'joeman', 
--   '2022-01-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '61c0975d-1439-442a-8e64-3ee5e36802db', 
--   'joeman', 
--   '2022-02-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 
--   'joeman', 
--   '2022-03-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 
--   'joeman', 
--   '2022-04-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 
--   'joeman', 
--   '2022-05-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '11bedb45-6690-4482-8e53-0fc85610634a', 
--   'joeman', 
--   '2022-06-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 
--   'edhit', 
--   '2022-01-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   'a6dcac19-df0c-47fb-8f76-faffa506e0c0', 
--   'edhit', 
--   '2022-02-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 
--   'edhit', 
--   '2022-03-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '11bedb45-6690-4482-8e53-0fc85610634a', 
--   'edhit', 
--   '2022-04-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 
--   'edhit', 
--   '2022-05-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 
--   'lambo', 
--   '2022-01-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   'a6dcac19-df0c-47fb-8f76-faffa506e0c0', 
--   'lambo', 
--   '2022-02-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '61c0975d-1439-442a-8e64-3ee5e36802db', 
--   'lambo', 
--   '2022-03-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 
--   'lambo', 
--   '2022-04-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '11bedb45-6690-4482-8e53-0fc85610634a', 
--   'lambo', 
--   '2022-05-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '11bedb45-6690-4482-8e53-0fc85610634a', 
--   'raingirl', 
--   '2022-01-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   'a6dcac19-df0c-47fb-8f76-faffa506e0c0', 
--   'raingirl', 
--   '2022-02-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '61c0975d-1439-442a-8e64-3ee5e36802db', 
--   'raingirl', 
--   '2022-03-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 
--   'raingirl', 
--   '2022-04-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 
--   'raingirl', 
--   '2022-05-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 
--   'raingirl', 
--   '2022-06-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '2140cfa3-fd2c-4c3b-9125-ff59786d5ef3', 
--   'badboy', 
--   '2022-01-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   'a6dcac19-df0c-47fb-8f76-faffa506e0c0', 
--   'badboy', 
--   '2022-02-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '61c0975d-1439-442a-8e64-3ee5e36802db', 
--   'badboy', 
--   '2022-03-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '8cca4d04-d649-4ba3-bdc6-05bc74f8ac98', 
--   'badboy', 
--   '2022-04-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '94b010c2-1e7c-48cf-ba96-046ffcb2a2ce', 
--   'badboy', 
--   '2022-05-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   ),
-- (
--   '11bedb45-6690-4482-8e53-0fc85610634a', 
--   'badboy', 
--   '2022-06-21 19:58:45.540158',
--   'Singapore has overtaken Japan to boast the most powerful passport in the world, the Henley Passport Index showed.', 
--   'https://image.cnbcfm.com/api/v1/image/107273388-1689733279342-gettyimages-821304076-singaporesunset2.jpeg?v=1689733412&w=1920&h=1080', 
--   'U.S. Economy, Asia Economy, South Korea, Singapore, Japan, business news', 
--   'en', 
--   'us', 
--   '2023-07-19T02:24:26.000000Z', 
--   'Singapore has overtaken Japan to boast of the worlds most powerful passport, the Henley Passport Index showed.\n\nWhat it means is that the Singapore passport al...', 
--   'cnbc.com', 
--   'Singapores passport is now the most powerful in the world. Heres how other countries ranked', 
--   'https://www.cnbc.com/2023/07/19/henley-passport-index-2023-singapore-germany-italy-spain-rank-top-.html'
--   );
