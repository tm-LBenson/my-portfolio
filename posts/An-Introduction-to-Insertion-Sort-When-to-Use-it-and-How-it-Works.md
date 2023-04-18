---
title: An Introduction to Insertion Sort
slug: An-Introduction-to-Insertion-Sort-When-to-Use-it-and-How-it-Works
excerpt: Insertion Sort is a common sorting algorithm that can be used to arrange an array of elements in ascending or descending order. It works by iterating through the array and inserting each element into its correct position among the elements to its left that are already sorted...
date: 2023-01-02
author: Lewis Benson
category: Data Structures
tags:
  - coding
  - coding bootcamp
  - programming
  - tech
  - technology
  - web development
  - software engineering
---

<!-- @format -->

# An Introduction to Insertion Sort: When to Use it and How it Works

## Introduction to Insertion Sort

Insertion Sort is a common sorting algorithm that can be used to arrange an array of elements in ascending or descending order. It works by iterating through the array and inserting each element into its correct position among the elements to its left that are already sorted.

## Pseudo-Code Implementation

The following is the pseudo-code implementation of the Insertion Sort algorithm:

```js
InsertionSort(int[] arr)
    FOR i = 1 to arr.length
      int j <-- i - 1
      int temp <-- arr[i]
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
      arr[j + 1] <-- temp
```

1. Initialize a variable `i` to 1. This variable will be used to keep track of the position of the element we are currently sorting.
2. Initialize a variable `j` to `i - 1`. This variable will be used to keep track of the position of the element we are comparing the current element to.
3. Initialize a variable temp to the value of the element at position `i`. This variable will be used to store the current element as we compare it to the other elements in the array.
4. Check if `j` is greater than or equal to 0 and `temp` is less than the element at position `j`. If both

## Practicality in Interviews

Although Insertion Sort is a simple and straightforward algorithm, I do not believe it is a practical test to use in an interview. This is because there are faster algorithms available that can sort larger arrays in less time. For example, the Quicksort algorithm has a much better time complexity (more on this below) and is generally considered to be a more efficient option for sorting large arrays.

## Time Complexity

Speaking of time complexity, the big O of Insertion Sort is O(n^2). This means that the time it takes for the algorithm to complete grows at a rate of n^2, where n is the size of the array. This can make Insertion Sort impractical for sorting very large arrays, as the time it takes to complete the sort can become impractical.

## Real-World Use as a Web Developer

In the real world, as a web developer, I may use Insertion Sort in situations where I need to sort a small array and time efficiency is not a major concern. For example, if I have a list of a few hundred items that I need to sort, Insertion Sort might be a good choice. However, if I had a list of a few million items that needed to be sorted, I would probably choose a faster algorithm like Quicksort or Merge Sort.

## How Insertion Sort Works

Insertion Sort works by iterating through an array of elements and comparing each element to the elements to its left that are already sorted. It then inserts the element into its correct position among the sorted elements.

Here is a step-by-step breakdown of the Insertion Sort algorithm:

1. Initialize a variable `i` to 1. This variable will be used to keep track of the position of the element we are currently sorting.
2. Initialize a variable `j` to `i - 1`. This variable will be used to keep track of the position of the element we are comparing the current element to.
3. Initialize a variable `temp` to the value of the element at position `i`. This variable will be used to store the current element as we compare it to the other elements in the array.
4. Check if `j` is greater than or equal to 0 and `temp` is less than the element at position `j`. If both of these conditions are true, execute the following steps:
   1. Set the value of the element at position `j + 1` to the value of the element at position `j`.
   2. Decrement `j` by 1.
5. Repeat step 4 until `j` is no longer greater than or equal to 0 or `temp` is no longer less than the element at position `j`.
6. Set the value of the element at position `j + 1` to the value of `temp`.
7. Increment `i` by 1.
8. If `i` is less than the length of the array, go back to step 2. If `i` is equal to or greater than the length of the array, the sort is complete.

## Code Available on GitHub

If you'd like to take a closer look at the code for this algorithm, or try it out for yourself, you can find it in my GitHub repository. To access the code, simply click the link below:

[Link To GitHub Repo](https://github.com/tm-LBenson/data-structures-and-algorithms)

In the repository, you'll find a directory called "javascript," which contains all of the code challenges I have completed as I have been learning JavaScript. To run all of the tests for these code challenges, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal window and navigate to the root directory of the repository.
3. Run `npm i` to install the necessary dependencies.
4. Run `npm test` to run all of the tests for the code challenges in the `javascript` directory.

You can also run the tests for individual code challenges by using the command `npm test <filename>`. For example, to run the tests for a code challenge called `string-reversal.test.js`, you would run `npm test string-reversal.test.js`.

Feel free to browse through the code challenges and try them out for yourself. You can even fork the repository and work on the challenges yourself, using different approaches to solve the problems.

In addition to the code challenges, you'll also find a directory called "401" in the repository. This directory contains code that I wrote while working through the 401 curriculum at Code Fellows. While these are not actual challenges, reviewing the code can be a good way for you to familiarize yourself with the data structures that I worked with during this time.

## References

1. "Insertion Sort" - Wikipedia: https://en.wikipedia.org/wiki/Insertion_sort

2. "Insertion Sort" - GeeksforGeeks: https://www.geeksforgeeks.org/insertion-sort/

3. "Insertion Sort" - Studytonight: https://www.studytonight.com/data-structures/insertion-sort

4. "Insertion Sort" - Visualgo: https://visualgo.net/en/sorting#insertionsort
