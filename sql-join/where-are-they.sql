SELECT "addresses"."line1",
       "cities"."name",
       "addresses"."district"
FROM "addresses"
JOIN "cities" on "addresses"."cityId" = "cities"."cityId";
