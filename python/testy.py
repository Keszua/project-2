

produkty = ("mleko", "ser", "parówki")
tup = 1, 2, 3 # totez jest tuple
produkty = produkty + tup	# można robić konkatenacje, następuje stworzenie nowego tupla




print(produkty)
print(type(tup))

# set (zbiór)
s = {1, 2, 3, 1, 1, 2, 3}
s2 = set({3, 4, 5})

print(s)
print(type(s))
print(s2)
print(type(s2))
# print(s.intersection(s2))
# print(s.difference(s2))   #{1, 2}  elementy ze zbioru s, których nie ma w s2
# print(s2.difference(s))   #{4, 5}  elementy ze zbioru s2, których nie ma w s
s = s.union(s2)
print(s)
print(type(s))

s = list(s)
print(s)
print(type(s))

# film: https://www.youtube.com/watch?v=7biI5qv_Ld0
# skończyłem na 30 minucie
