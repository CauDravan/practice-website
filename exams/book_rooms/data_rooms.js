var rooms = []

function addRoom() {
    var name = document.getElementById("name").value.trim();
    var desc = document.getElementById("desc").value.trim();
    var price = document.getElementById("price").value.trim();

    if (!name || !desc || !price) {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }

    if (price <= 0) {
        alert("Giá phải lớn hơn 0");
        return;
    }

    var room = {
        name: name,
        desc: desc,
        price: Number(price),
    };

    rooms.push(room);
    clearForm();
    alert("Đã thêm phòng thành công");
}

function renderRooms() {
    var room_list = document.getElementById("list");
    room_list.innerHTML = "";

    if (rooms.length === 0) {
        room_list.innerHTML = "<p>Chưa có phòng nào được thêm</p>";
        return;
    }

    rooms.forEach((room, index) => {
        room_list.innerHTML += `
            <div class="room-item">
                <strong>${room.name}</strong><br>
                ${room.desc}<br>
                Giá: ${room.price.toLocaleString()} đ
            </div>
        `;
    });
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("price").value = "";
}