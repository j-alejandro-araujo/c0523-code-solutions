SELECT "releaseYear",
       "genres"."name" as "genre"
from "films"
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
WHERE "title" = 'Boogie Amelia';
