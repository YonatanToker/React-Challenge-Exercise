## A properties management React Exercise
You can take this challenge as a way of exercising/testing your React skills:
https://github.com/YonatanToker/React-Challenge-Exercise/assets/116793943/f3114edf-0d6b-4f8d-971b-8d441837492c

### Instructions:
Your task is to build a transfer list component.

A transfer list allows users to pass items from one list to another.
Like the video showed.

The transfer list should consists of two lists with directional actions buttons.
The user should be able to select one or multiple items and move the item 
to the other list by clicking the action buttons. For better user experience you are also required to uncheck the items once they are being passed and also make them sorted within their list.

### My Solution:

I solved this problem with wrapping the LeftList, Arrow*2, RightList within a context which keeps track of both of the lists and has 2 functions which are the arrows (moveLeftToRight, moveRightToLeft). You can see more just clone the repository.
