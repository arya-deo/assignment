string=input("enter a word:-")
string1=string[::-1]
if string.lower()==string1.lower():
    print("This is a palindrome word")
else:
    print("This is not a palindrome word")