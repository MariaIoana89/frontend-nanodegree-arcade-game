    canvasLimits = {
            width: 500,
            height: 600
        }
        // Enemies our player must avoid
    class Enemy {
        constructor(x, y, speed) {
            // Variables applied to each of our instances go here,
            // we've provided one for you to get started
            this.x = x;
            this.y = y;
            this.speed = speed;
            // The image/sprite for our enemies, this uses
            // a helper we've provided to easily load images
            this.sprite = 'images/enemy-bug.png';
        }

        // Update the enemy's position, required method for game
        // Parameter: dt, a time delta between ticks
        update(dt) {
            // You should multiply any movement by the dt parameter
            // which will ensure the game runs at the same speed for
            // all computers.
            this.x += this.speed * dt;
            if (this.x > 500) {
                this.x = -100;
            }
        };

        //Reset enemy's position and change their speed
        /*if (this.x > canvasLimits.width) {
            this.x = -100;
            this.speed = 100 + Math.floor(Math.random() * 400);
        }
*/
        // Draw the enemy on the screen, required method for game
        render() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        };
    }
    // Now write your own player class
    // This class requires an update(), render() and
    // a handleInput() method.
    class Player {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.sprite = 'images/char-princess-girl.png';
        }

        //update method
        update() {

            }
            //render method
        render() {
                ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
            }
            //handleInput method
        handleInput() {
            switch (keypress) {
                case 'left':
                    this.x -= this.speed + 50;
                    break;
                case 'right':
                    this.x += this.speed + 50;
                    break;
                case 'up':
                    this.y -= this.speed + 60;
                case 'down':
                    this.y += this.speed + 60;
                    break;
            }
        }
    }
    // Now instantiate your objects.
    // Place all enemy objects in an array called allEnemies
    // Place the player object in a variable called player
    const allEnemies = [];
    const enemy1 = new Enemy(30, 50, 300);
    const enemy2 = new Enemy(30, 150, 200);
    const enemy3 = new Enemy(30, 250, 100);
    allEnemies.push(enemy1, enemy2, enemy3);
    const player = new Player(200, 400);

    //win the game
    if (player.y < 1) {
        showModal();
    }

    // This listens for key presses and sends the keys to your
    // Player.handleInput() method. You don't need to modify this.
    document.addEventListener('keyup', function(e) {
        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };

        player.handleInput(allowedKeys[e.keyCode]);
    });

    function showModal() {
        const modal = document.querySelector('#modal');
        modal.style.display = "block";
    }