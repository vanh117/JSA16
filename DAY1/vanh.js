// let x = Number(prompt("Nhập số"))
// switch(x){
//     case 1:
//         console.log("1. In ra sv(1)")
//         break
//     case 2:
//         console.log("2. Tạo ra (2)")
//         break
//     case 3:
//         console.log("3. update(3)")
//         break
//     case 4:
//         console.log("4. xoá(4)")
//         break
//     case 5:
//         console.log("5. thoát chương trình (5)")
//         break
//     default:
//         console.log("Hala Madrid")
        
// }
// Bài 1
// Cho 1 mảng array = [2,11,16,7] và giá trị k = 9
// Đầu ra mong muốn: [0,3] Nếu không có 2 giá trị trong mảng công lại mà bằng với k
// => in ra console là: no satisfaction value exists
// Giải thích: array[0] + array[3] = 9

// Bài 2
// Cho 2 string abcba và tjkjk. Nhiệm vụ là hãy check xem nếu các chuỗi được cho 
// khi đảo ngược thứ tự các tứu trong string có bằng có bằng với string ban đầu được cho không.
// Nếu bằng thì in ra true nếu k thì in ra false

    let array = [2,11,16,7]
    let k = 9;
    let emptArr = [];
 
    for( let i=0; i< array.length; i++){
        for(let j=1; i< array.length; j++){
            if(array[i] + array[j] == k){
                emptArr.push(i);
                emptArr.push(j);
                console.log(emptArr);
            }

        }
    }
   