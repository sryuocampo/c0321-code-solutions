select "categories"."name" as "Categories",
count("castMembers"."actorId") as "Lisa Monroe Appeared In"
from "categories"
join "filmCategory" using ("categoryId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."firstName" = 'Lisa'
group by "categories"."name"
