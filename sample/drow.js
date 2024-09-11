async function drow(roomObject,deckid){
    if(HP < 1){
        alert("負けています... （再挑戦するにはページをリロードしてください。）");
        return;
    }
    document.getElementById("dorw-button").disabled  = true;
    const element = document.getElementById('room');
    selectNum = 0;
    const roomCards = document.getElementById('room').querySelectorAll('img');
    console.log(roomCards.length);
    let l = 0;
    if(roomCards.length == 1 || roomCards.length == 0){
        l = (4 - roomCards.length);
    }else{
        alert("３枚選んでください");
    }
    try {
        
        for(let i = 0; i < l;i++){
            const card_data = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckid}/draw/?count=1`);
            const card = await card_data.json();
            roomObject[i] = card; 
            const card_img = document.createElement("img");
            const card_meta = roomObject[i].cards[0];
            
            const imageUrl = await card_meta["image"]; 
            
            card_img.src = card_img.src = imageUrl;
            card_img.width = 226 * 0.5;
            card_img.height = 314 * 0.5;
            card_img.dataset.value = card_meta["value"];
            card_img.dataset.suit = card_meta["suit"];
            card_img.dataset.code = card_meta["code"];
            console.log(card_img);
            
            card_img.onclick = () => selectCard(card_img);
            element.appendChild(card_img);
        }
    } catch (error) {
        document.getElementById("dorw-button").disabled  = false;
    }
        return roomObject;
    }