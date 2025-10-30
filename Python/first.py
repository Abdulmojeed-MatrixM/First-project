num1 = 4
num2 = 5

if num1 < num2:
    print("num1 is less than num2")
else:
    print("num1 is not less than num2")


# Data Type Conversion
int_val = 20
float_val = 25.9
complex_val = 30j

print(int_val)
print(float_val)
print(complex_val)

r = float(int_val)
d = int(float_val)
f = complex(int_val)

print(r)
print(d)
print(f)

# Random Number generation
import random
print(random.randrange(1, 20))

# Loop through String
s = "I love Qur'an"
for ch in s:
    print(ch)

# String Length
s = "I love Qur'an"
print(len(s))

if "love" in s:
    print("yes, Love is present")

# String Format
quantity = 5
itemnumber = 45
pricetag = 88.9
myOrder = "I want to purchase {} pieces of items {} for {} pounds"
print(myOrder.format(quantity, itemnumber, pricetag))


# boolean
x_bool = True
y_bool = True
result_and = x_bool and y_bool
print(result_and)

s_bool = True
t_bool = False
result_or = s_bool or t_bool
print(result_or)

j_bool = True
k_bool = False
result_not = not k_bool
print(result_not)

# boolean conditional statements
a = 10
b = 20
if a < b:
    print("a is less than b")
else:
    print("a is not less than b")


#boolean function
def is_greater(x, y):
    return x > y
print(is_greater(10, 5))  # True
print(is_greater(3, 7))   # False


bool()
print(bool(1))        # True
print(bool(0))        # False


#in
fruits = ["apple", "banana", "cherry"]

# Check if "banana" is in the list
print("banana" in fruits)  # Output: True

# Check if "grape" is in the list
print("grape" in fruits)    # Output: False


#is
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print(list1 == list2) # Output: True (values are equal)
print(list1 is list2) # Output: False (different objects in memory)

print(list1 == list3) # Output: True (values are equal)
print(list1 is list3) # Output: True (list3 refers to the same object as list1)


#list in dictionary

my_dict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}

# Check for a key (the default behavior)
print("model" in my_dict)  # Output: True
print("color" in my_dict)  # Output: False

# To check for a value, use the .values() method
print("Ford" in my_dict.values())  # Output: True
print(1965 in my_dict.values()) # Output: False



###
#append i n a list
my_list = ['a', 'b']
my_list.append(['c', 'd'])
# my_list is now ['a', 'b', ['c', 'd']]


###
# extend() in a list
my_list = ['a', 'b']
my_list.extend(['c', 'd'])
# my_list is now ['a', 'b', 'c', 'd']



##dictionary
my_dict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}

# Accessing the value associated with the key "model"
model_value = my_dict["model"]
print(model_value) # Output: Mustang       


### Remove a key-value pair using pop()
my_dict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}

del my_dict["year"]

print(my_dict)
# Output: {'brand': 'Ford', 'model': 'Mustang'}