SELECT "customers"."firstName",
       "customers"."lastName"
FROM "rentals"
JOIN "inventory" using ("inventoryId")
JOIN "customers" using ("customerId")
JOIN "films" using ("filmId")
WHERE "title" = 'Magic Mallrats';
