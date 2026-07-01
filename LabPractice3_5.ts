//enum Role {
    Admin,
    Editor,
    Viewer
//}
//interface User {
   // username: string;
   // Email: string;
    //role: Role
//}
//const Usert : User [] = [
    //{username : "Mana",Email : "laptop@example.com",role : Role[`Admin`]},
   // {username: "Sawatdee",Email : "mouse@example.com",role : Role[`Editor`]},
    //{username : "Pragha",Email: "telephone@example.com",role : Role[`Viewer`]}
//];
//function showUser(user: User): void{
    //console.log(`Username: ${user.username}`);
    //console.log(`Email: ${user.Email}`);
   // console.log(`Role: ${user.role}`);
//}
//for (const u of Usert ){
    //showUser(u);
//}

enum Role {
    Admin,
    Editor,
    Viewer
}
function checkAsccess(user: User ){
    if(user.role === Role.Admin){
        console.log(`${user.username} เป้นแอดมิน ได้สิทธิ์ทุกอย่าง`);
    }else if (user.role === Role.Editor){
        console.log(`${user.username} เป้นเอดิเตอร์ ได้สิทธิ์แก้ไขข้อมูล`);
    }else{
        console.log(`${user.username} เป้นวืวเวอร์ ได้สิทธิ์ดูข้อมูลอย่างเดียว`);
    }
}
const user1 : User = {name : "Mana", 'email': "AOGfogasfyg@gmail.com", 'role': Role.Admin};
const user2 : User = {name : "Sawatdee", 'email': "sawatdee@example.com", 'role': Role.Editor};
checkAsccess(user1);
checkAsccess(user2);