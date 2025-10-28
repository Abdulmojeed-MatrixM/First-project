x=4
y=5

if x<y:
    print("x is lesser than y")
else:
    print("x is not equal to y")
    
    

 #Data Type Conversion
a=20
b=25.9
c=30j

print(a)
print(b)
print(c)

r=float(a)
d=int(b)
f=complex(a)

print(r)
print(d)
print(f)

#Random Number generation
import random
print(random.randrange(1,20))

#Loop through String
x = "I love  Qur'an"
for x in x:
    print(x)

#String Length
x= "I love  Qur'an" 
print(len(x))

if "love" in x:
    print("yes, Love is present")


#String Format
quantity = 5
itemnumber = 45
pricetag = 88.9
myOrder = "I want to purchase {} pieces of items {} for {} pounds"
print(myOrder.format(quantity, itemnumber, pricetag))