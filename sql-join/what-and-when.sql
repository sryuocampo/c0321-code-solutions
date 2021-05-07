select "films"."releaseYear", "films"."title",
"categories"."name"
from "filmCategory"
join "films" using ("filmId")
join "categories" using ("categoryId")
where "films"."title" = 'Boogie Amelie'
