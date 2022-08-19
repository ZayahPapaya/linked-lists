# Challenge Summary
<!-- Description of the challenge -->
Given a queue of of cats and dogs, have a dequeue that can select for cat, dog, or no preference, each finding the 'oldest' selected item.

## Whiteboard Process
<!-- Embedded whiteboard image -->
![cc12](/codechallenge12.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I decided it would be more fun to make my one remove function be able to dynamically act on the linked list based on input or lack of input.

## Solution
<!-- Show how to run your code, and examples of it in action -->
`shelter.DQ( (animal) => animal.type === 'cat')` or `shelter.DQ( (animal) => animal.type === 'dog')`
