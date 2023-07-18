SELECT "firstName",
       "lastName"
SUM("payments.amount") as "totalSpent"
FROM "customers"
GROUP BY "customerId"
ORDER BY SUM DESC;
