console.log("Mini Project");
let friendship=['Friendship is the hardest thing in the world to explain. It\'s not something you learn in school. But if you haven\'t learned the meaning of friendship, you really haven\'t learned anything.','Don\'t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.'	,
'The most beautiful discovery true friends make is that they can grow separately without growing apart.',
'Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born.','Life is partly what we make it, and partly what it is made by the friends we choose.','They may forget what you said, but they will never forget how you made them feel.','Find a group of people who challenge and inspire you; spend a lot of time with them, and it will change your life.','For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.','The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart','Happiness can be found even in the darkest of times, if one only remembers to turn on the light.',
'A real friend is one who walks in when the rest of the world walks out.','A friend is someone who understands your past, believes in your future, and accepts you just the way you are.']

let love=['The water shines only by the sun. And it is you who are my sun.– Charles de Leusse','I swear I couldn\'t love you more than I do right now, and yet I know I will tomorrow. — Leo Christopher','I love you” begins by I, but it ends up by you. ― Charles de Leusse','There is a madness in loving you, a lack of reason that makes it feel so flawless. — Leo Christopher','You know it\'s love when all you want is that person to be happy, even if you’re not part of their happiness. — Julia Roberts'];

let nature=['In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they\'re still beautiful. –Alice Walker','Forget not that the earth delights to feel your bare feet and the winds long to play with your hair. —Khalil Gibran','Look deep into nature, and then you will understand everything better. —Albert Einstein','Heaven is under our feet as well as over our heads. —Henry David Thoreau','To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug. —Helen Keller','We don\'t inherit the earth from our ancestors, we borrow it from our children. —Native American proverb']

function quote(){
	let random=Math.floor(Math.random()*(friendship.length));
	document.getElementById('Display').innerHTML=friendship[random];
}
function quote1(){
	let random=Math.floor(Math.random()*(love.length));
	document.getElementById('Display1').innerHTML=love[random];
}
function quote2(){
	let random=Math.floor(Math.random()*(nature.length));
	document.getElementById('Display2').innerHTML=nature[random];
}