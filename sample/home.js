let room = [null,null,null,null];
let selectNum = 0;
let deckID;
let HP = 20;
window.addEventListener('load', async () => {
    const enemy = document.getElementById('enemy-card');
    deckID = await genarateDeck();
    console.log(deckID);
});
async function test(){
    
    const work = drow(room,deckID);
    
    for(let i = 0; i < 4;i++){
        room[i] = work[i];
    }
    
}