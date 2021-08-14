DROP TABLE IF EXISTS drivers CASCADE;
DROP TABLE IF EXISTS races;
DROP TABLE IF EXISTS results;

CREATE TABLE drivers (
    id SERIAL PRIMARY KEY NOT NULL,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL,
    handle TEXT NOT NULL,
    sponsor TEXT NOT NULL,
    car_color TEXT NOT NULL,
    car_number INTEGER NOT NULL,
);

CREATE TABLE races (
    id SERIAL PRIMARY KEY NOT NULL,
    race_location TEXT NOT NULL,
    circuit TEXT NOT NULL,
    daytime BOOLEAN NOT NULL,
    distance INTEGER NOT NULL,
);

CREATE TABLE results (
    id SERIAL PRIMARY KEY NOT NULL,
    race_date DATE NOT NULL,
    location_id INTEGER NOT NULL REFERENCES races_id,
    first_place_id INTEGER NOT NULL REFERENCES drivers_id,
    second_place_id INTEGER NOT NULL REFERENCES drivers_id,
    third_place_id INTEGER NOT NULL REFERENCES drivers_id,
);

INSERT INTO drivers (fname, lname, handle, sponsor, car_color, car_number)
VALUES (
    'Chrys',
    'Penryn',
    'Greybolt',
    'Hi-Rale',
    'silver',
    '9'
);

INSERT INTO races (race_location, circuit, daytime, distance)
VALUES (
    'South Logan',
    'Whispering Blue Shores Raceway',
    true,
    4.6
)