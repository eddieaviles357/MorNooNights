\echo 'Delete and recreate mornoonights db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE mornoonights;
CREATE DATABASE mornoonights;
\connect mornoonights

\i mornoonights-schema.sql
\i mornoonights-seed.sql

\echo 'Delete and recreate mornoonights_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE mornoonights_test;
CREATE DATABASE mornoonights_test;
\connect mornoonights_test

\i mornoonights-schema.sql