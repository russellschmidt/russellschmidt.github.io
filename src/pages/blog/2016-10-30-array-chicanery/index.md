---
path: "/blog/array-chicanery/"
date: "2016-10-18T17:12:33.962Z"
title: "Array Chicanery"
type: "blog"
---

### Ruby's Sweet Sugar
So of course it is Sunday so I am working on my Bloc homework as Sunday is a day that ends in 'y'. The SET program as it stands is full of not just exposure to the theory and building blocks of computer science but also to the wonders of Ruby.

I saw this little nugget of gold in an exercise and had no idea what it did.

```ruby
connection.execute <<-SQL
	UPDATE #{table}
	SET #{updates_array * ","}
	WHERE id = #{id};
SQL
```

Now the `<<-SQL` ... `SQL` bit is just raw SQL. Everything between the two `SQL`s is passed along as SQL and is not interpreted as Ruby. You could just as easily write the code below for identical results.

```ruby
sql = "UPDATE #{table} SET #{updates_array * ","} WHERE id = #{id};"
connection.execute(sql)
```

Two other things to note here are the string interpolation and the array multiplication.

The string interpolation should be familiar from working with Rails where we do this sort of thing all the time in our Views. `#{some_variable}` pulls code from the Ruby side of the house into a string in this example, or into HTML in Rails.

What was completely new to me was the `#{updates_array * ","}` - what the heck is going on here? In the example, `updates_array` is an array of strings, with each string equivalent to `some_key=some_value` so as to perform a SQL UPDATE command. So what gives with the multiplication?

### Join or Die
Well, it turns out that the multiplication and `","` are the equivalent of `join`! We could write this as `updates_array.join(",")` and also get an identical result. Using this syntax allows us to convert the array into a single set of comma-separated strings.
