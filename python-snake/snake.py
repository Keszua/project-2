import pygame, sys, random
from pygame.locals import *

dsiplay_x = 200
dsiplay_y = 200

def on_grid_random():
    x = random.randint(0, dsiplay_x-10)
    y = random.randint(0, dsiplay_y-10)
    return (x//10 *10, y//10 * 10)

def collision(c1, c2):
    return (c1[0] == c2[0]) and (c1[1] == c2[1])   

UP = 0
RIGHT = 1
DOWN = 2
LEFT = 3

pygame.init()
screen = pygame.display.set_mode((dsiplay_x, dsiplay_y))
pygame.display.set_caption("Snake")

snake = [(dsiplay_x/2, dsiplay_y/2), (dsiplay_x/2+10, dsiplay_y/2), (dsiplay_x/2+20, dsiplay_y/2)]
snake_skin = pygame.Surface((10, 10))
snake_skin.fill((255, 255, 255))

apple_pos = on_grid_random()
apple = pygame.Surface((10, 10))
apple.fill((255, 0, 0))

my_direction = LEFT
clock = pygame.time.Clock()

while True:
    clock.tick(10)
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit(0)

        if event.type == KEYDOWN:
            if event.key == K_UP:    my_direction = UP
            if event.key == K_DOWN:  my_direction = DOWN
            if event.key == K_LEFT:  my_direction = LEFT
            if event.key == K_RIGHT: my_direction = RIGHT

    # Kolizja z jablkiem
    if collision(snake[0], apple_pos):
         apple_pos = on_grid_random()
         snake.append((1000,1000))



    # Kolizja z ekranem
    if snake[0][0] <= 0:    
        snake[0] = (snake[0][0] + dsiplay_x, snake[0][1])
    if snake[0][0] >= dsiplay_x:    
        snake[0] = (snake[0][0] - dsiplay_x, snake[0][1])
    if snake[0][1] <= 0:    
        snake[0] = (snake[0][0], snake[0][1] + dsiplay_y)
    if snake[0][1] >= dsiplay_y:    
        snake[0] = (snake[0][0], snake[0][1] - dsiplay_y)



    # Zmiana kierunku
    if my_direction == UP:
        snake[0] = (snake[0][0], snake[0][1] -10)
    if my_direction == DOWN:
        snake[0] = (snake[0][0], snake[0][1] +10)
    if my_direction == RIGHT:
        snake[0] = (snake[0][0] +10, snake[0][1])
    if my_direction == LEFT:
        snake[0] = (snake[0][0] -10, snake[0][1])
    
    print("snake2: ", snake)
    
    # Przerysowanie węża
    for i in range(len(snake) -1, 0, -1):   # wykona się petla od tyłu po tablicy snake
        snake[i] = (snake[i-1][0], snake[i-1][1])

    screen.fill((0, 0, 0))
    screen.blit(apple, apple_pos)
    for pos in snake:
        screen.blit(snake_skin, pos)



    pygame.display.update()












