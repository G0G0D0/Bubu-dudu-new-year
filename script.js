document.addEventListener('DOMContentLoaded', () => {
    // Text messages setup
    const messages = [
        "Ukw, we were destined to meet exactly the same point in time a year before.",
        "See how it all paved a road for us.",
        "Me writing those stories just because I met with an accident thereby leaving me with no other options and you on the other hand, needed my stories.",
        "And eventually here we are, holding hands together showing irrelevance to time feeling as if it's not even a day passed since we have been together.",
        "2022 was my worst year and 2023 on the contrary, is my best year since I got you in the first place and 2024 I am damn sure that it's gonna be a vera level year.",
        "Better than 2023, I suppose since I will always have you.",
        "You are everything to me baby.",
        "You arrested me with your love and I am happy to be a prisoner for the rest of my life.",
        "I believe true love and unconditional love is something, that lets to do anything, anywhere with immense obstinacy.",
        "This is our first new year together and we will have n number of new years.",
        "Happy new year 2024 baby ",
        "and booahhhh"
    ];
    let currentLine = 0;
    const greetingText = document.getElementById('greeting-text');

    function updateText() {
        greetingText.textContent = messages[currentLine];
        currentLine = (currentLine + 1) % messages.length;
    }
    setInterval(updateText, 4000); // Change text every 4 seconds

    // Fireworks setup
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.size = Math.random() * 3 + 1;
            this.vx = Math.random() * 6 - 3;
            this.vy = Math.random() * 6 - 3;
            this.lifetime = 100;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.2;  // gravity
            this.lifetime--;
        }
    }

    class HeartParticle extends Particle {
        constructor(x, y) {
            super(x, y, 'red');
            this.size = Math.random() * 5 + 2;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(Math.PI);
            ctx.scale(this.size, this.size);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-1.5, -1.5, -1.5, -0.5, 0, 0);
            ctx.bezierCurveTo(1.5, -0.5, 1.5, -1.5, 0, -3);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }
    }

    let particles = [];

    function shootFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
        for (let i = 0; i < 100; i++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push(new Particle(x, y, color));
        }
    }

    function shootHearts() {
        const x = Math.random() * canvas.width;
        const y = canvas.height;
        for (let i = 0; i < 20; i++) {
            particles.push(new HeartParticle(x, y));
        }
    }

    function animate() {
        ctx.fillStyle = 'rgba(255, 102, 163, 0.1)'; // Light rose overlay
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles = particles.filter(particle => particle.lifetime > 0);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    animate(); // Start the fireworks and hearts animation
    setInterval(shootFirework, 1000); // Create new fireworks every second
    setInterval(shootHearts, 2000); // Create new hearts every 2 seconds
});






// document.addEventListener('DOMContentLoaded', () => {
//     // Text display functionality
//     const greetingText = document.getElementById('greeting-text');
//     const messages = [
//         "Ukw, we were destined to meet exactly the same point in time a year before.",
//         "See how it all paved a road for us.",
//         "Me writing those stories just because I met with an accident thereby leaving me with no other options and you on the other hand, needed my stories.",
//         "And eventually here we are, holding hands together showing irrelevance to time feeling as if it's not even a day passed since we have been together.",
//         "2022 was my worst year and 2023 on the contrary, is my best year since I got you in the first place and 2024 I am damn sure that it's gonna be a vera level year.",
//         "Better than 2023, I suppose since I will always have you.",
//         "You are everything to me baby.",
//         "You arrested me with your love and I am happy to be a prisoner for the rest of my life.",
//         "I believe true love and unconditional love is something, that lets to do anything, anywhere with immense obstinacy.",
//         "This is our first new year together and we will have n number of new years.",
//         "Happy new year 2024 baby ",
//         "and booahhhh"
//         // ... Your messages ...
//     ];
//     let currentLine = 0;

//     function updateText() {
//         greetingText.classList.remove('fade-in');
//         greetingText.classList.add('fade-out');

//         setTimeout(() => {
//             greetingText.textContent = messages[currentLine];
//             greetingText.classList.remove('fade-out');
//             greetingText.classList.add('fade-in');

//             // Trigger fireworks if the current message is "Happy new year 2024 baby"
//             if (messages[currentLine].includes("Happy new year 2024 baby")) {
//                 shootFirework();
//             }

//             currentLine = (currentLine + 1) % messages.length;
//         }, 1000);

//         setTimeout(updateText, 5000);
//     }

//     setTimeout(updateText, 1000); // Start the message updates

//     // Fireworks functionality
//     const canvas = document.getElementById('fireworksCanvas');
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles = [];
//     const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

//     function shootFirework() {
//         const x = Math.random() * canvas.width;
//         const y = Math.random() * canvas.height;
//         for (let i = 0; i < 100; i++) {
//             particles.push(new Particle(x, y));
//         }
//     }

//     class Particle {
//         constructor(x, y) {
//             this.x = x;
//             this.y = y;
//             this.radius = Math.random() * 3 + 1;
//             this.color = colors[Math.floor(Math.random() * colors.length)];
//             this.velocity = {
//                 x: Math.random() - 0.5 * 5,
//                 y: Math.random() - 0.5 * 5
//             };
//             this.life = 100;
//         }

//         draw() {
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//             ctx.fillStyle = this.color;
//             ctx.fill();
//             ctx.closePath();
//         }

//         update() {
//             this.draw();
//             this.x += this.velocity.x;
//             this.y += this.velocity.y;
//             this.life--;
//         }
//     }

//     function animate() {
//         requestAnimationFrame(animate);
//         ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         particles.forEach((particle, i) => {
//             if (particle.life > 0) {
//                 particle.update();
//             } else {
//                 particles.splice(i, 1);
//             }
//         });
//     }

//     animate(); // Start the fireworks animation
// });



// document.addEventListener('DOMContentLoaded', () => {
    
//     const greetingText = document.getElementById('greeting-text');
//     const messages = [
//         "Ukw, we were destined to meet exactly the same point in time a year before.",
//         "See how it all paved a road for us.",
//         "Me writing those stories just because I met with an accident thereby leaving me with no other options and you on the other hand, needed my stories.",
//         "And eventually here we are, holding hands together showing irrelevance to time feeling as if it's not even a day passed since we have been together.",
//         "2022 was my worst year and 2023 on the contrary, is my best year since I got you in the first place and 2024 I am damn sure that it's gonna be a vera level year.",
//         "Better than 2023, I suppose since I will always have you.",
//         "You are everything to me baby.",
//         "You arrested me with your love and I am happy to be a prisoner for the rest of my life.",
//         "I believe true love and unconditional love is something, that lets to do anything, anywhere with immense obstinacy.",
//         "This is our first new year together and we will have n number of new years.",
//         "Happy new year 2024 baby ",
//         "and booahhhh"
//     ];
//     let currentLine = 0;

//     function updateText() {
//         greetingText.classList.remove('fade-in');
//         greetingText.classList.add('fade-out');

//         setTimeout(() => {
//             greetingText.textContent = messages[currentLine];
//             greetingText.classList.remove('fade-out');
//             greetingText.classList.add('fade-in');
//             currentLine = (currentLine + 1) % messages.length;
//         }, 1000); // This timeout controls the fade-out duration

//         setTimeout(updateText, 5000); // This timeout sets the delay for the next line
//     }

//     setTimeout(updateText, 1000); // Initial delay before starting the loop

// //     // ... Existing fireworks code ...
// // });

    

//     // Fireworks
//     const canvas = document.getElementById('fireworksCanvas');
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles = [];
//     const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

//     function shootFirework() {
//         const x = Math.random() * canvas.width;
//         const y = Math.random() * canvas.height;
//         for (let i = 0; i < 100; i++) {
//             particles.push(new Particle(x, y));
//         }
//     }

//     class Particle {
//         constructor(x, y) {
//             this.x = x;
//             this.y = y;
//             this.radius = Math.random() * 3 + 1;
//             this.color = colors[Math.floor(Math.random() * colors.length)];
//             this.velocity = {
//                 x: Math.random() - 0.5 * 5,
//                 y: Math.random() - 0.5 * 5
//             };
//             this.life = 100;
//         }

//         draw() {
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//             ctx.fillStyle = this.color;
//             ctx.fill();
//             ctx.closePath();
//         }

//         update() {
//             this.draw();
//             this.x += this.velocity.x;
//             this.y += this.velocity.y;
//             this.life--;
//         }
//     }

//     function animate() {
//         requestAnimationFrame(animate);
//         ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         particles.forEach((particle, i) => {
//             if (particle.life > 0) {
//                 particle.update();
//             } else {
//                 particles.splice(i, 1);
//             }
//         });
//     }

//     setInterval(shootFirework, 1000);
//     animate();
// });
