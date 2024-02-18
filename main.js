let square = document.querySelectorAll(".boxes div");
let title = document.getElementsByClassName("title")[0];
let turn = 'X';
let arr = [];


function end(n1, n2, n3){
    title.innerHTML = `${arr[n1]} Winner`;
    document.getElementById(`box`+n1).style.backgroundColor = "green";
    document.getElementById(`box`+n2).style.backgroundColor = "green";
    document.getElementById(`box`+n3).style.backgroundColor = "green";
    title.style.backgroundColor = "green";

    setInterval(function(){title.innerHTML += '.'}, 1000);
    setTimeout(function(){location.reload()}, 4000);
}


function Winner(){
    for(let i = 1; i < 10; i++){
            arr[i] = document.getElementById(`box${i}`).innerHTML;                
    } 

    if(arr[1] == arr[2] && arr[2] == arr[3] && arr[1] != ''){
        end(1, 2, 3);
    }
    else if(arr[4] == arr[5] && arr[5] == arr[6] && arr[5] != ''){
        end(4, 5, 6);
    }
    else if(arr[7] == arr[8] && arr[8] == arr[9] && arr[7] != ''){
        end(7, 8, 9);
    }        
    else if(arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != ''){
        end(1, 4, 7);
    }      
    else if(arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != ''){
        end(2, 5, 8);
    }      
    else if(arr[3] == arr[6] && arr[6] == arr[9] && arr[6] != ''){
        end(3, 6, 9);
    }        
    else if(arr[1] == arr[5] && arr[5] == arr[9] && arr[5] != ''){
        end(1, 5, 9);
    }    
    else if(arr[3] == arr[5] && arr[5] == arr[7] && arr[3] != ''){
        end(3, 5, 7);
    }
    else if(arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && arr[6] && arr[7] && arr[8] && arr[9] != ''){
        title.innerHTML = `!!`;
        title.style.backgroundColor = "red";
        setInterval(function(){title.innerHTML += '.'}, 1000);
        setTimeout(function(){location.reload()}, 4000);

    }
}

square.forEach(function(ele){
    ele.onclick = function(){
        if(turn === 'X' && ele.innerHTML == ''){
            ele.innerHTML = 'X';
            turn = 'O';
            title.innerHTML = turn;
        }
        
        else if(turn === 'O' && ele.innerHTML == ''){
            ele.innerHTML = 'O';
            turn = 'X';
            title.innerHTML = turn;
        }
        Winner();
    }    
}
);









