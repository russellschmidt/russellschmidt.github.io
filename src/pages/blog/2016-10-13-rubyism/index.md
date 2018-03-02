---
path: "/blog/rubyism/"
date: "2016-10-13T17:12:33.962Z"
title: "Rubyism"
type: "blog"
---

Some new methods I have learned about in the Object model have caught my eye today. They are a pair of getter and setter methods called `instance_variable_set()` and `instance_variable_get()` that at first struck me as odd.

Both take a string as an argument, though can also take a symbol, and this string or symbol should naturally be the name of the instance variable. In both cases, this should include the `@` symbol if appropriate.

`instance_variable_set` takes a second argument, namely the value we are assigning to the instance variable. Interestingly, this method will also create the instance variable in the class if it does not already exist, which might be a bit of a nightmare for debugging ("Where the hell is that variable coming from?") so good to keep in mind should that situation arise.

#### On a related note
The method `instance_variables` is a related, interesting method. It is also from the Object class, and returns an array of instance variables. These instance variables must be initialized to be included - the [Ruby documentation](https://ruby-doc.org/core-2.3.1/Object.html#method-i-instance_variable_get) notes that just using `attr_accessor` does not create the instance variable.

#### Why would you need these?
My initial reaction was revulsion, imagining myself starting a new job, having to track down where these instance variables, undefined in the class, even came from.

However, they came in handy in the example ActiveRecord replacement we are writing for my software engineering program at [Bloc](www.bloc.io). We have a situation where we want to reload an object pulled from our database, discarding any unsaved changes. These methods combine to allow us to iterate over the attributes and quickly assign values to them from the database which overwrites any unsaved changes.

#### `Send` me an angel ooooh oooooh oooooooooh
The `send` method is worth mentioning at this stage, also. It is another class method for the Object class, which is the root class for all other objects in Ruby.

`Send` at first seems to be a strange bird. It requires the first argument to be the name of an instance method. You call send on an instance, so as to *send* the second or more optional arguments which are passed to the called method. The [example from Ruby Doc](http://ruby-doc.org/core-2.3.1/Object.html#method-i-send) is pretty clear as to how to use send, but it leaves open the question of why use `send`? I mean, why wouldn't use the less verbose method name you are already typing?

```ruby
class Klass
	def heyWhatsUpHello(*args)
		puts "You my trap queen " + args.join(" ")
	end
end

obj = Klass.new
# send way
obj.send :heyWhatsUpHello("Fetty", "Wap")
#=> You my trap queen Fetty Wap"

#normal way
obj.hello("Fetty", "Wap")
#=> You my trap queen Fetty Wap"
```

For one, you can call private methods with `send` which is a lot like saying the advantage of this gun is that it doesn't have a safety. In sure hands, this is great for testing. Left in production code or in a repo, you could perhaps be opening up the door to unwanted method calls.

For another, with `send` we can programmatically call a method. Perhaps, depending on context, the method may change. Similarly we can programmatically assign attributes with send, passing in the name of the attribute, or even using iteration to convert hashes into variables and values.
