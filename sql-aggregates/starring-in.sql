SELECT COUNT(*) as "totalFilms",
       "genres.name" as "genre"
JOIN "filmGenre" using ("filmId")
JOIN "genres" using ("genreId")
JOIN "castMember" using ("filmId")
JOIN "actors" using ("actorId")
WHERE "actors.firstName" = 'Lisa' and "actors.lastName" = 'Monroe';
