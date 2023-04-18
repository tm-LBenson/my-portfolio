---
title: An Introduction to Merge Sort
slug: An-Introduction-to-Merge-Sort
excerpt: Merge Sort is a divide and conquer sorting algorithm that works by recursively dividing an array into smaller pieces, sorting those pieces, and then merging them back together in a sorted order. It is a stable sort, meaning that it preserves the relative order of elements with equal values...
date: 2023-01-03
category: Data Structures
author: Lewis Benson
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

# An Introduction to Merge Sort: When to Use it and How it Works

## Introduction to Merge Sort

Merge Sort is a divide and conquer sorting algorithm that works by recursively dividing an array into smaller pieces, sorting those pieces, and then merging them back together in a sorted order. It is a stable sort, meaning that it preserves the relative order of elements with equal values.

## Pseudo-Code Implementation

The following is the pseudo-code implementation of the Merge Sort algorithm:

```js
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

The Merge Sort algorithm begins by declaring a variable `n` equal to the length of the array. If the length of the array is greater than 1, the array is divided into two halves, `left` and `right`, and the `Mergesort` function is called recursively on each of these halves.

Once both halves have been sorted, the `Merge` function is called on the two sorted halves, passing in the original array as the result array. This will merge the two sorted halves back together in a sorted manner, resulting in the original array being sorted.

The `Merge` function works by using three pointers, `i`, `j`, and `k`, to iterate through the `left`, `right`, and `arr` arrays, respectively. The function compares the elements at the current positions of `i` and `j` in the `left` and `right` arrays, and stores the smaller of the two in the arr array at the current position `k`. It then increments the pointer for the array from which the element was taken (either `i` or `j`) and increments `k`. This process continues until either the `left` or `right` array is fully traversed.

Once one of the arrays has been fully traversed, the function then copies over the remaining elements from the other array into the `arr` array.

## Practicality in Interviews

Merge Sort is a popular choice for sorting algorithms in technical interviews due to its efficiency and stability. It has a time complexity of O(n log n), which makes it more efficient than other popular sorting algorithms such as Insertion Sort (O(n^2)). It is also a stable sort, meaning that it preserves the relative order of elements with equal values, which can be an important consideration in some cases.

In an interview setting, it may be useful to consider using Merge Sort when faced with a problem that requires sorting a large array or when the stability of the sort is important.

## Time Complexity

As mentioned earlier, the time complexity of Merge Sort is O(n log n). This means that the time it takes for the algorithm to complete grows at a rate of n log n, where n is the size of the array. This makes it more efficient than algorithms such as Insertion Sort, which has a time complexity of O(n^2) and may not be practical for sorting large arrays.

## Real-World Use as a Web Developer

As a web developer, I would likely use Merge Sort in situations where I need to sort a large array and time efficiency is a concern. It is also a good choice when the stability of the sort is important, such as when I need to ensure that elements with equal values retain their relative order.

## How Merge Sort Works

As mentioned earlier, Merge Sort is a divide and conquer sorting algorithm that works by recursively dividing an array into smaller pieces, sorting those pieces, and then merging them back together in a sorted order.

Here is a step-by-step breakdown of the Merge Sort algorithm:

1. The `Mergesort` function is called on an array of elements.

2. A variable `n` is declared and set to the length of the array.

3. If the length of the array is greater than 1, the array is divided into two halves, `left` and `right`.

4. The Mergesort function is called recursively on each of the `left` and `right` arrays.

5. Once both the `left` and `right` arrays have been sorted, the `Merge` function is called on the two sorted arrays, passing in the original array as the result array.

6. The `Merge` function uses three pointers, `i`, `j`, and `k`, to iterate through the `left`, `right`, and `arr` arrays, respectively.

7. The function compares the elements at the current positions of `i` and `j` in the `left` and `right` arrays, and stores the smaller of the two in the `arr` array at the current position `k`.

8. It then increments the pointer for the array from which the element was taken (either `i` or `j`) and increments `k`.

9. This process continues until either the `left` or `right` array is fully traversed.

10. Once one of the arrays has been fully traversed, the function then copies over the remaining elements from the other array into the `arr` array.

11. The `Merge` function returns the sorted `arr` array, and the `Mergesort` function returns the sorted array to the caller.

## Example

To see how Merge Sort works in practice, let's walk through an example using the sample array `[8, 4, 23, 42, 16, 15]`.

1. The `Mergesort` function is called on the array.

2. `n` is set to 6.

3. The array is divided into two halves: `left` is `[8, 4, 23]` and `right` is `[42, 16, 15]`.

4. The `Mergesort` function is called recursively on the `left` array.

5. `n` is set to 3.

6. The `left` array is divided into two halves: `[8]` and `[4, 23]`.

7. The `Mergesort` function is called recursively on both halves.

8. Both halves are of length 1 and are therefore already sorted, so the `Merge` function is called on them, passing in `[4, 23]` as the result array.

9. The `Merge` function compares the two elements, `4` and `23`, and stores the smaller element, `4`, in the `result` array at position `k` (0). It then increments `i` (the pointer for the `left` array) and `k`.

10. The function then compares the next two elements, `23` and `4`, and stores the smaller element, `4`, in the `result` array at position `k` (1). It then increments `j` (the pointer for the `right` array) and `k`.

11. The `left` and `right` arrays have been fully traversed, so the `Merge` function returns the sorted `result` array, `[4, 4]`.

12. The `Mergesort` function is called recursively on the `right` array.

13. `n` is set to 3.

14. The `right` array is divided into two halves: `[42]` and `[16, 15]`.

15. The `Mergesort` function is called recursively on both halves.

16. Both halves are of length 1 and are therefore already sorted, so the `Merge` function is called on them, passing in `[16, 15]` as the result array.

17. The `Merge` function compares the two elements, `16` and `15`, and stores the smaller element, `15`, in the `result` array at position `k` (0). It then increments `j` (the pointer for the `right` array) and `k`.

18. The function then compares the next two elements, `16` and `15`, and stores the smaller element, `15`, in the `result` array at position `k` (1). It then increments `i` (the pointer for the `left` array) and `k`.

19. The `left` and `right` arrays have been fully traversed, so the `Merge` function returns the sorted `result` array, `[15, 16]`.

20. The `Merge` function is called on the sorted `left` and `right` arrays, passing in the original array as the result array.

21. The `Merge` function compares the first elements of the `left` and `right` arrays, `4` and `15`, and stores the smaller element, `4`, in the `arr` array at position `k` (0). It then increments `i` (the pointer for the `left` array) and `k`.

22. The function then compares the next two elements, `4` and `15`, and stores the smaller element, `4`, in the `arr` array at position `k` (1). It then increments `i` and `k`.

23. The function then compares the next two elements, `23` and `15`, and stores the smaller element, `15`, in the `arr` array at position `k` (2). It then increments `j` (the pointer for the `right` array) and `k`.

24. The function then compares the next two elements, `23` and `16`, and stores the smaller element, `16`, in the `arr` array at position `k` (3). It then increments `j` and `k`.

25. The `left` and `right` arrays have been fully traversed, so the `Merge` function returns the sorted `arr` array, `[4, 4, 15, 16]`.

26. The `Mergesort` function returns the sorted array to the caller.

If you were to write a `mergeSort` function in JavaScript, it would look like this:

```js
function mergeSort(arr) {
  const n = arr.length;

  if (n > 1) {
    const mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);

    merge(left, right, arr);
  }

  return arr;

  function merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }

    if (i === left.length) {
      for (let l = j; l < right.length; l++) {
        arr[k] = right[l];
        k++;
      }
    } else {
      for (let l = i; l < left.length; l++) {
        arr[k] = left[l];
        k++;
      }
    }
  }
}
```

## Conclusion

Merge Sort is a divide and conquer sorting algorithm that is known for its efficiency and stability. It has a time complexity of O(n log n), which makes it more efficient than other popular sorting algorithms such as Insertion Sort (O(n^2)). It is also a stable sort, meaning that it preserve the relative order of elements with equal values.

As a web developer, you may choose to use Merge Sort in situations where you need to sort a large array and time efficiency is a concern, or when the stability of the sort is important.

Overall, Merge Sort is a reliable and efficient choice for sorting arrays and is worth considering in a variety of contexts.

## Code Available on GitHub

The code for this algorithm is available on [GitHub](https://github.com/tm-LBenson/data-structures-and-algorithms). To run the code, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the repository.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm test` to run the test suite.

Navigate into JavaScript/401 to see the data structures and algorithms code.

Thank you for reading!

## Resources

1. [GeeksforGeeks](https://www.geeksforgeeks.org/merge-sort/)
2. [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
3. [MIT OpenCourseWare](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-4-mergesort-and-divide-and-conquer/)
4. [mycodeschool on YouTube](https://www.youtube.com/watch?v=TzeBrDU-JaY)
5. [TutorialsPoint](https://www.tutorialspoint.com/data_structures_algorithms/merge_sort_algorithm.htm)
6. [Studytonight](https://www.studytonight.com/data-structures/merge-sort)
7. [CodeProject](https://www.codeproject.com/Articles/22388/Introduction-to-Algorithms-Merge-sort)
8. [HackerRank](https://www.hackerrank.com/topics/merge-sort)
