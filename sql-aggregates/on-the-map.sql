SELECT COUNT("cities"."countryId") as "cityCount",
       "countries"."name" as "countryName"
FROM "cities"
JOIN "countries" on "cities"."countryId" = "countries"."countryId"
GROUP BY "countries"."countryId", "countries"."name";
