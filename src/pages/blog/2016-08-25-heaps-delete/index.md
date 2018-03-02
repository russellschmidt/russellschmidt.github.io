---
path: "/blog/heap-delete/"
date: "2016-08-25T17:12:33.962Z"
title: "Heap Delete"
type: "blog"
---

## Deleting a node in a min-heap
One of the assignments for Bloc's SET program involves creating CRUD methods in Ruby to build a heap and tear it down again. I am using a min-heap for reference.

There are a ton of online references with illustrations on how to delete a node in a heap. In essence, the credited response is that you swap out the right-most node on the bottom row with the now-empty target. Then you proceed to swap either up or down to re-heap / heapify / whathaveyou so that each row's items, in the case of a min-heap, is smaller than any given item in the row that follows.

Note that the measure of what constitutes smaller is itself a little confusing but no matter.

[Emory U's Heap Delete logorithm page](http://www.mathcs.emory.edu/~cheung/Courses/171/Syllabus/9-BinTree/heap-delete.html)
[U. of Alberta's Heap Delete Page](https://webdocs.cs.ualberta.ca/~holte/T26/heap-del.html)
[Clemson's Heap Delete Page](http://www.math.clemson.edu/~warner/M865/HeapDelete.html)
[Some dude on YouTube](https://youtu.be/ijfPvX2qYOQ)

