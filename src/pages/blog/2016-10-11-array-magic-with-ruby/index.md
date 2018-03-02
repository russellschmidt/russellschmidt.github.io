---
path: "/blog/array-magic/"
date: "2016-10-11T17:12:33.962Z"
title: "Array Magic"
type: "blog"
---

My current assignment with Bloc is a multi-week recreation of an ActiveRecord-ish ORM to integrate with a Rails-ish framework we develop next. The idea is that I learn about databases as a computer science grad would through creating the software to bind SQLite to our lovely Ruby. I have to say, this is the hardest assignment I have had in the program to date.

Why is it so difficult, you ask? As all story tellers do, I have three reasons. One, learning both the Ruby interaction with SQLite and the SQL syntax is a bit of a juggling act. Lots of small syntactical landmines to be aware of, but overall, getting syntax right is table stakes with programming and something I am getting much better at doing. Two, this particular assignment involves lots of coding before we can test, which puts me in that nervous state of feeling that I am leaning too far over my skis. I am testing in irb as much as I can as I go but some of the helper methods involve a lot of trust. Three, there is so much new, magical Ruby syntax that I am testing it all in IRB just to see that it even works.

#### Ruby Magic
The first bit of Ruby magic that I have learned is *array subtraction* which is not a real name I think. So you have an array

```ruby
myArray = %w{apple banana cauliflower dog}
```

Oh no, dogs are not sustained directly by photosynthesis! That won't do at all. So you can do this:

```ruby
myArray = myArray - ['dog']
```

and get that canine out of your garden.

Not super impressive, I know, but a useful trick to keep in the back of your mind. In my case, we can strip the [id] off an array of column names when looking at database attributes.

Also I love the `%w{}` operator for quickly creating an array of strings without typing in all the quotes and commas.

#### Metaclass
I think my attraction to Ruby is that at times it almost feels philosophical. Concepts seem to take a bit longer to stick than with, say, JavaScript, but they are rewarding and memorable because the underlying logic mostly seems coherent and well thought out.

I was confronted with a line of code that I will generalize as `self.class.method.each {|meth| ...}` with method and meth being the only substituted code. Breaking this down, we can dive into `self` and understand what is all going on here.

```ruby
class Person
	def self.who_farted
		puts "i want to know who farted"
	end

	def fart
		puts "i farted"
	end
end

bob = Person.new

bob.fart
=> "i farted"

bob.class.who_farted
=> "i want to know who farted"
```

In this stunning, intellectual example, you can see how the difference between instance and class methods, where bob.fart is an instance method available to all objects of the class Person.  However, bob.who_farted would not work - that is a class method, as defined by class in Person. Individual instances do not have direct access to that method. So, we have to go up one level, essentially, and call .class.who_farted as the .class returns Person, and Person as the class can alone run the holy method who_farted.
