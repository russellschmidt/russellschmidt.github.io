---
path: "/blog/ruby-method-missing/"
date: "2016-10-17T17:12:33.962Z"
title: "Ruby Method Mising"
type: "blog"
---

A little innocuous method `method_missing` snuck into a problem in my Bloc Software Engineering homework. Oh you know, just implement `method_missing` for a find() method in our ActiveRecord-ish ORM experiment. I was referred to [this link](http://rubylearning.com/satishtalim/ruby_method_missing.html) which is a nice, concise explanation.

Saving you the click, basically the `method_missing` method is designed to deal with the `NoMethodError` exception that is raised when code calls a method that can't be found. Our `method_missing` function allows for a graceful exception handling and potential recovery. In my problem set, I am supposed to implement this such that `Entry.find_by(:name, name)` and `Entry.find_by_name(name)` produce identical results.

A lovely example was presented but as is often the case, the example code is too simple for my tiny, dinosaur brain. I actually need to hop into IRB to understand it.

So let's play around in console.

```bash
2.3.0 :013 > class Person
2.3.0 :014?>   def hey
2.3.0 :015?>     puts "hey"
2.3.0 :016?>     end
2.3.0 :017?>   def bye
2.3.0 :018?>     puts "bye"
2.3.0 :019?>     end
2.3.0 :020?>   def method_missing(m, *args, &block)
2.3.0 :021?>     puts "no #{m} here"
2.3.0 :022?>     end
2.3.0 :023?>   end

2.3.0 :024 > bob = Person.new
 => #<Person:0x007fb6c9a7b8e0>

2.3.0 :027 > bob.fcks_given
no fcks_given here
 => nil
 ```

 So this is the basic idea - we call a method that is not defined in the class, and we get a nice graceful message.

 But I am supposed to be able to make a method `Entry.find_by_name(name)` fire off. Now note that only `find_by` exists in code. Naturally I need to do a bit more research to figure out the best approach for a solution.

 Fortunately, I have bought a dozen Ruby books, and the gem of a book Eloquent Ruby has an entire chapter devoted to `method_missing`.

 The first thing to know is that `method_missing` is pure Ruby magic. When a function is called and is not found in the inheritance tree, the party does not just stop. Ruby then calls `method_missing` secretly in the background. What we do when we implement `method_missing` is we are overriding the default behavior. That is important to know if we are going to be customizing the method, because you definitely some sort of default behavior for non-explicit cases.

 Now I think I figured this out for the quick'n'dirty solution, being sure to define in the same class as my `find_by` method:

 ```ruby
  def method_missing(method, *arguments, &block)
    if method == "find_by_name"
      find_by(:name, *arguments)
    else
      puts "no such method found"
    end
  end
  ```

So we can satisfy the problem set's solution and see how this method can serve to provide your own syntactic sugar within your code - such as providing custom method names for search, here - without repeating method definitions.

Per my amazing book on Eloquent Ruby, there is even more that you can do with `method_missing` besides customizing an already robust error catching method. You can also use `method_missing` for delegation.

Let's say we have a class `Spreadsheet` and we also have a class `SecretSpreadsheet` that needs to authenticate the user attempting to view a `Spreadsheet` before handing off control. If `Spreadsheet` has 25 methods, we would need to write 25 methods in `SecretSpreadsheet` that first authenticate and then lastly pass off to the same-named method in `Spreadsheet` which is repetitive and lame. It does not scale well as a solution at all - every new method on `Spreadsheet` needs an analog method in `SecretSpreadsheet`.

So the solution is to use `method_missing` as a catch-all that will authenticate and then use our new best friend method `send` to call the method. This is an exceptional use case for `send` as obviously we can't call a method in the form of a variable in the syntax `@spreadsheet.variable_name` - we need to use `variable.send(method, *arguments)` and then we don't need to write 25 methods in `SecretSpreadsheet` - we only write what we need for the security routines and then pass the method and arguments onto our original `Spreadsheet` class. The trick is `send` allows us to call functions dynamically and programmatically.

What happens if a super common method like `to_s` is called on a `SecretSpreadsheet` object? It will never hit `method_missing` because it isn't missing! The book suggests you have your `SecretSpreadsheet` document inherit from `BasicObject` which is such a foundational, atomic class that it practically has no methods, which avoids all this trouble. Now even common methods will be unknown and trip the `method_missing`.

