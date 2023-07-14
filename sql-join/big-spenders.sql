SELECT "payments"."amount",
       "customers"."firstName",
       "customers"."lastName"
FROM "payments"
JOIN "customers" on "payments"."customerId" = "customers"."customerId"
ORDER BY "payments"."amount" DESC
LIMIT 10;
