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