#Uruchamia sie zieloną strzałką

import pygame, sys
from rocket import Rocket


class Game(object):

    def __init__(self):
        # Config
        self.tps_max = 25.0

        #Initialization
        pygame.init()
        self.screen = pygame.display.set_mode((1280, 720))
        icon = pygame.image.load("rocket.png")
        pygame.display.set_caption("Space rocket")
        pygame.display.set_icon(icon)
        
        self.tps_clock = pygame.time.Clock()
        self.tps_delta = 0.0

        self.player = Rocket(self)

        while True:
            # Handle events
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    sys.exit(0)
                elif event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
                    sys.exit(0)

            # Ticking
            self.tps_delta += self.tps_clock.tick() / 1000   # dt - to czas ms miedzy klatkami
            while self.tps_delta > 1/self.tps_max:
                self.tick()
                self.tps_delta -= 1/self.tps_max

            # Drawing
            self.screen.fill((0, 0, 0))
            self.draw()    
            pygame.display.flip()

    def tick(self):
        self.player.tick()
        # Checking inputs
        keys = pygame.key.get_pressed()


    def draw(self):
        # Drawing
        self.player.draw()
        
        
if __name__ == "__main__":
    Game()



    

