select "addresses"."line1" as "address",
 "addresses"."district",
"cities"."name" as "city name"
from "addresses"
join "cities" using ("cityId")
