SELECT "firstName",
        "lastName"
FROM "actors"
JOIN "castMember" using ("filmId")
JOIN "films" using ("title")
WHERE "title" = 'Jersey Sassy';
