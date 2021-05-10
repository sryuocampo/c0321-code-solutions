select "customers"."firstName" as "First Name",
 "customers"."lastName" as "Last Name",
  sum("payments"."amount") as "Total"
  from "payments"
  join "customers" using ("customerId")
  group by "customers"."customerId"
  order by sum("payments"."amount") desc
