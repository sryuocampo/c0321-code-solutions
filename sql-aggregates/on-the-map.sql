select "countries"."name",
count("cities"."countryId")
from "countries"
join "cities" using ("countryId")
group by "countries"."countryId"
